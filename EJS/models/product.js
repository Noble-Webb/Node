const fs = require('fs');
const path = require('path')
const rootDir = require('../util/path');

module.exports = class Product{
    constructor(title){
        this.title = title;
    };

    save(){
        //stores products in a file in json format
        const p = path.join(rootDir, 'data', 'products.json');
        //read file data
        fs.readFile(p, (err, fileContent) =>{
            let products = [];
            //if no err read file
            if(!err){
                //read JSON
                products =JSON.parse(fileContent);
            };
            products.push(this);
            //create JSON
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            });
        });
    };
    //static ensure that you can call the method on the class itself
    static fetchAll(cb){
        const p = path.join(rootDir, 'data', 'products.json');

        fs.readFile(p, (err, fileContent) =>{
            //if an error
            if(err){
                //callback to help with async
                cb([]);
            };
            cb(JSON.parse(fileContent));
        });
    };
};