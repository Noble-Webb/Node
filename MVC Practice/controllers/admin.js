const Dog = require('../models/dog');

exports.getDogs = (req, res, next) =>{
    Dog.fetchAll((dogs) =>{
        res.render('admin/dogs', {
            doggos: dogs,
            docTitle: 'Admin Dogs',
            path: 'admin/dogs'
        });
    });
};

