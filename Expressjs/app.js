const express = require('express');

const app = express();

app.use('/', (req, res, next) =>{
    next();
});

app.use('/add-product', (req, res, next) =>{
    res.send('<h1>Add Product Page</h1>')
});

app.use('/', (req, res, next) =>{
    res.send('<h1>Error Page?</h1>')
});

app.lsiten(3000);