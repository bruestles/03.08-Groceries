/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/**
 * @type {Item[]}
 * You can use this example array to test your functions.
 */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 3, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 5, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 91, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 47, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 82, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 6, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 101, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * @param {Item[]} items
 * @returns {number[]} ids of given items
 */
function getIds(items) {
  // const output = [];
  // for (const element of items) {
  //   output.push(element.id);
  // }
  // return output;
  return items.map((items) => items.id);
}
// console.log("getIds:", getIds(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {string[]} categories of given items
 */
function getCategories(items) {
  // const output = [];
  // for (const element of items) {
  //   output.push(element.category);
  // }
  // return output;
  return items.map((items) => items.category);
}
// console.log("getCategories:", getCategories(INVENTORY));
/**
 * Vendors often use SKUs (Stock Keeping Units) to manage their inventory.
 * SKU formats are not standardized, so for this exercise, we will use the format
 * "[id]#[name]#[name length]"
 *
 * For example, the SKU of `{id: 91, name: "broccoli"}` would be "91#broccoli#8"
 * @param {Item[]} items
 * @returns {string[]} SKUs of given items
 */
function getSkus(items) {
  // const output = [];
  // for (const element of items) {
  //   output.push(element.id + "#" + element.name + "#" + element.name.length);
  // }
  // return output;
  return items.map(
    (items) => items.id + "#" + items.name + "#" + items.name.length,
  );
}
// console.log("getSkus:", getSkus(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {Item[]} all items in the "fruit" category
 */
function getFruits(items) {
  const output = items.filter((item) => item.category === "fruit");
  return output;
}
// console.log("getFruits:", getFruits(INVENTORY));
/**
 * @param {Item[]} items
 * @param {string} category
 * @returns {Item[]} all items in the given category
 */
function getItemsByCategory(items, category) {
  const output = items.filter((item) => item.category === category);
  return output;
}

// console.log(getItemsByCategory(INVENTORY, "dairy"));

/**
 * An item is considered "cheap" if its price is $2.50 or less.
 * @param {Item[]} items
 * @returns {Item[]} all cheap items
 */
function getCheapItems(items) {
  return items.filter((item) => item.price <= 2.5);
}
// console.log(getCheapItems(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {number} the total quantity of all items given
 */
function countItems(items) {
  const array = [];
  for (const element of items) {
    array.push(element.quantity);
  }
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
// console.log(countItems(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {number} the cost of purchasing every single item
 */
function getTotalCost(items) {
  const array = [];
  for (const element of items) {
    array.push(element.price);
  }
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
// console.log(getTotalCost(INVENTORY));
/**
 * @param {Item[]} items
 * @returns {Item} the item with the highest price
 */
function getMostExpensiveItem(items) {
  // const array = [];
  // for (const element of items) {
  //   array.push(element.price);
  // }
  // return array.reduce((accumulator, currentValue) =>
  //   Math.max(accumulator, currentValue),
  // );
  return items
    .map((item) => item.price)
    .reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
}
// console.log(getMostExpensiveItem(INVENTORY));
