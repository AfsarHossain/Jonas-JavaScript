
const afsarArray = [
	'Afsar',
	'Hossain',
	2021-1999,
	'Student',
	['Hasan', 'Jawad', 'Mamun']
];

const afsar = {
	firstName: 'Afsar',
	lastName: 'Hossain',
	age: 2021-1999,
	job: 'Student',
	friends: ['Hasan', 'Jawad', 'Mamun']
};

//console.log(afsarArray);
//console.log(afsar);

//console.log(afsar.firstName);
//console.log(afsar['firstName']);

/*
const nameKey = 'Name';
console.log(afsar['first' + nameKey])
console.log(afsar['last' + nameKey])
*/

const interestedIn = prompt('What do you want to know about Afsar? Choose between firstName, lastName, age, job, and friends');

if(afsar[interestedIn]){
	console.log(afsar[interestedIn]);
}else {
	console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}


afsar.location = 'Chattogram';
afsar['twitter'] = '@afsarhossain';

console.log(afsar);

//Afsar has 3 friends, and his best friend is called Hasan.
console.log(`${afsar.firstName} has ${afsar.friends.length} friends, and his best friend is called ${afsar.friends[0]}.`);




const tareq = {
	firstName: 'Tareq',
	lastName: 'Hossain',
	age: 2021 - 2003,

	getSummary: function(){
		return `${this.firstName} ${this.lastName} is a ${this.age} years old.`;
	}
};

console.log(tareq.getSummary());  // Tareq Hossain is a 18 years old.













