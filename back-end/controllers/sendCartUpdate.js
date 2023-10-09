const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SelectedProduct = require('../models/selectedProduct');
const Product = require('../models/Product');
const Cart = require('../models/Cart');


const socketIo = require('socket.io');
const http = require('http');
 // Import the function to send cart updates

 const SetupWebsocket = async (req, res) => {
    // Initialize Socket.IO
    io.on('connection', (socket) => {
      console.log('A user connected.');

      // Handle disconnection
      socket.on('disconnect', () => {
        console.log('A user disconnected.');
      });
    });

    module.exports = io;
  try {
    // Verify the user's token and retrieve the cart data
    const token = req.cookies.authcookie;
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    if (!token) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the cart associated with the user and populate selectedProducts
    const cart = await Cart.findOne({ user: user._id }).populate({
      path: 'selectedProducts',
      populate: { path: 'product' }, // Populate the 'product' field within 'selectedProducts'
    });

    // Calculate the number of selected products
    const cartItemNo = cart.selectedProducts.length;

    // Send cart data to the connected client(s) via WebSocket
    io.emit('cartUpdate', {
      cartTotal: cart.total,
      selectedProducts: cart.selectedProducts,
      cartItemNo: cartItemNo,
    });

    // Continue with your route logic and respond to the client as needed
    // ...

    // Optionally, return cart data or a success message
    return res.json({
      cartTotal: cart.total,
      selectedProducts: cart.selectedProducts,
      cartItemNo: cartItemNo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred.' });
  }
};

// Export the SetupWebsocket function
module.exports = SetupWebsocket;

// Define a function to send cart updates to connected clients
const sendCartUpdate = () => {
  io.emit('cartUpdate', {
    cartTotal: cart.total,
    selectedProducts: cart.selectedProducts,
    cartItemNo: cartItemNo,
  });
};

module.exports = sendCartUpdate;
