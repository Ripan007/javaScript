//  pass  by value and pass by reference
// pass by value
// primitive
// let a = 5;
// let b = a;
// b = a + 10;
// console.log(a);
// console.log(b);

// pass by reference
// nom primitive
// const obj1 = {
//     user: "cat",
//     pass: 444
// }

// const obj2 = obj1;
// obj2.pass = 999;
// console.log(obj1);
// console.log(obj2);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// const arr2 = [].concat(arr1)
// arr2.push(10);
// console.log(arr1);
// console.log(arr2);

// functions called as first class citizen

// const a = function () {
//     console.log('hello');
// }
// a();

// const b = {
//     name: "random",
//     hobby: function () {
//         console.log("my hobby is reading");
//     }
// }

// b.hobby();

// const myName = () => {
//     return "hello";
// }

// const greeting = (sayHi, name) => {
//     console.log(sayHi() + "" + name);
// }

// greeting(myName, "ripan");

// function a() {
//     return function b() {
//         console.log("created properly");
//     }
// }
// a()();
// const c = a();
// c();

// function a() {
//     setTimeout(function () {
//         console.log("first function");
//     }, 3000)
// }

// function b() {
//     console.log("second function");
// }

// a();
// b();


// const per1 = (friend, callFriend) => {
//     console.log(`hi bro i busy now taking to ${friend} .  i will call you later`);
//     callFriend();
// }

// const per2 = () => {
//     console.log(`as i said bro i will  call you back`);
// }


// per1("raj", per2)


// const a = () => {
//     setTimeout(function () {
//         console.log("first line of code");
//         b();
//     }, 3000)
// }

// const b = () => {
//     console.log("second line of code");
// }

// a();


// const interviewQuestion = (name) => {
//     if (name === "raj") {
//         return function (topic) {
//             console.log(`hi ${name}.what is ${topic}`);
//         }
//     } if (name === "mohit") {
//         return function (topic) {
//             console.log(`hi ${name}.what is ${topic}`);
//         }
//     } if (name === "gaurav") {
//         return function (topic) {
//             console.log(`hi ${name}.what is ${topic}`);
//         }
//     } else {
//         return function () {
//             console.log("welcome to inteview");
//         }
//     }
// }

// interviewQuestion("raj")("ui")
// interviewQuestion("mohit")("front end")
// interviewQuestion("gaurav")("web developent")

// const cand1 = interviewQuestion("raj");
// cand1("ui")

// const youtuber1 = {
//     name: "raj",
//     content: "programming",
//     feature: function (rating, support) {
//         console.log(`hi its me ${this.name} .
//         my channel content ${this.content} related videos.support me my giving  ${rating} star and ${support} my channel`);
//     }
// }


// const youtuber2 = {
//     name: "mohit",
//     content: "gamming"
// }

// use method of youtuber1

// youtuber1.feature.call(youtuber2, 5, "subscribe")

// bind method

// const youtuber = {
//     name: "mohit",
//     content: "programming"
// }

// function feature(rating) {
//     console.log(`hi its me ${this.name}.
//     my channel contain ${this.content} related content.support me by ${rating}`);
// }


// const person1 = feature.bind(youtuber);
// person1(6);


let first = document.querySelector("#first");
let second = document.querySelector("#second");
let button = document.querySelector("button");
let firstName = document.querySelector(".firstName");
let secondName = document.querySelector(".secondName");


function display() {
    first.value;
    second.value;
    firstName = first;
    secondName = second;


}

button.addEventListener("click", display)