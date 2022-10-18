// high order function

// const interview = (name) => {
//     if (name === "raj") {
//         return function (topic) {
//             console.log(`hi ${name} explain ${topic} have your time`);
//         }
//     }
//     if (name === "mohit") {
//         return function (topic) {
//             console.log(`hi ${name} explain ${topic} have your time`);
//         }
//     }
//     if (name === "gautam") {
//         return function (topic) {
//             console.log(`hi ${name} explain ${topic} have your time`);
//         }
//     }
//     else {
//         return function () {
//             console.log("welcome to  the interview");
//         }
//     }
// }

// interview("raj")("ui");
// interview("mohit")("node js");

// const candidateFirst = interview("raj");
// candidateFirst("ui");
// candidateFirst("node js");

// (function () {
//     console.log("hi");
// })();

// closure

// function outer(a) {
//     var b = 6;
//     function inner() {
//         var c = a + b;
//         console.log(c);
//     }
// inner();
//     return inner;

// }

// let ans = outer(9);
// ans();

// const interview = (name) => {
//     return function (topic) {
//         if (name === 'raj') {
//             console.log(`hi ${name} what is ${topic}`);
//         }
//         else if (name === 'mohit') {
//             console.log(` hi ${name} what i ${topic}`);
//         }
//         else if (name === 'komal') {
//             console.log(` hi ${name} what is ${topic}`);
//         }
//         else {
//             console.log("welcome to the process");
//         }
//     }
// }

// interview('raj')('ui');

// callBack //

// const user = {
//     name: 'raj',
//     age: 23,
//     job: function (hobby) {
//         console.log(`hi i am ${this.name} my age is ${this.age} my hobby is ${hobby}`);
//     }
// }

// user.job();
// const user1 = {
//     name: 'mohit',
//     age: 26
// }

// copy the property of user using call

// user.job.call(user1, "reading");

// the call method take arguments as am array

// const user = {
//     name: 'raj',
//     age: 23,
//     job: function (hobby) {
//         console.log(`hi i am ${this.name} my age is ${this.age} my hobby is ${hobby}`);
//     }
// }

// user.job();
// const user1 = {
//     name: 'mohit',
//     age: 26
// }

// user.job.apply(user1, ["reading"]);

// let max = Math.max.apply(null, [1, 2, 3, 90]);
// console.log(max);

// bind

// const first = {
//     name: "raj",
//     age: 23
// }

// const second = {
//     name: "mohit",
//     age: 24
// }

// const third = {
//     name: "komal",
//     age: 19
// }

// function profile(attitude) {
//     console.log(`i am ${this.name} and my age is ${this.age} my attitude is ${attitude}`);
// }


// const user = profile.bind(first);
// user('cool');

// const user1 = profile.bind(second);
// user1();
// const user2 = profile.bind(third);
// user2();

