const Product = require('../models/product')


exports.getAddProduct = (req, res, next) =>{
    
    res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true, formCSS: true, productCSS: true});
};

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin Products', 
            path: '/admin/products',
            hasProducts: products.length > 0, activeShop: true, productCSS: true
        });
    });
};

exports.postAddProduct = (req, res, next) =>{
    //deconstruct req body
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    //creates a new product
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};