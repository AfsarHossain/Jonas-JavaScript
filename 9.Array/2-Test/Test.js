const family = ['Anwar', 'Nahar', 'Khlead', 'Tarek'];

console.log(family.length);
console.log(family);

// Add Elements
const newArray = family.push('Afsar');

console.log(newArray);   // Array Length
console.log(family);    // New Array

family.unshift('Rabby');    // Add Elements First
console.log(family);

// Remove Elements
family.pop();
console.log(family);	// Remove Last

family.shift();         // Remove First
console.log(family);


// Index of Elements
console.log(family.indexOf('Nahar'));

// Includes. Check elements present or not. Return Ture or False
console.log(family.includes("Anwar"));   // True

if(family.includes("Afsar")){
	console.log('Yes. Afsar is your family member.');
} else {
	console.log("No. Afsar is not your family member.");
}





