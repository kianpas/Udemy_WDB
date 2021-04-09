// let maximum = parseInt(prompt("enter number"));
// if (!maximum) {
//   maximum = parseInt(prompt("enter vaild number"));
// }
// const rnd = Math.floor(Math.random() * maximum) + 1;
// console.log(rnd);

// let guess = parseInt(prompt("guess"));
// while (guess !== rnd) {
//   if (guess > rnd) {
//     guess = parseInt(prompt("too high"));
//   } else {
//     guess = parseInt(prompt("too row"));
//   }
// }
// console.log("you got it");

const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunner",
];

for (let sub of subreddits) {
  console.log(sub);
}

const seat = [
  ["kristen", "erik", "namita"],
  ["geoffrey", "juanita", "antonio", "kevin"],
  ["yuma", "sakura", "jack", "erika"],
];

for (let i = 0; i < seat.length; i++) {
  let row = seat[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

//for..of

for (let row of seat) {
  for (let student of row) {
    console.log(student);
  }
}

for (let char of "hello world") {
  console.log(char);
}

//rest ...nums
//모든 매개변수 유사배열로 저장
function sum(...nums) {}

sum(3, 5);

// function raceResults(gold, silver, ...everyoneElse) {
//   console.log(`GOLD MEDAL GOES TO : ${gold}`);
//   console.log(`SILVER MEDAL GOES TO : ${silver}`);
//   console.log(`and tanks to everyone else: ${everyoneElse}`);
// }
