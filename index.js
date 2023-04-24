// Import Classes Here
const Product = require('./classes/Product');
const Cart = require('./classes/Cart');
const Customer = require('./classes/Customer');
const Auth = require('./classes/Auth');


const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");

const myCart = new Cart();
myCart.addProduct(strawberries);
myCart.addProduct(mangos);
myCart.products; // [Product { ... }, Product { ... }]
myCart.total; // 8

myCart.removeProduct(1);
myCart.products; // [Product { ... }]
myCart.total; // 5












// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}