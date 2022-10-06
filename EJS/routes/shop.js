//user routes
const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop');


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart/delete-item', shopController.postCartDeleteItem);

router.get('/orders', shopController.getOrders);
//: signals to express there will be a variable coming ordering matters put delete above
router.get('/products/:productId', shopController.getProduct);

router.get('/checkout', shopController.getCheckout);


module.exports = router;