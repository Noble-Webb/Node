const express = require('express');

const productsController = require('../controllers/products');

// mini plugable express app 
const router = express.Router();

 

//only handles GET request
// /admin/add-porduct => GET
//
router.get('/add-product', productsController.getAddProduct); 

//only triggers for POST requests
// /admin/add-porduct => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
