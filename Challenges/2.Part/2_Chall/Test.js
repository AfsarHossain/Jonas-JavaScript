
const calcTip = function(bill){

	if(bill>=50 && bill<=300) {
		return bill*(15/100);	
	}else {
		return bill*(20/100);
	}

}

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])];
console.log(totals);
console.log(bills, tips, totals);