const axios = require('axios');

async function testPayment() {
  try {
    // 1. Login to get token (using a dummy restaurant from db)
    // Actually we need a user account. Let's login as a known user or create one.
    // I will just login with a known dummy restaurant to get a token
    const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'punjabi.rasoi@example.com',
      password: 'password123'
    });
    
    const token = loginRes.data.token;
    
    // 2. Fetch food items to get a valid food ID
    const foodRes = await axios.get('http://localhost:5000/api/food');
    const foodItem = foodRes.data[0];

    // 3. Test /payment/key
    console.log('Testing /payment/key...');
    const keyRes = await axios.get('http://localhost:5000/api/payment/key', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Key response:', keyRes.data);

    // 4. Test /payment/create-order
    console.log('Testing /payment/create-order...');
    const orderRes = await axios.post('http://localhost:5000/api/payment/create-order', {
      restaurantId: foodItem.restaurantId,
      items: [{ foodId: foodItem._id, quantity: 1 }]
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    console.log('Order created:', orderRes.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testPayment();
