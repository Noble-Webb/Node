//route that handles the creation of products///

const express = require('express');

// mini plugable express app
const router = express.Router();

//only handles get request
router.get('/add-product', (req, res, next) =>{
    //form with improper html
    res.send('<form action="/product" method="POST"> <input type="text" name="title"> <button type="submit"> Add Product </button></form>')
});

//only triggers for POST requests
router.post('/product', (req, res, next) =>{
    console.log(req.body);
    //redirect with express
    res.redirect('/');
});

module.exports = router