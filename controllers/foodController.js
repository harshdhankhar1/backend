const FoodItem = require('../models/FoodItem');

const addFoodItem = async (req, res) => {
  try {
    const { name, price, originalPrice, quantity, latitude, longitude } = req.body;

    const foodItem = await FoodItem.create({
      name,
      price,
      originalPrice,
      quantity,
      restaurantId: req.user._id,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    });

    // Emit Socket event to all clients about new food added
    const io = req.app.get('io');
    io.emit('newFoodItem', {
      message: 'New discounted food available!',
      foodItem,
      restaurantName: req.user.name,
    });

    res.status(201).json(foodItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFoodItems = async (req, res) => {
  try {
    const { lat, lng, maxDistance, maxPrice } = req.query;

    let query = { available: true, quantity: { $gt: 0 } };

    // Geospatial query
    if (lat && lng) {
      query.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseInt(maxDistance) || 10000, // default 10km
        },
      };
    }

    if (maxPrice) {
      query.price = { $lte: parseFloat(maxPrice) };
    }

    const foodItems = await FoodItem.find(query).populate('restaurantId', 'name email location');
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find({ restaurantId: req.user._id });
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFoodItem = async (req, res) => {
  try {
    const { id } = req.params;
    const foodItem = await FoodItem.findById(id);

    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    if (foodItem.restaurantId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedFoodItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFoodItem = async (req, res) => {
  try {
    const { id } = req.params;
    const foodItem = await FoodItem.findById(id);

    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    if (foodItem.restaurantId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await foodItem.deleteOne();
    res.json({ message: 'Food item removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addFoodItem,
  getFoodItems,
  getRestaurantFoodItems,
  updateFoodItem,
  deleteFoodItem,
};
