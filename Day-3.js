// functions //
// a piece of code that we can use repeatedly
// reusing line of code

function info() {
  console.log("java");
}
// calling / running / invoking
info();

function foodProcessor(apple, orange) {
  const juice = `the juice contain ${apple} apple and ${orange} orange`;
  return juice;
}

const wholeJuice = foodProcessor(5, 6);
console.log(wholeJuice);
console.log(foodProcessor(4, 6));

const num = Number("2");
console.log(num);

const check = typeof num;
console.log(check);

// function declaration and expressions  //
// diff between function declaration and function expressions
// we can actually call functions declaration before they are defined in the code
// reason hoisting

// function declaration

function calAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
console.log(calAge(1995));

// it will work in case of function declaration
console.log(calAge1(1997));
function calAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

// function expressions

const calAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

console.log(calAge2(1995));

console.log(calAge3(1995));
const calAge3 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

// arrow functions //
// arrow functions doesn't  have this keyword
// one arguments

const calAge4 = (birthYear) => 2022 - birthYear;
console.log(calAge4(1995));
const calAge5 = (birthYear) => 2022 - birthYear;
console.log(calAge5(1990));

// one parameter and more than one line of code
// we need to mention return statement

calculate yearUntilRetirement
const yearUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 70 - age;
  return retirement;
};

console.log(yearUntilRetirement(1995));

const yearUntilRetirement = (name, birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 90 - age;
  return `${name}  remain age for retirement is  ${retirement}  `;
};

console.log(yearUntilRetirement("john", 1995));

functions calling other functions //
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = (apple, orange) => {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);
  const juice = `juice with ${applePieces} applePieces and ${orangePieces} orangePieces`;
  return juice;
};

console.log(fruitProcessor(2, 4));

const calAge = function (birthYear) {
  return 2022 - birthYear;
};
const yearUntilRetirement = function (birthYear, name) {
  const age = calAge(birthYear);
  const retirement = 70 - age;
  return `${name} remain ${retirement} age`;
};
console.log(yearUntilRetirement(1995, "john"));

const calAge = function (birthYear) {
  return 2022 - birthYear;
};
const yearUntilRetirement = function (birthYear, name) {
  const age = calAge(birthYear);
  const retirement = 90 - age;
  if (retirement > 0) {
    console.log(`the remain ${retirement}`);
    return retirement;
  } else {
    console.log(`already retired`);
    return -1;
  }
};
console.log(yearUntilRetirement(1992, "joh"));
console.log(yearUntilRetirement(1555, "joh"));


