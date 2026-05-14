const dummyData = [
  // Delhi
  {
    restaurant: {
      name: "Punjabi Rasoi",
      email: "punjabi.rasoi@example.com",
      password: "password123",
      role: "restaurant",
      address: "Connaught Place, New Delhi",
      latitude: 28.6315,
      longitude: 77.2167
    },
    foods: [
      { name: "Dal Makhani & Naan", price: 120, originalPrice: 300, quantity: 5, category: "Meals", pickupTime: "9:00 PM - 10:00 PM", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80" },
      { name: "Paneer Butter Masala", price: 150, originalPrice: 350, quantity: 3, category: "Paneer", pickupTime: "8:30 PM - 9:30 PM", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Delhi Chaat Bhandar",
      email: "chaat.bhandar@example.com",
      password: "password123",
      role: "restaurant",
      address: "Chandni Chowk, New Delhi",
      latitude: 28.6505,
      longitude: 77.2303
    },
    foods: [
      { name: "Aloo Tikki Chaat", price: 50, originalPrice: 120, quantity: 10, category: "Snacks", pickupTime: "7:00 PM - 8:00 PM", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
      { name: "Samosa Combo (4 pcs)", price: 40, originalPrice: 100, quantity: 8, category: "Snacks", pickupTime: "6:00 PM - 7:30 PM", image: "https://images.unsplash.com/photo-1601050690117-94f5f6af4eb3?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Bakehouse Delhi",
      email: "bakehouse.delhi@example.com",
      password: "password123",
      role: "restaurant",
      address: "Hauz Khas Village, New Delhi",
      latitude: 28.5535,
      longitude: 77.1936
    },
    foods: [
      { name: "Assorted Pastry Box", price: 199, originalPrice: 500, quantity: 4, category: "Bakery", pickupTime: "9:30 PM - 10:30 PM", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=500&q=80" },
      { name: "Chocolate Truffle Cake (Half)", price: 250, originalPrice: 600, quantity: 2, category: "Desserts", pickupTime: "8:00 PM - 10:00 PM", image: "https://images.unsplash.com/photo-1578985545062-69928b1ea66a?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Biryani Blues",
      email: "biryani.blues@example.com",
      password: "password123",
      role: "restaurant",
      address: "Lajpat Nagar, New Delhi",
      latitude: 28.5677,
      longitude: 77.2433
    },
    foods: [
      { name: "Chicken Dum Biryani", price: 180, originalPrice: 380, quantity: 6, category: "Biryani", pickupTime: "10:00 PM - 11:00 PM", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // Gurgaon
  {
    restaurant: {
      name: "Cyber City Cafe",
      email: "cyber.cafe@example.com",
      password: "password123",
      role: "restaurant",
      address: "Cyber Hub, Gurgaon",
      latitude: 28.4950,
      longitude: 77.0895
    },
    foods: [
      { name: "Margherita Pizza (Large)", price: 200, originalPrice: 550, quantity: 3, category: "Pizza", pickupTime: "10:30 PM - 11:30 PM", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80" },
      { name: "Veg Burger Combo", price: 120, originalPrice: 280, quantity: 5, category: "Burgers", pickupTime: "9:00 PM - 10:30 PM", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Gurgaon Thali House",
      email: "thali.gurgaon@example.com",
      password: "password123",
      role: "restaurant",
      address: "Sector 29, Gurgaon",
      latitude: 28.4674,
      longitude: 77.0613
    },
    foods: [
      { name: "Maharaja Veg Thali", price: 150, originalPrice: 350, quantity: 6, category: "Thali", pickupTime: "9:30 PM - 10:30 PM", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "The Dessert Studio",
      email: "dessert.studio@example.com",
      password: "password123",
      role: "restaurant",
      address: "Galleria Market, Gurgaon",
      latitude: 28.4682,
      longitude: 77.0833
    },
    foods: [
      { name: "Assorted Donuts Box", price: 149, originalPrice: 399, quantity: 4, category: "Desserts", pickupTime: "8:00 PM - 10:00 PM", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80" },
      { name: "Red Velvet Cupcakes (4)", price: 120, originalPrice: 300, quantity: 3, category: "Bakery", pickupTime: "8:30 PM - 9:30 PM", image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // Noida
  {
    restaurant: {
      name: "Noida Spice",
      email: "noida.spice@example.com",
      password: "password123",
      role: "restaurant",
      address: "Sector 18, Noida",
      latitude: 28.5698,
      longitude: 77.3230
    },
    foods: [
      { name: "Chicken Tikka Wrap", price: 99, originalPrice: 220, quantity: 8, category: "Snacks", pickupTime: "9:00 PM - 10:30 PM", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80" },
      { name: "Paneer Tikka Masala", price: 160, originalPrice: 380, quantity: 4, category: "Paneer", pickupTime: "10:00 PM - 11:00 PM", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Pizza Paradise Noida",
      email: "pizza.noida@example.com",
      password: "password123",
      role: "restaurant",
      address: "DLF Mall of India, Noida",
      latitude: 28.5672,
      longitude: 77.3211
    },
    foods: [
      { name: "Farmhouse Pizza (Medium)", price: 150, originalPrice: 400, quantity: 5, category: "Pizza", pickupTime: "10:00 PM - 11:00 PM", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Sweet Cravings",
      email: "sweet.noida@example.com",
      password: "password123",
      role: "restaurant",
      address: "Sector 50, Noida",
      latitude: 28.5733,
      longitude: 77.3619
    },
    foods: [
      { name: "Surprise Dessert Bag", price: 120, originalPrice: 300, quantity: 6, category: "Desserts", pickupTime: "9:00 PM - 10:30 PM", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // Jaipur
  {
    restaurant: {
      name: "Rajputana Thali",
      email: "rajputana.thali@example.com",
      password: "password123",
      role: "restaurant",
      address: "C Scheme, Jaipur",
      latitude: 26.9054,
      longitude: 75.7997
    },
    foods: [
      { name: "Authentic Rajasthani Thali", price: 180, originalPrice: 450, quantity: 7, category: "Thali", pickupTime: "9:30 PM - 11:00 PM", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Jaipur Sweets",
      email: "jaipur.sweets@example.com",
      password: "password123",
      role: "restaurant",
      address: "Johari Bazaar, Jaipur",
      latitude: 26.9200,
      longitude: 75.8270
    },
    foods: [
      { name: "Mixed Sweets Box (1kg)", price: 250, originalPrice: 600, quantity: 3, category: "Desserts", pickupTime: "8:00 PM - 9:30 PM", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80" },
      { name: "Kachori Surprise Bag", price: 60, originalPrice: 150, quantity: 10, category: "Snacks", pickupTime: "6:00 PM - 8:00 PM", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Pink City Burgers",
      email: "pinkcity.burgers@example.com",
      password: "password123",
      role: "restaurant",
      address: "Malviya Nagar, Jaipur",
      latitude: 26.8530,
      longitude: 75.8047
    },
    foods: [
      { name: "Double Cheese Burger", price: 99, originalPrice: 250, quantity: 5, category: "Burgers", pickupTime: "10:00 PM - 11:30 PM", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" }
    ]
  },

  // Chandigarh
  {
    restaurant: {
      name: "Chandigarh Dhaba",
      email: "chandigarh.dhaba@example.com",
      password: "password123",
      role: "restaurant",
      address: "Sector 17, Chandigarh",
      latitude: 30.7398,
      longitude: 76.7827
    },
    foods: [
      { name: "Butter Chicken Combo", price: 199, originalPrice: 450, quantity: 4, category: "Meals", pickupTime: "10:30 PM - 11:30 PM", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80" },
      { name: "Dal Makhani & Roti", price: 110, originalPrice: 280, quantity: 6, category: "Meals", pickupTime: "10:00 PM - 11:00 PM", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "OvenFresh Chandigarh",
      email: "ovenfresh.chd@example.com",
      password: "password123",
      role: "restaurant",
      address: "Sector 35, Chandigarh",
      latitude: 30.7258,
      longitude: 76.7644
    },
    foods: [
      { name: "Leftover Baked Goods", price: 150, originalPrice: 400, quantity: 3, category: "Bakery", pickupTime: "8:30 PM - 10:00 PM", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    restaurant: {
      name: "Pizza Cravers CHD",
      email: "pizza.chd@example.com",
      password: "password123",
      role: "restaurant",
      address: "Elante Mall, Chandigarh",
      latitude: 30.7055,
      longitude: 76.8013
    },
    foods: [
      { name: "Pepperoni Pizza (Medium)", price: 180, originalPrice: 450, quantity: 4, category: "Pizza", pickupTime: "10:30 PM - 11:30 PM", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80" }
    ]
  }
];

module.exports = dummyData;
