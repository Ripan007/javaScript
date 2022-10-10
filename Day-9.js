// scope
// inside a function  / access only  by that function:local scope
// not declared inside any function: global scope

// any variable that is used only inside the function yuu can declare it it local scope
// a variable that is used across your entire page used global scope

var a =  20; // globalScope/ access anywhere entire the page

function num(){
    var a = 34;
    console.log("inside the function"+" "+ a);
    // declare inside the function
    // access inside the function only
}

num(); // call/revoke

console.log("outside the function+"+" "+ a);

var a =  20; // globalScope/ access anywhere entire the page

// if variable is not assigned in localScope , then in that condition localScope will first print the value of globalScope variable value first
function num(){
    // var a = 34;
    console.log("inside the function"+" "+ a);
    // declare inside the function
    // access inside the function only
}

num(); // call/revoke

console.log("outside the function+"+" "+ a);

// whenever you declare something in localScope the value is only applicable for the localScope meaning only inside of the function 
// localScope means it is local to that function only
// access anywhere from the entire page

//  where ever you access a variable it immediately looks at it immediate scope, if there would be no variable it look at its parent scope,and if variable matches it wil print

// localScope use: whenever a variable is declare inside the function and access inside the function
// globalScope use : whenever a variable is declare outside and access in entire the page from anywhere

// declare
var a = 12.564;
// integer part get printed
console.log(parseInt(a));
// decimal pat  get printed
console.log(parseFloat(a));
// it will direct how many decimal have to print
console.log(a.toFixed(1));
//The Math.ceil() function always rounds a number up to the next largest integer.
console.log(Math.ceil(a));
//The Math.floor() function returns the largest integer less than or equal to a given number.
console.log(Math.floor(a));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence -link operator precedence
// BODMAS

console.log(3 + 10 * 2); // logs 23
console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order

// shortcut
var a=b =10;
console.log(a,b);

// conditions //

= -> assign
== -> comparing

// Basic if else syntax

var a = 20;
if(a==20){
    console.log("print value is correct");
}else{
    console.log("print value is incorrect");
}

// other way if else syntax
// one of the case only get printed 
// if all case fail then else case get printed
var a = 30;
if(a==10){
    console.log("10 is present");
}else if(a==20){
    console.log("20 is present");
}else if(a==30){
    console.log("3 is present");
}else{
    console.log("all of the above case fail to execute");
}

// SWITCH 
// switch condition is a way of checking which condition it true out of list of condition
var a = 20;
switch(a){
    case 20:
        console.log(a);
        break;
        default:
            console.log("if all condition failed")
}

// break : it will stop the flow of print,ones condition become true it will stop print anyOther line after that
var a = 30;
switch(a){
    case 10: 
    console.log("a is 10");
    break;
    case 20: 
    console.log("a is 20");
    break;
    case 30: 
    console.log("a is 30");
    break;
    default: 
    console.log("if every statement is false print javaScript goodBye");
}

var a = 20;
switch(a){
    case 10: case 20: 
    console.log("one of the condition true then it get printed");
    break;
case 30: 
console.log("print i the statement is true");
break;
default: 
console.log("print if above statement is false")
}

//  TERNARY OPERATORS
// short way of checking if the statement
var a = 20;
var print = a==20? "correct":"wrong";
console.log(print);

== => doubleEqualTo => check value is same or not / then conversion / implicit type coercion
=== => tripleEqualTo => check the type =>value  

var a = "10";

if(a==10){
    console.log("correct print the line");  // correct 
}else{
    console.log("print if line is wrong");
}

var a = "30";
if(a===30){
    console.log("print if statement is correct");
}else{
    console.log("print if statement is false"); // correct
}

// explicit type conversion 

var a = 56.777;
console.log(parseInt(a));
console.log(parseFloat(a));

// single line if statement 
// if first statement is correct , it will print both the statement else if first statement is false then it will print only the second condition

var a = 20;
if(a==20)
console.log("print the statement");
console.log("no need to print the statement");

//TYPEOF:tells the type of the dataType
var a = 20;
console.log(typeof a);

var a = [2,3,4,5,6];
console.log(typeof a);
// to check the typeOf ArrayType
console.log(Array.isArray(a));

// COMPARISON OPERATOR
// > < <= >= !=
var a = 20;
if(a>10){
    console.log("a is greater than 10");
}else{
    console.log("a is not greater than 10");
}

//   != => operator convert the true statement to a false statement
var a = 30;
if(a!=30){
    console.log("a is equal to 30");
}else{
    console.log("a is not equal to 30");
}

// LOGICAL OPERATOR
// AND : && / both the statement have  to true
// OR: || / one of the statement have to be true
// AND :!

var  a = 20;
if(a>5 && a>15 ){
    console.log("statement is true")
}else{
    console.log("statement is false");
}

// true statement become false due to NOT operator
var a = 30;
if(!(a==30)){
    console.log("print true")
}else{
    console.log("print false");
}s

// in javaScript  1 is equal to true and 0 is false ///////

var a = 1;  
var b = 2;
var c = a && b ; // print 2

// reason => var c = true && 2 ;
// last digit will print