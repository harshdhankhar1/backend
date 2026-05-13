const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true, // [longitude, latitude]
    },
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
    default: 'Other',
  },
  pickupTime: {
    type: String,
    required: false,
  },
  available: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

foodItemSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('FoodItem', foodItemSchema);
