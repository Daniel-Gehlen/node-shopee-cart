// This module defines actions that the cart can perform

// USE CASES
// ✅ -> Add item to the cart
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> Calculate the total of the cart
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result.toFixed(2)}`);
}

// -> Delete item from the cart
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ Remove an item - decrease one item
async function removeItem(userCart, item) {
  // 1. Find the index of the item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. If the item is not found
  if (indexFound == -1) {
    console.log("Item not found");
    return;
  }

  // 3. If quantity > 1, subtract one item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // 4. If quantity = 1, delete the item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ Display all items in the cart
async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - $${item.price.toFixed(2)} | ${
        item.quantity
      }x | Subtotal = $${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
