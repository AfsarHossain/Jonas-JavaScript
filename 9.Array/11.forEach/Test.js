"use strict";

console.clear();

// Looping Arrays: forEach
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
/*
let i = 0;

for (const movement of movements) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
    i++;
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    i++;
  }
}
*/
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("---------- FOREACH ----------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
