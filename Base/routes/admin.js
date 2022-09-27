const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir =require('../util/path');


router.get('/add-user', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

router.post('add-user', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;