// This module defines use cases for items

// -> Create an item with correct subtotal
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;
