const axios = require('axios');

async function testLive() {
  try {
    console.log('Logging in to live server...');
    // We need valid credentials. I'll just register a new dummy user.
    const email = `testuser_${Date.now()}@example.com`;
    const regRes = await axios.post('https://backend-vraw.onrender.com/api/auth/register', {
      name: 'Test User',
      email: email,
      password: 'password123',
      role: 'user'
    });
    
    const token = regRes.data.token;
    console.log('Registered successfully. Token acquired.');

    // Fetch food items
    const foodRes = await axios.get('https://backend-vraw.onrender.com/api/food');
    const foodItems = foodRes.data;
    if (foodItems.length === 0) {
      console.log('No food items found on live server!');
      return;
    }

    const foodItem = foodItems[0];
    
    console.log('Testing create order on live server for food ID:', foodItem._id);
    const orderRes = await axios.post('https://backend-vraw.onrender.com/api/payment/create-order', {
      restaurantId: foodItem.restaurantId?._id || foodItem.restaurantId,
      items: [{ foodId: foodItem._id, quantity: 1 }]
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    console.log('Success!', orderRes.data);
  } catch (error) {
    if (error.response) {
      console.error('Error Status:', error.response.status);
      console.error('Error StatusText:', error.response.statusText);
      console.error('Error Data:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

testLive();
