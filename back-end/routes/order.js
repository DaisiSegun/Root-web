const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const userController = require('../controllers/userController.js');
const orderController = require('../controllers/orderController')
const { verifyUserToken, IsUser, IsAdmin } = require('../middlewares/auth')


router.use(verifyUserToken)

router.get('/all-orders', IsAdmin, orderController.get_orders)

router.get('/order-single/:id', IsAdmin, orderController.get_single)



module.exports = router;