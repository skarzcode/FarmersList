
const Product = require('./Product.js');

// create a new instance of the Product class
const myProduct = new Product();

class Cart {
    constructor(){
           this.products = [];
           this.total = 0;
       };
   
       addProduct(item) {
        if( item instanceof Product){
            this.products.push(item);
            this.total = this.total + item.price;
            return this.products;
        } else{
             throw new Error("Only items can be added");
        }
       };

       removeProduct(i) {
        this.total = this.total - this.products[i].price;
        this.products.splice(i, 1);
        return this.products;
       };
       
   }



   module.exports = Cart;