// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   const newColor = `rgb(${r}, ${g}, ${g})`;
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
// });

const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${g})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.style.backgroundColor = makeRandColor();
  });
}

const h1s = document.querySelectorAll("h1");

for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}
function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

//키입력 이벤트
//입력내용 확인
const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});

//윈도우에서 키값
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("up!");
      break;
    case "ArrowDown":
      console.log("down!");
      break;
    default:
      break;
  }
});
