// functions
// dont repeat yourself and dry
// we can  call function declaration before they are defined in the code
// function is a piece of code that we can use again and again
//  basic function
// use when when we want to use a block of code again and again
function name() {
  console.log("my name is ripan");
}
// calling / running / revoking functions
name();

// argument in function / parameters

function foodProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice contain ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juices = foodProcessor(2, 3);
console.log(juices);

// sum of two number
function cal(num, num1) {
  console.log(num, num1);
  const add = num + num1;
  return add;
}

const sum = cal(2, 4);
console.log(sum);
// other way
c;
console.log(cal(2, 4));

// other way
function cal(num, num1) {
  return num + num1;
}

const sum = cal(2, 4);
console.log(sum);

// function declarations vs function expressions

// function declarations
// we can  call function declaration before they are defined in the code
// example
const age = calAge(1995);
console.log(age);

function calAge(birthYear) {
  return 2022 - birthYear;
}
// hoisting

// calAge

function calAge(birthYear) {
  return 2022 - birthYear;
}

const age = calAge(1995);
console.log(age);

// function expression
// function without name / anonymous function

const calAge = function (birthYear) {
  return 2022 - birthYear;
};

const age = calAge(1995);
console.log(age);

// arrow function //
//  function expression

const calAge = function (birthYear) {
  return 2022 - birthYear;
};

const age = calAge(1995);
console.log(age);

// arrow function
const calAge1 = (birthYear) => 2022 - birthYear;
const age1 = calAge1(1996);
console.log(age1);

// more line of code
// add curly braces
// add return statement

// create a function to calculate retirement

const ageRetirement = (birthYear, name) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${name}  remains days  for retire is ${retirement}`;
};

console.log(ageRetirement(1995, "ripan"));

// function calling other functions

const cutFruitPieces = (fruit) => fruit * 4;

const fruitProcessor = (apples, oranges) => {
  const applePice = cutFruitPieces(apples);
  const orangePice = cutFruitPieces(oranges);

  const juice = `juice contain ${applePice} apple and ${orangePice} orange.`;
  return juice;
};

console.log(fruitProcessor(2, 4));
