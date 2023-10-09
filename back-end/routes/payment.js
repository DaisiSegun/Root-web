const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const userController = require('../controllers/userController.js');
const paymentController = require('../controllers/paymentController.js');
const { verifyUserToken, IsUser, IsAdmin } = require('../middlewares/auth')

router.post('/flw-webhook', IsUser, paymentController.flw_webhook)
router.use(verifyUserToken)

// Define cart routes here
router.post('/initiate-payment', IsUser, paymentController.initiate_payments);

router.post('/billing-details', IsUser, paymentController.billing_address);



router.post('/v1/flutterwave', IsUser, paymentController.get_payment_data)


module.exports = router;