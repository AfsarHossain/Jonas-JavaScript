"use strict";

// Part - 1
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(arr);
console.log(a);
console.log(b);
console.log(c);

// Part - 2
const [x, y, z] = arr;
console.log(x, y, z);

// Part - 3
// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Part - 4
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Part - 5
const arr1 = [3, 5, 7];

const badNewArr = [1, 2, arr1[0], 4, arr1[1], 6, arr1[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr1];
console.log(newArr);

console.log(...newArr);
