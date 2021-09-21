const family = ['Anwar', 'Nahar', 'Khaled', 'Afsar', 'Tarek'];

console.log(family);
console.log(family.length);

const years = new Array(1975, 1984, 1994, 1999, 2003);
console.log(years);
console.log(years[0]);
console.log(years[1]);
console.log(years[years.length-1]);

const calcAge = function(birthYear) {
	return 2021 - birthYear;
}

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);