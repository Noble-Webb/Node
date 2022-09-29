//route that handles the creation of products///

const express = require('express');
const path = require('path');

const rootDir =require('../util/path');

// mini plugable express app
const router = express.Router();

const products = []; 

//only handles GET request
// /admin/add-porduct => GET
router.get('/add-product', (req, res, next) =>{
    res.render('add-product', {docTitle: 'Add Product'});
});

//only triggers for POST requests
// /admin/add-porduct => POST
router.post('/add-product', (req, res, next) =>{
    // console.log(req.body);
    //push new object into the array with ke/values 
    //matching req.body obj
    products.push({title: req.body.title});

    //redirect with express
    res.redirect('/');
});

exports.routes = router;
exports.products = products; 