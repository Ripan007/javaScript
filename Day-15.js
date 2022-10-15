// Math.sign();
// Math.trunc();
// Math.floor();

// let num = 0;
// let num1 = 1;
// let num2 = -1;
// let num3 = NaN;
// let num4 = "name";
// console.log(Math.sign(num));
// console.log(Math.sign(num1));
// console.log(Math.sign(num2));
// console.log(Math.sign(num3));
// console.log(Math.sign(num4));

// let num = -3.66;
// console.log(Math.trunc(num));
// console.log(Math.floor(num));

// exponentiation operator
// let a = 2;
// let b = 4;
// console.log(a ** b);
// console.log(Math.pow(2, 2));
// console.log(2 ** 2);

// isFinite
// isNaN
// Number.isInteger

// let num = 4;
// console.log(isFinite(num));
// console.log(Number.isFinite(num));

// let num = "a";
// console.log(isNaN(num));
// console.log(Number.isNaN(num));

// let num = 4.8;
// console.log(Number.isInteger(num));

// oop (class,object ,constructor,inheritance)
// an object is the instance of the class ,using a class i can create many objects and all they share method and properties

// class Students {
//   constructor(name, age, hobby) {
//     this.myName = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
//   // instance method
//   bioData() {
//     return `my name is ${this.myName} my age is ${this.age}and i liked to play ${this.hobby}`;
//   }
// }

// class player extends Students {
//   constructor(name, age, hobby, game) {
//     super(name, age, hobby, game);
//     this.myGame = game;
//   }
//   play_bioData() {
//     return `${super.bioData()} ${this.myGame}`;
//   }
// }

// let obj1 = new Students("john", 23, "football");
// let obj2 = new Students("ravi", 24, "cooking");

// let obj1 = new player("john", 23, "football", "tennis");
// let obj2 = new player("ravi", 24, "cooking");
// obj1.bioData();
// obj2.bioData();
// obj1.play_bioData();

// console.log(obj1.play_bioData());

// callBack functions
// any function  that is passed as an argument is called as  a callback function
// a callback is a function that is to be executed after another function has finished executing - hence the name "call-back"

// why callBacks ?
// ans : javascript is an event driven language.this means that instead of waiting for a response before moving on ,javaScript will keep executing fo other events
// call backs are way  to make same certain code doesn,t execute until other code has already finished execution

// normal way
// const funcA = () => {
//   setTimeout(() => {
//     console.log("print function A");
// manipulation
// funcB();
//   }, 3000);
// };

// const funcB = () => {
//   console.log("print b");
// };

// funcA();
// funcB();

// callBack example

// const partA = (friend, callFriend) => {
//   console.log(`i am busy right now . i am in talk with ${friend}`);
//   callFriend();
// };

// const partB = () => {
//   console.log("ok fine i will  connect with you later");
// };

// partA("raj", partB);

// callBack hell
// callbacks are  just the name of a convention for using javaScript functions.there isn,t a special thing called a callback in the javaScript language .it,s just a convention
// instead of  immediately  returning  some result like most functions ,functions that use  callBacks take some time to produce a result
// the word 'asynchronous',aka 'async' just means  'take time' or 'happens in the future,not right now'.usually callbacks are only used when doing i/o
// eg downloading things , reading files , talking to databases etc

// nesting callBack means callback hell
const getRollNo = () => {
  setTimeout(() => {
    console.log('print this line')
    let roll_no = [1, 2, 3, 4, 5]
    console.log(roll_no)
    setTimeout(
      rollNo => {
        const bio_data = {
          name: 'raj',
          age: 24
        }
        console.log(
          ` rollNo is ${rollNo} name is ${bio_data.name} and age is ${bio_data.age}`
        )
      },
      2000,
      roll_no[2]
    )
  }, 2000)
}
getRollNo()

// promises
// promises are used to handle asynchronous operations in javaScript.they are easy to manage when dealing with multiple asynchronous operations
// operations where callbacks can create callback hell  leading to unmanageable code
// A promise is an object that keep track about whether a certain event has happened already or not
//  determines what happens after the event has happened

// promises three stages
// pending
// resolve
// reject

// Async await
