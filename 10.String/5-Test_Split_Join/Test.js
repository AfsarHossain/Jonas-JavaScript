"use strict";

// Split and Join
console.log("a+very+nice+string".split("+"));
console.log("Afsar Hossain".split(" "));

const [firstName, lastName] = "Afsar Hossain".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Capitalization
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("afsar tareq anwar nahar");
capitalizeName("afsar hossain");
