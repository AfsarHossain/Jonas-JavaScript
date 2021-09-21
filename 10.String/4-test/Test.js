"use strict";

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
