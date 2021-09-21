"use strict";

const str1 = "Hello World";
const str2 = "A320";

console.log(str1[0]);
console.log(str1[1]);
console.log(str1[7]);

console.log("AFSAR"[0]);

console.log(new String("Afsar"));
console.log(typeof new String("Afsar"));
console.log(typeof new String("Afsar").slice(-1));

// Length
console.log(str1.length);
console.log("Afsar".length);

// Index
console.log(str1.indexOf("W"));
console.log(str1.lastIndexOf("l"));
console.log(str1.indexOf("World"));

// Slice
// const str1 = "Hello World";
console.log(str1.slice(-1)); // d
console.log(str1.slice(4)); // Before -> o World
console.log(str1.slice(4, 7)); // After 4 before 7  -> o W

console.log(str1.slice(-2)); // Last 2 letter  -> ld
console.log(str1.slice(1, -1)); //ello Worl

console.log(str1.slice(0, str1.indexOf(" "))); // Hello
console.log(str1.slice(str1.lastIndexOf(" ") + 1)); // World

//Plane Middle seat
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  console.log(s);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😁");
  } else {
    console.log("You got lucky 😎");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
