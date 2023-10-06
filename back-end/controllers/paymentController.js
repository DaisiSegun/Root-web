const Flutterwave = require("flutterwave-node");
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const Selectedproduct = require('../models/selectedProduct');
const got = require("got");
const nodemailer = require('nodemailer');

function generateOrderId() {
  const prefix = 'RTO';
  const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate 4 random digits

  // Ensure the randomDigits are exactly 4 digits long by padding with zeros if needed
  const orderId = prefix + randomDigits.toString().padStart(4, '0');

  return orderId;
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function generateRootString() {
  const randomString = generateRandomString(6); // You can adjust the length of the random part
  const rootString = `Root-${randomString}`;

  return rootString;
}

exports.initiate_payments = async (req, res) => {
  try {
    const token = req.cookies.authcookie;
    if (!token) {
      return res.status(401).json({ error: 'User not authorized' });
    }
    console.log('hello world');

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;

    const user = await User.findOne({ email: decoded.email });
    const cart = await Cart.findOne({ user: user._id });

    if (!user || !cart) {
      return res.status(404).json({ error: 'User or cart not found' });
    }

    const amount = cart.total;
    console.log(user.email, user.fullName, amount);

    // Use axios for the HTTP POST request
    const response = await got.post("https://api.flutterwave.com/v3/payments", {
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      json: {
        tx_ref: generateRootString(),
        amount: amount,
        currency: "NGN",
        redirect_url: "https://ef58-105-113-92-182.ngrok-free.app/congrats/api/v1/flutterwave",
        meta: {
          consumer_id: user._id,
          sender: "Root Groups"
        },
        customer: {
          email: user.email,  
          phonenumber: user.phoneNumber,
          name: user.fullName,
        },
        customizations: {
          title: "Root Group Payments",
          logo: "https://res.cloudinary.com/dzi8kxyze/image/upload/v1695313807/root_logo_lhjptl.jpg",
        },
      },
    }).json()

    // Handle the response here
    console.log(response);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing the payment' });
  }
};

let storedData = {};

exports.billing_address = async (req, res) => {
  try {
    const { state, LGA, city, street, altPhone01, altPhone02 } = req.body;
    storedData = { state, LGA, city, street, altPhone01, altPhone02};
    // Do something with storedData...
    res.status(200).json({ message: 'Billing address saved successfully' });
    console.log(storedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while processing the payment' });
  }
};



exports.flw_webhook = async (req, res) => {
  const payload = req.body;
	console.log(payload);
	res.status(200).end();
}

exports.get_payment_data = async (req, res) => {
  const { status, tx_ref, transaction_id } = req.query

  if (status == 'successful'){
    try{
        
      const token = req.cookies.authcookie;
      if (!token) {
        return res.status(401).json({ error: 'User not authorized' });
      }
      console.log('hello world');

      const decoded = jwt.verify(token, process.env.JWT_TOKEN);
      req.user = decoded;

      const user = await User.findOne({ email: decoded.email });
      const cart = await Cart.findOne({ user: user._id }).populate({
        path: 'selectedProducts',
        populate: { path: 'product' } // Populate the 'product' field within 'SelectedProduct'
      });

      if (!user || !cart) {
        return res.status(404).json({ error: 'User or cart not found' });
      }

      const amount = cart.total;
      const selectedProducts = cart.selectedProducts; // Now it's an array of populated selected products
      const ordered = [];

      for (const selectedProduct of selectedProducts) {
        const { name, price } = selectedProduct.product; // Access the associated Product data
        ordered.push({ name, quantity : selectedProduct.quantity, price });
      }
      console.log(selectedProducts.name, selectedProducts.quantity, selectedProducts.price)
      console.log(ordered)

      const state = storedData.state;
      const address = storedData.house_address;
      const LGA = storedData.Lga;
      const city = storedData.city;

      const order = new Order({
        orderId: generateOrderId(),
        customer: {
          name: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        },
        orderedItems: ordered,
        shippingAddress: {
          state,
          LGA,
          city,
          address
        },
        totalPricePaid: amount
      })

      const newOrder = await order.save()

      console.log(newOrder)

      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Change this to your email service provider
        auth: {
          user: 'teniolasobande04@gmail.com', // Replace with your email
          pass: process.env.EMAIL_PASSWORD, // Replace with your email password
        },
      });

      const mailOptions = {
        from: 'teniolasobande04@gmail.com',
        to: 'daissegun096@gmail.com', // Replace with the recipient's email
        subject: 'New Order Created',
        text: `a new order ${newOrder.orderId}, has been created for ${newOrder.customer.name}, for the following items ${newOrder.orderedItems}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      cart.selectedProducts = [];

      // Delete selected products from the database
      for (const product of selectedProducts) {
        await Selectedproduct.findByIdAndRemove(product._id);
      }

      // Reset cart total to 0
      cart.total = 0;

      // Save the updated cart
      await cart.save();

      res.status(200).send({message: "order has been created"})

    } catch(err){
      res.status(400).json({error: err.message});
      console.log(err.message)
    }
  }

  else{
    console.log("nothing for your dad")
  }
}

