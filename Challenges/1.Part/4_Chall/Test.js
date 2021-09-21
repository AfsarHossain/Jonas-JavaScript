const bill = 275;
//let tip = 0;

/*
if(bill>=50 && bill<=300){
	tip = bill*(15/100);
}
*/
const tip = (bill>=50 && bill<=300) ? bill*(15/100) : bill*(20/100);

const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);