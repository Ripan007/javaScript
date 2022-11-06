// // typeOf
// typeof 23;
// ("number");
// typeof name;
// ("string");
// typeof true;
// ("boolean");

// // swap

// function swap(a, b) {
//   var a = 3;
//   var b = 4;
//   var c = a;
//   a = b;
//   b = c;
//   console.log(a);
//   console.log(b);
// }

// swap();

// // concatenation
// var person = "john";
// var job = "programmer";
// var complete = person + " " + "is a" + " " + job;
// console.log(complete);

// // tells how many character left
// // twitter
// var tweet = prompt("assign tweet");
// var tweetCount = tweet.length;
// alert(
//   "you have written" +
//   " " +
//   tweetCount +
//   " " +
//   "characer,you have" +
//   " " +
//   (140 - tweetCount) +
//   " " +
//   "character left"
// );

// // slice
// var tweet = prompt("asign tweet");
// var tweetUnder50 = tweet.slice(0, 50);
// alert(tweetUnder50);

// // functions

// function sum() {
//   var a = 10;
//   var b = 20;
//   var c = a + b;
//   console.log(c);
// }

// sum();

// //  function argument

// function multiple(a, b) {
//   var c = a * b;
//   console.log(c);
// }
// multiple(2, 4);

// // return
// function add() {
//   return 2 + 2;
// }

// console.log(add());

// // create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// // assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

// function lifeWeeks(age) {
//   var remainAge = 90 - age;
//   var year = remainAge * 365;
//   var week = remainAge * 52;
//   var month = remainAge * 12;
//   console.log(remainAge, year, week, month);
// }
// lifeWeeks(27);

// // loveCalculator
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// console.log(loveScore);

// //  arrays

// var fruit = ["mango", "guava", "cherry"];
// console.log(fruit);
// console.log(fruit[0]);

// console.log(fruit.includes("mango"));

