//user routes
//creates path with join function to concat segments
const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir =require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) =>{
    //console log imported products
    console.log(adminData.products);

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;