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

//':' is a dynamic path segment
router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
