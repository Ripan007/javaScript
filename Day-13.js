// ECMAScript
//let and const
// template strings
// arrow functions
//destructuring
//object props
//default arguments
//arrays in es6
//new no methods

// let and const

// variable => function scoped
// let & const => block scoped

// const assign to those variable which value we don't want to change
// const used in case where we want the variable to be fixed

// function scope

// function js(user) {
//   if (user) {
//     var fName = "mohan";
//     var lName = "raj";
//   }
//   console.log("my name is " + fName + lName);
// }

// js(true);

// block scope

// function js(user) {
//   if (user) {
//     let fName = "mohan";
//     const lName = "raj";
//   }
//   console.log("my name is " + fName + lName);
// }

// js(true);

// var win = "southAfrica";
// if (true) {
//   var win = "australia";
//   console.log(win);
// }
// console.log(win);

// let win = "southAfrica";
// if (true) {
//   let win = "india";
//   console.log(win);
// }
// console.log(win);

// template literals (template strings)
// bagtik ``

// let fName = "raj";
// let lName = "shakti";
// let name = `my name is ${fName} ${lName}`;
// console.log(name);

// let num = ` the sum of two number is ${2 + 7}
// and multiply of two number is ${3 - 1}`;
// console.log(num);

// template literals  and template strings (methods)
// startwith
// endwith
// includes
// repeat

// const fName = "raj";
// const lName = "shakti";
// const fullName = `${fName} ${lName}`;
// console.log(`${name}`.startsWith("r"));
// console.log(`${name}`.endsWith("a"));
// console.log(`${name}`.includes("aj"));
// console.log(`${name}`.repeat(3));
// console.log(fullName);

// array destructuring

const program = ["java", "python", "javascript", "swift", "ruby"];
// let [first, second, third] = program;
// console.log(first);
// console.log("last programing language is " + third);
// let [first, , , , last] = program;
// console.log(
//   `first programming  language is ${first} and the last programming language is ${last}`
// );

// let top1, top2;
// [top1, top2] = program;
// console.log(top1, top2);

// program to swap two number without using third variables
// array destructing
// let a = 4;
// let b = 5;
// [a, b] = [b, a];
// console.log(`the value of a  is ${a} and the value of b is ${b}`);

// other way
// let temp = a;
// a= b;
// b = temp;

// object destructing

// const user = {
//   name: "raj",
//   age: 23,
//   height: 175,
// };

// let { name, age, height } = user;
// console.log(`my name is ${name}, age is ${age} and height is ${height}`);

// let user = {
//   name: "raj",
//   age: 23,
//   describe: {
//     hobby: "playing",
//   },
// };

// let { name, age, describe } = user;
// change name
// let { name: myName, age, describe } = user;
// console.log(`my name is ${myName} age is ${age} hobby is ${describe.hobby}`);

// fat arrow functions

// const sum = () => {
//   let a = 4;
//   let b = 4;
//   return a + b;
// };

// console.log(sum());

// let a = 3;
// let b = 4;

// const sum = () => a + b;
// console.log(sum());

// const sum = (b) => a + b;
// console.log(sum(4));

// const sum = (a, b) => a + b;
// console.log(sum(5, 5));

// default parameters

// function add(a, b = 3) {
//   console.log(a + b);
// }

// add(4);

// arrow functions

// const add = (a, b = 3) => {
//   console.log(`the sum of two num is ${a + b}`);
// };
// add(3);

// rest parameters

// function sum(...input) {
//   let sum = 0;
//   for (let i of input) {
//     sum += i;
//   }
//   console.log(sum);
// }
// sum(5, 5, 5, 5);

// function fun(a, b, ...c) {
//   console.log(`${a} ${b}`);
//   console.log(c);
//   console.log(c[0]);
//   console.log(c.length);
//   console.log(c.indexOf("eden"));
// }

// fun("potato", "tomato", "apple", "graphe", "chilli");

//spread operator

// function sum(a, b, c) {
//   console.log(a + b + c);
// }

// var num = [1, 2, 3];
// sum(...num);

// concatenation

// let arr = [1, 2, 3];
// let arr1 = [4, 5, 6];
// let arr2 = [7, 8, 9];
// arr = [...arr, ...arr1, ...arr2];
// console.log(arr);

// let arr = [1, 2, 3, 4];
// let arr1 = [...arr, 3, 5];
// console.log(arr1);
