const express = require('express');
const router = express.Router();
const {
  addFoodItem,
  getFoodItems,
  getRestaurantFoodItems,
  updateFoodItem,
  deleteFoodItem,
} = require('../controllers/foodController');
const { protect, restaurantOnly } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, restaurantOnly, addFoodItem)
  .get(getFoodItems);

router.route('/restaurant')
  .get(protect, restaurantOnly, getRestaurantFoodItems);

router.route('/:id')
  .put(protect, restaurantOnly, updateFoodItem)
  .delete(protect, restaurantOnly, deleteFoodItem);

module.exports = router;
