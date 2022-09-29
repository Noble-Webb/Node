const express = require('express');

const app = express();

//routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//mods imports
const bodyParser = require('body-parser');
const path = require('path');
//handlebars//
const expressHbs = require('express-handlebars');

// Register the given template engine callback
//designate layouts location
//define default layout used for all files
app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views');
//handlebars//

//Pug//
//set globalconfiguration value
//works because we installed pug and will auto register
// app.set('view engine', 'pug');
//set where to look for views/templates views is default
// app.set('views', 'views');
//Pug//


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
    res.status(404).render('404', {docTitle: '404'});
});

app.listen(3000);