const Product = require('../models/product')


exports.getProducts = (req, res, next) =>{
    //fetch products
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            prods: products, 
            docTitle: 'All products', 
            path: '/products'
    });
});
      
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/index', {
            prods: products, 
            docTitle: 'Shop', 
            path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true
    });
});
};

exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
        path: '/cart',
        docTitle: 'Cart'
    })
};
exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {
        path: '/orders',
        docTitle: 'Orders'
    })
};

exports.getCheckout = (req, res, next) => {
    res.render('/shop/checkout', {
        path: '/checkout',
        docTitle: 'Checkout'
    });
};