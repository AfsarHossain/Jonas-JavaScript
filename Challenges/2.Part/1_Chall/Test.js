const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgDolhins * 2 < avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No Teams Win!!!");
  }
};

const calcAverage = (s1, s2, s3) => {
	const avg = (s1 + s2 + s3) / 3;
	//console.log(avg);
   	return avg;
};

//const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test-1
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolhins);
console.log(avgKoalas);
checkWinner(avgDolhins, avgKoalas);

// Test-2
/*const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolhins);
console.log(avgKoalas);
checkWinner(avgDolhins, avgKoalas);
*/
// console.log(checkWinner(avgDolhins, avgKoalas));
