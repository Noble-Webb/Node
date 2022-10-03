const products = [];

exports.getAddProduct = (req, res, next) =>{
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true, formCSS: true, productCSS: true});
};

exports.postAddProduct = (req, res, next) =>{
    products.push({title: req.body.title});

    //redirect with express 
    res.redirect('/');
};

exports.getProducts = (req, res, next) =>{
    
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true
    });
    
}