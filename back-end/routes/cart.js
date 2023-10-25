const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const userController = require('../controllers/userController.js');
const cartController = require('../controllers/cartController.js');
const { verifyUserToken, IsUser, IsAdmin } = require('../middlewares/auth')

router.get('/cart/view', cartController.view_cart);
router.use(verifyUserToken)

// Define cart routes here
router.post('/cart/add',  cartController.add_to_cart);



router.delete('/cart/remove/:id',  cartController.remove_selectedProduct);


module.exports = router;
