const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

//exported routes from admin
//can deconstruct routes
//adminData holds all of the exports need to signify 
app.use('/admin', adminData.routes);
//exported routes from shop
app.use(shopRoutes);
//catch-all error page
app.use((req, res, next)=>{
    res.status(404).render('404', {docTitle: '404'});
});

app.listen(3000);