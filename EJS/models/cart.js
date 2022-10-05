const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch previous cart
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            };
        //analyze the old cart ie find existing prods
        // loop through existing products
        //check that if id matches one already existing
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            //find existing products index
            const existingProduct = cart.products[existingProductIndex]
             //if prod exist increase quantity
             let updatedProduct;
            if(existingProduct){
                //spread old
                updatedProduct = {...existingProduct};
                //increase quantity
                updatedProduct.qty = updatedProduct.qty + 1;
                //spread cart products
                cart.products = [...cart.products];
                //update cart at position
                cart.products[existingProductIndex] = updatedProduct;
        //Add new product to cart 
            } else {
                //pass product id to identify 
                //set quantity to 1
                updatedProduct = {id: id, qty: 1};
                //save updated cart
                cart.products = [...cart.products, updatedProduct];
            };
            //total price rises by product price
            //the '+' makes it a addable number
            cart.totalPrice = cart.totalPrice + +productPrice;
            //save to file and callback to catch error
            fs.writeFile(p, JSON.stringify(cart), err =>{
                console.log(err);
            });
        });
    };


};