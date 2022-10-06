const fs = require('fs');
const path = require('path')
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');
const Cart = require('./cart');

const getProductsFromFile = cb =>{
    fs.readFile(p, (err, fileContent) =>{
        //if an error
        if(err){ 
            //callback to help with async
            return cb([]);
        };
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product{
    constructor(id, title, imageUrl, price, description){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    };

    save(){
        getProductsFromFile(products => {
            //for edit purpose if id exist
            if(this.id){
                //find existing product index
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                //updated product
                const updatedProduct = [...products];
                //replace old info at index of products
                updatedProduct[existingProductIndex] = this;
                //save ie write to the file
                fs.writeFile(p, JSON.stringify(updatedProduct), (err) =>{
                    console.log(err);
                });
            } else {
                //if id doesn't exist create unique id
                this.id = Math.random().toString();
                products.push(this);
                //create JSON
                fs.writeFile(p, JSON.stringify(products), (err) =>{
                    console.log(err);
                });
            };
            
        });
    };
    //delete method
    static deleteById(id){
        //get all products
        getProductsFromFile(products =>{
            //find product
            const product = products.find(prod => prod.id === id);
            //filter all items except id match
            const updatedProducts = products.filter(p => p.id !== id);
           //save all except one to delete to file 
           fs.writeFile(p, JSON.stringify(updatedProducts), err =>{
            //if no error remove product from cart
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                };
           });
        });

    };
    //static ensure that you can call the method on the class itself
    static fetchAll(cb){
        getProductsFromFile(cb);
    };

    static findById(id, cb){
        getProductsFromFile(products =>{
            //synchronus
            const product = products.find(p => p.id === id);
            //allows for async
            cb(product);
        });
    };
};