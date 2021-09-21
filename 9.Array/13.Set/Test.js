"use strict";

console.clear();

// Set
const currenciesUnipue = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnipue);

currenciesUnipue.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
