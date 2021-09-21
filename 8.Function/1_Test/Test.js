
function myName(name){
	console.log("My name is "+ name);
}

myName("Afsar");
myName("Tarek");
myName("Anwar");

function sum(a, b){
	const c = a + b;
	console.log(`The sum of ${a} + ${b} is = ${c}.`);
}

sum(10,20);
sum(14, 15);
sum(45, 40);

function sumThreeNum(a, b, c) {
	const total = a + b + c;
	return total;
}

const result1 = sumThreeNum(10, 20, 30);
console.log(result1);

const result2 = sumThreeNum(100, 200, 300);
console.log(result2);

const result3 = sumThreeNum(1000, 2000, 3000);
console.log(result3);