//user routes
//creates path with join function to concat segments
const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir =require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) =>{
    //access products
    const products = adminData.products;
    //will use default templating engine and render
    //simplified since we define template and 
    // location in app.js
    //data mapped to key/value pairs in object
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/'});
});

module.exports = router;