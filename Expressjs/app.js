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
//catch-all error page
app.use((req, res, next)=>{
    res.status(404).send('<h1>404 Page not Found.</h1> </br > <h1> How did you get here?</h1>')
});

app.listen(3000);