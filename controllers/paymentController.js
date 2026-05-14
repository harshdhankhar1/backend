const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');
const FoodItem = require('../models/FoodItem');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { items, restaurantId } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    let totalAmount = 0;

    // Verify items and calculate total amount
    for (const item of items) {
      const foodItem = await FoodItem.findById(item.foodId);
      if (!foodItem || foodItem.quantity < item.quantity) {
        return res.status(400).json({ message: `Item ${foodItem ? foodItem.name : item.foodId} is unavailable or insufficient quantity` });
      }
      totalAmount += foodItem.price * item.quantity;
    }

    // Razorpay amount is in paise (smallest currency unit, multiply by 100)
    const options = {
      amount: Math.round(totalAmount * 100), 
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      totalAmount, // returning original total for our reference
    });
  } catch (error) {
    console.error("Razorpay Create Order Error:", error);
    res.status(500).json({ 
      message: error.description || error.message || "Unknown Razorpay Error", 
      error 
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      items,
      restaurantId,
      totalAmount
    } = req.body;

    // Verify Signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is authentic

      // Decrease quantities in DB
      for (const item of items) {
        const foodItem = await FoodItem.findById(item.foodId);
        if (foodItem) {
          foodItem.quantity -= item.quantity;
          if (foodItem.quantity <= 0) {
            foodItem.quantity = 0;
            foodItem.available = false;
          }
          await foodItem.save();
        }
      }

      // Save Order in DB
      const order = await Order.create({
        userId: req.user._id,
        restaurantId,
        items,
        totalAmount,
        paymentId: razorpay_payment_id,
        status: 'paid'
      });

      return res.status(200).json({ message: "Payment verified successfully", order });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getKey = (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID });
};

module.exports = {
  createOrder,
  verifyPayment,
  getKey
};
