const fs = require('fs');
const path = require('path')
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');

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
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    };

    save(){
        getProductsFromFile(products => {
            products.push(this);
            //create JSON
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            });
        });
    };
    //static ensure that you can call the method on the class itself
    static fetchAll(cb){
        getProductsFromFile(cb);
    };
};