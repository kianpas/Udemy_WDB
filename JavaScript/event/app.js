const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("you clicked me");
};
function scream() {
  console.log("AAAAAHHHHAKKK");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("you clicked the h1 ");
};
