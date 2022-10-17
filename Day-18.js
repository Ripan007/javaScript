// hoisting 
// normal
// function sum(a, b) {
//     add = a + b;
//     console.log(add);

// }

// sum(5, 5);

// hoisted
// sum(5, 5);

// function sum(a, b) {
//     add = a + b;
//     console.log(add);

// }

// wont work
// variable expression not  hoisted
// sum(5, 5);

// var sum = function (a, b) {
//     add = a + b;
//     console.log(add);
// };


// wont work
// sum(5, 5);

// (function sum(a, b) {
//     add = a + b;
//     console.log(add);
// })


// arrow function
// not hoisted 

// sum(5, 5);

// const sum = (a, b) => {
//     add = a + b;
//     console.log(add);

// }

// var a = 5;
// console.log(a);

// undefined
// console.log(a);
// var a = 5;

// undefined
// var a;
// console.log(a);
// a = 5;

// var a = 5;
// var a = 6;
// console.log(a);

// var a = 5;
// console.log(a);
// var a = 6;

// console.log(a);
// let a = 5;

// console.log(a);
// const a = 5

// this  

// "use strict";
// console.log(this);

// function sum(a, b) {
//     add = a + b;
//     console.log(add);
//     console.log(this);
// }


// sum(5, 5);

// "use strict";

// function sum(a, b) {
//     add = a + b;
//     console.log(add);
//     console.log(this);
// }


// sum(5, 5);

// show error when we use strict mode


// const user = {
//     name: "rag",
//     age: 23,
//     sum: function (a, b) {
//         add = a + b;
//         console.log(add);
//         console.log(this);
//         console.log(this.age);
//     }
// }

// user.sum(5, 5);

// const user = {
//     name: "raj",
//     age: 23,
//     sum: function () {
//         var a = 2;
//         var b = 3;
//         var add = a + b;
//         console.log(add);
//         console.log(this);

//         function child() {
//             name: "mohan";
//             console.log(name);
//             console.log(this);
//         }
//         child();
//     }
// }


// user.sum();

// regular function always refer to window object

// object

// const user = {
//     name: "raj"
// }

// user.age = 23;
// console.log(user);

// const user = () => {
//     var name = "raj";
// }

// user.age = "23";
// console.log(user);

// pass  by value
// primitive type
// let a = 5;
// let b = 4;
// b = a;
// b = 10 + a;
// console.log(a);
// console.log(b);

// pass by reference

// const obj = {
//     name: "raj",
//     age: 23
// }

// const obj1 = obj;

// obj1.age = 25;

// console.log(obj);
// console.log(obj1);

// const arr = [1, 2, 3];
// const arr1 = arr;
// arr1.push(2);
// console.log(arr);
// console.log(arr1);

// const arr = [1, 2, 3];
// const arr1 = [].concat(arr);
// arr1.push(10);
// console.log(arr);
// console.log(arr1);


// let like = 100;

// const youtube = {
//     name: "techDev",
//     subs: 2000
// }

// const user = (a, b) => {
//     a = 200
//     b.subs = 4000
// }

// user(like, youtube);
// console.log(like);
// console.log(youtube.subs);







