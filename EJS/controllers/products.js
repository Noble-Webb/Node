const Product = require('../models/product')

exports.getAddProduct = (req, res, next) =>{
    
    res.render('admin/add-product', {docTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true, formCSS: true, productCSS: true});
};

exports.postAddProduct = (req, res, next) =>{
    //creates a new product
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) =>{
    //fetch products
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {prods: products, docTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true
    });
});
      
};