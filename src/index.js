import * as cartService from "./service/cart.js";
import createItem from "./service/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

// Create two items
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// Add two items to the cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Remove three items of item2 from the cart
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// Display the cart
await cartService.displayCart(myCart);

// Calculate the total
await cartService.calculateTotal(myCart);
