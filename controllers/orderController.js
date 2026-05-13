const Order = require('../models/Order');
const FoodItem = require('../models/FoodItem');

const placeOrder = async (req, res) => {
  try {
    const { items, restaurantId } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    let totalAmount = 0;
    
    // Verify items and calculate total, decrease quantity
    for (const item of items) {
      const foodItem = await FoodItem.findById(item.foodId);
      if (!foodItem || foodItem.quantity < item.quantity) {
        return res.status(400).json({ message: `Item ${foodItem ? foodItem.name : item.foodId} is unavailable or insufficient quantity` });
      }
      
      item.price = foodItem.price;
      totalAmount += foodItem.price * item.quantity;
      
      foodItem.quantity -= item.quantity;
      if (foodItem.quantity === 0) {
        foodItem.available = false;
      }
      await foodItem.save();
    }

    const order = await Order.create({
      userId: req.user._id,
      restaurantId,
      items,
      totalAmount,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate('items.foodId', 'name').populate('restaurantId', 'name');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantOrders = async (req, res) => {
  try {
    const orders = await Order.find({ restaurantId: req.user._id }).populate('items.foodId', 'name').populate('userId', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.restaurantId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    order.status = status;
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
  getRestaurantOrders,
  updateOrderStatus,
};
