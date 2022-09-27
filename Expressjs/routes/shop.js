//user routes
//creates path with join function to concat segments
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{
    // Join all arguments together and normalize the 
    //resulting path.
    //join(globalabspath, move up?, 'folder', 'file.')
    //detects os and constructs path
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;