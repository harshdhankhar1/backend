const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const FoodItem = require('./models/FoodItem');
const dummyData = require('./dummyData');

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for Seeding');

    // Optional: Clear only seeded dummy data to not break real users
    // For this example, we will clear users who have specific dummy emails
    const dummyEmails = dummyData.map(d => d.restaurant.email);
    
    // First, find existing dummy restaurants to delete their food items
    const existingDummyRestaurants = await User.find({ email: { $in: dummyEmails } });
    const existingRestaurantIds = existingDummyRestaurants.map(r => r._id);
    
    await FoodItem.deleteMany({ restaurantId: { $in: existingRestaurantIds } });
    await User.deleteMany({ email: { $in: dummyEmails } });
    
    console.log('Cleared old dummy data');

    for (let data of dummyData) {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.restaurant.password, salt);

      // Create Restaurant
      const newRestaurant = await User.create({
        name: data.restaurant.name,
        email: data.restaurant.email,
        password: hashedPassword,
        role: 'restaurant',
        address: data.restaurant.address,
        location: {
          type: 'Point',
          coordinates: [data.restaurant.longitude, data.restaurant.latitude]
        }
      });

      // Create Food Items for this Restaurant
      const foodItemsToCreate = data.foods.map(food => ({
        ...food,
        restaurantId: newRestaurant._id,
        location: {
          type: 'Point',
          coordinates: [data.restaurant.longitude, data.restaurant.latitude]
        }
      }));

      await FoodItem.insertMany(foodItemsToCreate);
    }

    console.log(`Successfully seeded ${dummyData.length} dummy restaurants and their food items.`);
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
