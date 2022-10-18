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

