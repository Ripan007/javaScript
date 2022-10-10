var x = 10;
console.log(x);
 10

console.log(x);
var x = 10;
undefined

console.log(x);
function fuc(x) {
  console.log(x);
}
var x = 19;
undefined

console.log(x);
function fuc(x) {
  var x = 23;
  console.log(x);
}
var x = 19;
fuc(x);
blockScope
23

console.log(x);
undefined
function fuc() {
  var x = 23;
  console.log(x);
}
var x = 19;
fuc();

console.log(x);
var x = 19;
function fuc() {
  console.log(x);
}
fuc();
undefined
19

console.log(x);
var x = 19;
function fuc() {
  console.log(x);
  var x = 24;
  console.log(x);
}
fuc();
undefined
undefined
24;

search in global scope when there will be no value in localScope

 diff b/w var or let/const ?
var - function  scope
let , const - blockScope

console.log(p);
{
  var p = 10;
}
undefined

console.log(p);
{
  var p = 10;
}
let, const = blockScope
not defined

{
  console.log(p);
  var p = 29;

}
undefined

 temporal dead zone
let/const => we cannot access this before initialization

{
  console.log(p);
  const p = 29;
}
not defined

{
  p = 34;
  console.log(p);
  let p;
}
error

{
  p = 34;
  console.log(p);
  var p;
}
34

var is always hoisted at the top

var x = 30;
function fc() {
  console.log(x);
  var x = 45;
  console.log(x);
}
not called

let x = 34;
function fc() {
  console.log(x);
  var x = 56;
  console.log(x);
}
fc();
undefined
 56

let a = 23;
{
  console.log(x);
  let a = 67;
  console.log(x);
}
error

let a = 3;
{
  let a = 45;
  console.log(a);
}
block
45

let a = 3;
{
  var a = 45;
  console.log(a);
}
error
let cannot shadow by var

var a = 3;
{
  let a = 45;
  console.log(a);
}
print
45

const a = 45;
a = 56;
console.log(a);
const cannot redefined
error

let a = 45;
a = 56;
console.log(a);
refined
45

var a = 45;
a = 56;
console.log(a);
redefine

var a = 100;
var a = 233;
console.log(a);
redeclare

let a = 100;
let a = 233;
console.log(a);
error

const a = 100;
const a = 233;
console.log(a);
error

var is declare and const/let not declare

function

function declaration
function fc(){
    return  0;
}

function expression

const fc = function () {
    return 0;
};

const fc = function () {
  return 10;
};

function f() {
  return 20;
}
console.log(fc());
call
console.log(f());
10
20

const fc = function () {
  return 10;
};

function f() {
  return 20;
}
console.log(fc);
console.log(f);
print map of the function
undefined

console.log(fc);
console.log(f);
const fc = function () {
  return 10;
};

function f() {
  return 20;
}
error

function square(x) {
  return x * x;
}
console.log(square(8));

arrow function

const square = (x) => {
  return x * x;
};

console.log(square(8));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 5));

function f() {}

f(4, 6, 7);

const f = () => {
  console.log();
};
f(5, 7);

spread operator

function f(num) {
  console.log(num);
}
const num = [1, 3, 5];
f(num);

function f(...num) {
  console.log(num);
}
f(3, 4, 6);

function f (a,b...num,c,d){
    console.log(num);
}

Filter(3,5,6);
error

function f(a, b, c, d, ...num) {
  console.log(a, b, c, d, num);
}

f(1, 2, 3, 5, 5, 7, 8, 8);

objects

console.log(person);
const person = {
  name: "raja",
  age: 23,
  job: "softwareDeveloper",
};
const person1 = { ...person, lastName: "mohan" };
const person1 = { lastName: "mohan", retire: 34, ...person };

console.log(person1);

for in

for (key in person1) {
  console.log(key + "=>" + person1[key]);
}

delete person1[age];
console.log(person1);

other way
const person = {
  "the age": 23,
};
console.log(person["the age"]);

call bye value
call bye reference

function f(a, b) {
  a = a + 10;
  b = b + 20;

}

var a = 56;
var b = 67;
f(a, b);
console.log(a, b);
56,67
