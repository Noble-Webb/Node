const Product = require('../models/product')


exports.getAddProduct = (req, res, next) =>{
    
    res.render('admin/add-product', {docTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true, formCSS: true, productCSS: true});
};

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('admin/products', {
            prods: products, 
            docTitle: 'Admin Products', 
            path: '/admin/products',
            hasProducts: products.length > 0, activeShop: true, productCSS: true
        });
    });
};

exports.postAddProduct = (req, res, next) =>{
    //creates a new product
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};