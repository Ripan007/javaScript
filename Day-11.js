// console.log("hi javaScript");
// console.error("hi find error");
// console.warn("search error");

// go through mdnDocs

// typeof
// const num = null;
// console.log(typeof num);

//  template string
// const name = "john";
// const age = 20;

// const user = `${name} is  of ${age} age `;
// console.log(user);

// const text = "hi welcome to javaScript crashCourse";
// console.log(text.length);
// console.log(text.charAt(1));
// console.log(text.toUpperCase());
// console.log(text.substring(0, 2).toUpperCase());

// string into a array
// console.log(text.split(""));
// console.log(text.split("")[1]);
// console.log(text.split(" ")[1]);
// const text = "tech, booster, mobile";
// console.log(text.split(","));
// console.log(text.split(",")[1]);

//  array
// variable that hold multiple values

// const arr = new Array(1, 2, 3, 4);
// console.log(arr);

// const arr = ["oranges", "mango", "apple", "guava"];
// arr[4] = "cucumber";
// // arr at the end
// arr.push("dragon");
// // add at the first
// arr.unshift("fantasy");
// // remove from last
// arr.pop();
// // console.log(Array.isArray("oranges"));
// console.log(arr.indexOf("oranges"));
// // console.log(arr);

// objects

// const user = {
//   name: "raja",
//   age: 23,
//   hobbies: ["read", "cook"],
//   address: {
//     street: "23 cross road",
//     location: "haryana",
//   },
// };
// console.log(user.name);
// console.log(user.hobbies[1]);

// destructing

// const { name, age, hobbies } = user;
// console.log(hobbies[1]);

// user.last = "malik";
// console.log(user.last);

// const todos = [
//   { id: 1, isCompleted: true, text: "complete  javaScript crashCourse" },
//   { id: 2, isCompleted: false, text: "suduko" },
//   { id: 3, isCompleted: true, text: "crossWord" },
// ];

// console.log(todos[1]);
// console.log(todos[1].text);

// convert into json
// const todosJson = JSON.stringify(todos);
// console.log(todosJson);

// loop

// let i = 0;
// while (i < 10) {
//   console.log(`the for loop ${i}`);
//   i++;
// }

const todos = [
  { id: 1, isCompleted: true, text: "complete  javaScript crashCourse" },
  { id: 2, isCompleted: false, text: "suduko" },
  { id: 3, isCompleted: true, text: "crossWord" },
];

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// let i = 0;
// while (i < todos.length) {
//   console.log(todos[i].text);
//   i++;
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// important
// high order array method

// forEach
// map => crete  a new Array
// filter => new array based on the condition

// forEach
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// todos.forEach(function (todo) {
//   console.log(todo.id);
// });

// map  function
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoText[1]);

//filter
// important

// const todoText = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoText);

// ternary operator
// var x = 0;
// const check = x > 10 ? "true" : "false";

// switch (check) {
//   case "true":
//     console.log("print the true statement");
//     break;
//   case "false":
//     console.log("print the false statement");
//     break;
//   default:
//     console.log("both of the above statement is not there");
// }

// function

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(3, 5);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 4));

// arrow functions

// const sum = (a, b) => a + b;
// console.log(sum(2, 4));
