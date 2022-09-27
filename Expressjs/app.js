const express = require('express');

//is an application and request handler
const app = express();

//allows you to add a new middleware function
//accepts an array of request handlers
//handles all incoming request
//takes three args req, res, next
app.use((req, res, next)=>{
    console.log('was i hit?');
    //allows you attach a body of type any
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);