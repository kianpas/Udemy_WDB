// outer: while (true) {
//   let num = prompt("add");
//   let list = [];
//   switch (num) {
//     case "new":
//       let n = prompt("Enter the todo");

//       list.splice(0, 0, n);
//       break;
//     case "list":
//       for (let i = 0; i < list.length; i++) {
//         console.log(list[i]);
//       }
//       break;
//     default:
//       "quit";

//       break outer;
//   }
// }

let input = prompt("what!");
const todos = ["collect egg"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}:${todos[i]}`);
    }
    console.log("*********");
  } else if (input === "new") {
    const newTodo = prompt("what is new todo");
    todos.push(newTodo);
    console.log(`${newTodo} added`);
  } else if (input === "delete") {
    const index = parseInt(prompt("enter index"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`deleted ${deleted[0]}`);
    } else {
      console.log("unknown index");
    }
  }
}
console.log("quit");
