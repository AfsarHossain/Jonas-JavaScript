"use strict";

console.clear();

let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["f", "g", "h", "i", "j"];
const letters = arr1.concat(arr2);
console.log(letters);
console.log([...arr1, ...arr2]);

// JOIN
console.log(letters.join("-"));
