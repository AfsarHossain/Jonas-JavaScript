"use strict";

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+")); // ++++++Go to gate 23!
console.log("Afsar Hossain".padStart(20, "+").padEnd(30, "+")); // +++++++Afsar Hossain++++++++++

// Function Credit Card
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  console.log(last);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(51425145621));
console.log(maskCreditCard(457556325558884));
console.log(maskCreditCard(154885566544788966));

// Repeat
const nameRepeat = "Afsar Hossain ";
console.log(nameRepeat.repeat(5));

// Function Repeat
const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};

planesInline(5);
planesInline(3);
planesInline(12);
