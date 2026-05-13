const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  getRestaurantOrders,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect, restaurantOnly } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, placeOrder)
  .get(protect, getUserOrders);

router.route('/restaurant')
  .get(protect, restaurantOnly, getRestaurantOrders);

router.route('/:id/status')
  .put(protect, restaurantOnly, updateOrderStatus);

module.exports = router;
