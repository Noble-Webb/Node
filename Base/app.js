const express = require('express');
const app = express();

//routes
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(adminRoutes);


app.listen(3000);