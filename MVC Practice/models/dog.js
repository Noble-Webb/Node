const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'dogs.json');

//callback function
const getDogsFromFile = cb =>{
    fs.readFile(p, (err, fileContent) =>{
        //if there is no data add an empty array
        if(err){
            return cb([]) 
        };
        //else parse the file content
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Dog{
    constructor(name, breed, description){
        this.name = name;
        this.breed = breed;
        this.description = description;
    };

    save(){
        getDogsFromFile(dogs =>{
            dogs.push(this);
            fs.writeFile(p, JSON.stringify(dogs), (err) =>{
                console.log(err);
            });
        });
    };
    //static ensure that you can call the method on the class itself
    static fetchAll(cb){
        getDogsFromFile(cb);
    };
};