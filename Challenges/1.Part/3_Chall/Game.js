// const s1Dol = 96;
// const s2Dol = 108;
// const s3Dol = 89;
// const s1Koal = 88;
// const s2Koal = 91;
// const s3Koal = 110;

// const s1Dol = 97;
// const s2Dol = 112;
// const s3Dol = 101;
// const s1Koal = 109;
// const s2Koal = 95;
// const s3Koal = 123;

const s1Dol = 97;
const s2Dol = 112;
const s3Dol = 101;
const s1Koal = 109;
const s2Koal = 95;
const s3Koal = 106;

const avgDol = (s1Dol + s2Dol + s3Dol) / 3;
const avgKoal = (s1Koal + s2Koal + s3Koal) / 3;

console.log(avgDol, avgKoal);

// if (avgDol > avgKoal) {
//   console.log("Dolphins Team Win!!!");
// } else if (avgDol < avgKoal) {
//   console.log("koalas Team Win!!!");
// } else {
//   console.log("Match is DRAW!!!!!!!!!");
// }

if (avgDol > avgKoal && avgDol >= 100) {
  console.log("Dolphins Team Win!!!");
} else if (avgDol < avgKoal && avgKoal >= 100) {
  console.log("koalas Team Win!!!");
} else if (avgDol === avgKoal && avgDol >= 100 && avgKoal >= 100) {
  console.log("Match is DRAW!!!!!!!!!");
} else {
  console.log("No One Wins the tropy!!");
}
