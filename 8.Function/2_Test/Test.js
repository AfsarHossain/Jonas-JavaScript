'use strict';
// Part - 1

const sub = function (a,b){
	return a - b;
}

const result = sub(20, 5);

console.log(result);


// Part - 2

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 2, 3, 7);
add(8, 2, 5, 3, 2, 4);

const x = [23, 5, 7];
add(...x);
