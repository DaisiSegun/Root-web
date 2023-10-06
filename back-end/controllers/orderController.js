const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const Selectedproduct = require('../models/selectedProduct');

exports.get_orders = async (req,res) => {
    try{
        const token = req.cookies.authcookie;
        if (!token) {
            return res.status(401).json({ error: 'User not authorized' });
        }
        const orders = await Order.find();
        res.status(200).json(orders);

    } catch(err){
        console.log(err)
        res.status(400).json({error: "can't het orders"})
    }
}

exports.get_single = async (req,res) => {
    const orderId = req.params.id;
    try{
        const token = req.cookies.authcookie;
        if (!token) {
            return res.status(401).json({ error: 'User not authorized' });
        }
        const order = await Order.findById(orderId);
        if (!order) {
        return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json(order);

    } catch(err){
        console.log(err)
        res.status(400).json({error: "can't het orders"})
    }
}