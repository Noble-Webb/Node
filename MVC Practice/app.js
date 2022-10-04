//main imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//creating mini-app
const app = express();

//set template & views location
app.set('view engine', 'ejs');
app.set('views', 'views');

//use bodyParser & express to point to static styles
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
const errController = require('./controllers/404');

app.use(errController.get404);

app.listen(3000);