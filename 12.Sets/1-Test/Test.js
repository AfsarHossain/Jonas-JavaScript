"use strict";

// Part - 1
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

console.log(new Set("Afsar")); // 'A', 'f', 's', 'a', 'r'
console.log(new Set("afsar")); // 'a', 'f', 's', 'r'

// Part - 2
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza")); // True
console.log(ordersSet.has("pizza")); // False

ordersSet.add("Garlic Bread");

ordersSet.delete("Risotto");

console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

// Part - 3
for (const order of ordersSet) console.log(order);

// Part - 4
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(["Waiter", "Chef", "Manager", "Chef", "Waiter"]).size);

console.log(new Set("Afsar Hossain").size);
console.log(new Set("Afsar Hossain"));
