const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) =>{
    //fetch products
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All products', 
            path: '/products'
    });
});
      
};

exports.getProduct = (req, res, next) =>{
    //can access productId because we set it in routes
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render('shop/product-detail', {
            pageTitle: product.title,
            product: product,
            path: '/products' 
        });
    });
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true
    });
});
};

exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Cart'
    })
};

exports.postCart = (req, res, next) =>{
    // extract data
    const prodId = req.body.productId;
    //get product with call-back
    Product.findById(prodId, product => {
        //update cart
        Cart.addProduct(prodId, product.price);
    });

    res.redirect('/cart');
};

exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    })
};

exports.getCheckout = (req, res, next) => {
    res.render('/shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};