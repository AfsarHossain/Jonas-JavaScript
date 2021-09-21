"use strict";

const rest = new Map();

// Part - 1
rest.set("name", "Afsar Hossain");

console.log(rest.get("name"));

rest.set(1, "Firenze, Italy");
console.log(rest.get(1));
console.log(rest.set(2, "Lisbon, Portugal"));

// Part - 2
rest
  .set("num", [10, 20, 30, 40])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

// Part - 3
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// Part - 4
console.log(rest.has("categories"));

// Part - 5
rest.delete(2);
// rest.clear();
console.log(rest.set("age", 25));

// Part - 6
const arr = [1, 2];
rest.set(arr, "Test");

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

console.log(rest.size);
console.log(rest.get(arr));
