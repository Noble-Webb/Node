const express = require('express');

//is an application and request handler
const app = express();

app.use('/', (req, res, next)=>{
    console.log('was i hit?');
    //allows you attach a body of type any
    next();
});

app.use('/add-product', (req, res, next)=>{
    //allows you attach a body of type any
    res.send('<h1>Add Product Page</h1>');
});
//allows you to add a new middleware function
//accepts an array of request handlers
//handles all incoming request
//takes three args req, res, next
//default path is '/'
//will appear for all pages that arent routed
app.use('/', (req, res, next)=>{
    //allows you attach a body of type any
    res.send('<h1>error page?</h1>');
});

app.listen(3000);