const Product = require('../models/product')

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

exports.getAddProduct = (req, res, next) =>{
    res.render('admin/edit-product', {pageTitle: 'Add Product', path: '/admin/add-product', editing: false });
};

exports.postAddProduct = (req, res, next) =>{
    //deconstruct req body
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    //creates a new product
    const product = new Product(null, title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) =>{
    //check for query param extracted value is always string
    //helps track user options like filter
    const editMode = req.query.edit; 
    if(!editMode){
        return res.redirect('/');
    };
    //access the dynamic id
    const prodId = req.params.productId;

    //Model to find id
    Product.findById(prodId, product =>{
        //if we don't have a product
        if(!product){
            return res.redirect('/');
        }
        //if found render page
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });    
    });
};

exports.postEditProduct = (req, res, next) =>{
    //fetch info for prod
    const prodId =req.body.productId;
    //deconstruct incoming information
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    //instantiate new prod with info
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedPrice, updatedDescription);
    //save
    updatedProduct.save();
    //to go to admin take out '/'
    res.redirect('/products');

};

exports.postDeleteProduct = (req, res, next) =>{
    //access id 
    const productId = req.body.productId;
    //call delete on id
    Product.deleteById(productId);
    //redirect
    res.redirect('/admin/products')

};