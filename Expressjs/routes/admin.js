//route that handles the creation of products///

const express = require('express');
const path = require('path');

const rootDir =require('../util/path');

// mini plugable express app
const router = express.Router();

//only handles GET request
// /admin/add-porduct => GET
router.get('/add-product', (req, res, next) =>{
    //form with improper html
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

//only triggers for POST requests
// /admin/add-porduct => POST
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    //redirect with express
    res.redirect('/');
});

module.exports = router