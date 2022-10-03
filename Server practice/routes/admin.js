const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

users = [];

router.get('/add-user', (req, res, next) =>{
    res.render('add-user', {docTitle: 'Add User', path: '/add-user'});
});

router.post('/add-user',(req, res, next) =>{
    users.push({title: req.body.title})

    res.redirect('/');
});

exports.routes = router;
exports.users = users;   