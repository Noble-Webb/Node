const express = require('express');

const adminController = require('../controllers/admin');

// mini plugable express app 
const router = express.Router();

 

//only handles GET request
// /admin/add-porduct => GET
//
router.get('/products', adminController.getProducts); 

router.get('/add-product', adminController.getAddProduct); 

//only triggers for POST requests
// /admin/add-porduct => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
