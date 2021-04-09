function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

//callTwice(rollDie);

//펑션을 리턴 not usable
function makeMysteryfunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("congrat");
      console.log("you win");
    };
  } else {
    return function () {
      alert("computer virus");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const testRange = function (num) {
  return num >= 100 && num <= 200;
};

const myMath = {
  Pi: 3.1459,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

//this는 cat을 가리킴
const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(this.color);
    console.log(`${this.name} ${this.color} ${this.breed}`);
  },
};

const meow2 = cat.meow;

// const add = function (x, y) {
//   return x + y;
// };

// const add = (x, y) => {
//   return x + y;
// };

// const roll = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

const roll = () => Math.floor(Math.random() * 6) + 1;

// const add = (a, b) => a + b;

const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand by me", score: 85 },
];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

// const newArrow = movies.map((movie) => {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newArrow = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
// console.log("Hello");
// setTimeout(() => {
//   console.log("...are you stil there");
// }, 3000);

// console.log("goodbye");

//지정시간간격으로 반복
// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//필터
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number.filter((n) => {
  return n < 5;
});

const moviesYear = [
  { title: "Amadeus", score: 99, year: 1980 },
  { title: "Stand by me", score: 85, year: 2000 },
];

// const good = moviesYear.filter((movies) => {
//   return movies.score > 90;
// });

//줄이기
const good = moviesYear.filter((movies) => movies.score > 90);

//제목만 저장하기 필터아님에 주의
const title = moviesYear.map((movies) => movies.title);

//필터와 맵한번에 처리
//점수가 90이상이고 제목만 가져오기
const combine = movies.filter((m) => m.score > 90).map((m) => m.title);
const username = ["mark", "staceymom1978", "q2983", "carries90"];
const validUserNames = username.filter((name) => name.length < 10);

const exams = [80, 98, 92, 78, 77, 90];

//true
exams.every((score) => score >= 70);
//false
exams.every((score) => score >= 75);

exams.some((score) => score >= 75);

moviesYear.some((movies) => movies.year > 1990); //true

const allEvens = (num) =>
  num.every((num) => {
    return num % 2 == 0;
  });

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// let total = 0;
// for (let price of prices) {
//   total += price;
// }

//총합과 같다
// const total = prices.reduce((total, price) => {
//   return total + price;
// });

const total = prices.reduce((total, price) => total + price);

const minprice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const highestRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

const evens = [2, 4, 6, 8];

evens.reduce((sum, num) => sum + num);

//리턴값에 100을 더함
evens.reduce((sum, num) => sum + num, 100);

//화살표펑션
const person = {
  firstName: "Viggo",
  lastName: "Mortense",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      //person.fullName
      console.log(this.fullName());
    }, 300);
  },
};

const d = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  const btn = document.createElement("button");
  btn.innerText = "Hey!";
  const a = d.appendChild(btn);
}
