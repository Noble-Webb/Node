const products = []

module.exports = class Product{
    constructor(title){
        this.title = title;
    };

    save(){
        products.push(this);
    };
//static ensure that you can call the method on the class itself
    static fetchAll(){
        return products;
    };
};