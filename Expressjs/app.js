const express = require('express');

//routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

//parsing
const bodyParser = require('body-parser');

const app = express();

//parser not for files
app.use(bodyParser.urlencoded({extended: false}));

//exported routes from admin
app.use(adminRoutes);
//exported routes from shop
app.use(shopRoutes);


app.listen(3000);