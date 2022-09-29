//user routes
//creates path with join function to concat segments
const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir =require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) =>{
    //will use default templating engine and render
    //simplified since we define template and 
    // location in app.js
    res.render('shop');
});

module.exports = router;