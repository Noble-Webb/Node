const express = require('express');

const app = express();

app.use('/users', (req, res, next) =>{
    console.log("Wow you just hit me!");
    res.send('<h1>You just made the list buddy!</h1>');
});

app.use('/', (req, res, next) =>{
    console.log("Bet you can't hit me!");
    res.send('<h1>So you actually showed up huh</h1>');
}); 

app.listen(3000);