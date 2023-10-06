const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SelectedProduct = require('../models/selectedProduct');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const selectedproduct = require('../models/selectedProduct');
const cookieParser = require('cookie-parser');

exports.add_to_cart = async (req, res, next) => {
  const token = req.cookies.authcookie;
  const decoded = jwt.verify(token, process.env.JWT_TOKEN);
  req.user = decoded;

  if (!token) {
    return res.status(401).json({ error: 'User not authorized' });
  }

  try {
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { productID, quantity } = req.body;

    const product = await Product.findById(productID);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const cart = await Cart.findOne({ user: user._id });

    if (product.stock.ski < quantity) {
      return res.status(400).json({ error: 'Out of stock' });
    }

    const selectedProduct = new SelectedProduct({
      product: productID,
      cart: cart._id,
      quantity: quantity,
      price: product.price * quantity,
    });

    await selectedProduct.save();

    
    const fPrice = selectedProduct.price + cart.total;

    cart.selectedProducts.push(selectedProduct._id);
    if (!isNaN(fPrice)){
      cart.total = fPrice;
    } else {
      cart.total = selectedProduct.price;
    }

    console.log(cart.total,selectedProduct)

    await cart.save();
    res.status(201).send(`Product has been added to cart ${selectedProduct.cart}`);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'An error occurred.' });
  }
};



exports.view_cart = async (req, res, next) => {
  const token = req.cookies.authcookie;
  const decoded = jwt.verify(token, process.env.JWT_TOKEN);

  if (!token) {
    return res.status(401).json({ error: 'User not authorized' });
  }

  try {
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the cart associated with the user
    const cart = await Cart.findOne({ user: user._id }).populate({
      path: 'selectedProducts',
      populate: { path: 'product' }, // Populate the 'product' field within 'selectedProducts'
    });

    if (!cart) {
      return res.status(400).json({ error: 'Cart not found or cart is empty' });
    }

    const response = {
      cartTotal: cart.total,
      selectedProducts: cart.selectedProducts,
    };

    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status().json({ error: 'An error occurred while fetching the cart' });
  }
};
exports.remove_selectedProduct = async (req, res, next) => {
  const token = req.cookies.authcookie;
  const decoded = jwt.verify(token, process.env.JWT_TOKEN);

  if (!token) {
    return res.status(401).json({ error: 'User not authorized' });
  }

  try {
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const productId = req.params.id;
    const cart = await Cart.findOne({ user: user._id });
    console.log(user._id)
    if (!cart) {
      return res.status(400).json({ error: 'Cart not found' });
    }

    // Find the selected product by its ID within the cart
    const selectedProductIndex = cart.selectedProducts.findIndex(
      (product) => product._id.toString() === productId
    );

    if (selectedProductIndex === -1) {
      return res.status(400).json({ error: 'Selected product not found in the cart' });
    }

    // Get the selected product and its price
    const x = cart.selectedProducts[selectedProductIndex]

    console.log(cart.selectedProducts)
    const selectedProduct = await selectedproduct.findById(x);

    console.log(selectedProduct, x);

    // Remove the selected product from the cart's selectedProducts array
    cart.selectedProducts.splice(selectedProductIndex, 1);
    

    // Update the cart's total by subtracting the reduction amount
    const updatedTotal = cart.total - selectedProduct.price;
    cart.total = updatedTotal;

    // Save the updated cart
    await cart.save();

    await selectedproduct.findByIdAndRemove(x);

    res.status(200).json({ message: 'Selected product removed from the cart', cart });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
};
