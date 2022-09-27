const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) =>{
    //form with improper html
    res.send('<form action="/product" method="POST"> <input type="text" name="title"> <button type="submit"> Add Product </button></form>')
});

app.use('/product', (req, res, next) =>{
    //redirect with express
    res.redirect('/');
});

app.use('/', (req, res, next) =>{
    res.send('<h1>Error Page?</h1>')
});

app.listen(3000);