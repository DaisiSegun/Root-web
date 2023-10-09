const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    unique: true,
    required: true,
  },
  customer: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  
  },
  orderedItems: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  shippingAddress: {
    state: String,
    lga: String,
    city: String,
    address: String,
    alternatePhoneNumber: String,
    alternatePhoneNumber2: String,
  },
  totalPricePaid: {
    type: Number,
    required: true,
  },
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
