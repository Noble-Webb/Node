const express = require('express');

//routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//parsing
const bodyParser = require('body-parser');
const path = require('path');

//set globalconfiguration value
//works because we installed pug and will auto register
app.set('view engine', 'pug');
//set where to look for views/templates views is default
app.set('views', 'views');

const app = express();

//parser not for files
app.use(bodyParser.urlencoded({extended: false}));
//allows to statically read file/access
//arg is the path for read access
app.use(express.static(path.join(__dirname, 'public')));

//exported routes from admin
//can deconstruct routes
//adminData holds all of the exports need to signify 
app.use('/admin', adminData.routes);
//exported routes from shop
app.use(shopRoutes);
//catch-all error page
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);