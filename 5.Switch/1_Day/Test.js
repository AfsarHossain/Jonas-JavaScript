const day = prompt("Enter a Day");

switch (day) {
  case "Saturday":
    console.log("Plan course structure.");
    console.log("Go to coding meetup.");
    break;
  case "Sunday":
    console.log("Prepare theory videos.");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code exaples.");
    break;
  case "Friday":
    console.log("Record Videos.");
    break;
  case "Monday":
  case "Tuesday":
    console.log("Enjoy the weekend.");
    break;
  default:
    console.log("Not a valid day..");
}
