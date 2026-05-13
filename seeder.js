const mongoose = require('mongoose');
const User = require('./models/User');
const FoodItem = require('./models/FoodItem');
const bcrypt = require('bcryptjs');

const seedDatabase = async () => {
  try {
    const count = await FoodItem.countDocuments();
    if (count > 0) {
      console.log('Database already has food items. Skipping seeding.');
      return;
    }

    console.log('Seeding sample food items...');

    // 1. Create a dummy Restaurant User
    let restaurant = await User.findOne({ email: 'demo-restaurant@example.com' });
    if (!restaurant) {
      const hashedPassword = await bcrypt.hash('password123', 10);
      restaurant = await User.create({
        name: 'The Green Fork',
        email: 'demo-restaurant@example.com',
        password: hashedPassword,
        role: 'restaurant',
      });
    }

    // Coordinates (Base location: roughly New York, NY)
    const baseLat = 40.7128;
    const baseLng = -74.0060;

    const sampleFoods = [
      {
        name: 'Gourmet Margherita Pizza',
        price: 5.99,
        originalPrice: 18.00,
        quantity: 3,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng + 0.01, baseLat + 0.01] },
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80',
        category: 'Pizza',
        pickupTime: '8:00 PM - 9:30 PM'
      },
      {
        name: 'Assorted Bakery Box',
        price: 3.50,
        originalPrice: 12.00,
        quantity: 5,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng - 0.02, baseLat + 0.015] },
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        category: 'Bakery',
        pickupTime: '4:00 PM - 6:00 PM'
      },
      {
        name: 'Classic Cheeseburger',
        price: 4.00,
        originalPrice: 11.00,
        quantity: 2,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng + 0.03, baseLat - 0.01] },
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
        category: 'Burger',
        pickupTime: '9:00 PM - 10:00 PM'
      },
      {
        name: 'Vegetable Biryani',
        price: 6.00,
        originalPrice: 15.00,
        quantity: 4,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng - 0.01, baseLat - 0.02] },
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&w=500&q=80',
        category: 'Indian',
        pickupTime: '7:30 PM - 9:00 PM'
      },
      {
        name: 'Fresh Sushi Platter',
        price: 8.50,
        originalPrice: 24.00,
        quantity: 1,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng + 0.015, baseLat + 0.025] },
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80',
        category: 'Asian',
        pickupTime: '8:30 PM - 10:00 PM'
      },
      {
        name: 'Organic Garden Salad',
        price: 2.99,
        originalPrice: 9.00,
        quantity: 6,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng - 0.03, baseLat - 0.01] },
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        category: 'Healthy',
        pickupTime: '3:00 PM - 5:00 PM'
      },
      {
        name: 'Creamy Alfredo Pasta',
        price: 5.50,
        originalPrice: 16.00,
        quantity: 3,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng + 0.02, baseLat - 0.03] },
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=80',
        category: 'Italian',
        pickupTime: '9:00 PM - 10:30 PM'
      },
      {
        name: 'Iced Coffee & Donuts',
        price: 3.00,
        originalPrice: 8.50,
        quantity: 4,
        restaurantId: restaurant._id,
        location: { type: 'Point', coordinates: [baseLng, baseLat] },
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80',
        category: 'Drinks',
        pickupTime: '5:00 PM - 6:30 PM'
      }
    ];

    await FoodItem.insertMany(sampleFoods);
    console.log('Successfully seeded 8 sample food items.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;
