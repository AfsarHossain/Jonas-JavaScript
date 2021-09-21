"use strict";

console.clear();

let arr = ["a", "b", "c", "d", "e"];

console.log(arr); // ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(-2)); // ['d', 'e']
