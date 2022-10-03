const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin')
const router = express.Router();

router.get('/', (req, res, next) =>{
    const users = adminData.users;

    res.render('user', {users: users, docTitle: 'User List', path: '/', hasUsers: users.length > 0});
});

module.exports = router;