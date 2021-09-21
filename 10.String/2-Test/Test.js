"use strict";

const str1 = "afsar hossain";
const str2 = "AFSAR HOSSAIN";

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

// Fix capitalization in name
const strN = "aFsAr";
const strL = strN.toLowerCase();
const strC = strL[0].toUpperCase() + strL.slice(1);
console.log(strC);

// Comparing emails
const email = "afsar@gmail.com";
const logingEmail = "     Afsar@gmail.com    ";

const lEmail = logingEmail.toLowerCase();
const tEmail = lEmail.trim();
console.log(tEmail);
console.log(email);
console.log(email === tEmail);

// Replacing
const priceBD = "288,97#";
const priceUS = priceBD.replace("#", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

// console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.includes("Arib"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus Family");
}
