// JS theory //
// single threaded synchronous language 
// single threaded : it can only run one command at a time
//synchronous:  run command one after the other/one command at a time in perfect order from top to bottom

//  JS variables //

// Declaring a variable
var myName;
let age;

// initializing a variables
 myName = 'robin';
 age = 23;

 // variable scope //
 //1.global variables:access anywhere in the javascript / parent level
 //2.local variables


  var greet = "hello"; // global variables

 function myFunction(){
    var message ="javaScript";
    alert(greet + javaScript);  // can access global and local variables
 }

 myFunction(); // call

alert(greet); // access global variables
alert(message); // cant access local variables

// dynamically typed language //
// assigned variable 
 var a = 23;
console.log(a); //
// change variables
a = "javascript";
 console.log(a);

// JavaScript Primitive Types
// string
// number
// bigint
// boolean
// undefined
// symbol
// null

// undefined
var  a ;
console.log(a);

//  nonPrimitive dataTye:combination of lot of primitive dataType //
// 1.array
// 2.object

// array:way of storing list of item 

 var a = [1,2,3,4];
 var a = [1,2,'raj',4];  // diff type of dataType
 console.log(a);

// storing of data in keyPair values //
var bioData ={
    name:"raj",
    job:"developer",
    maritalStatus:"single"
}

 console.log(bioData); // output all
 console.log(bioData.name); // output single element
 console.log(bioData.job); // dot operator
console.log(bioData["name"]); // squareBracket operator

// modify //
bioData.name = "komal";
console.log(bioData.name); // single element
bioData["age"] = 25;
console.log(bioData);

// other way to assign object //
var person = new Object();
person.name = "raj";
person.age = 29;
person.job = "private";
console.log(person);

// modify
person.name = "mohan";
console.log(person);
person["name"] = "shakti";
console.log(person);

// arrays//
var num = [10,20,30,40];
console.log(num[0]);
console.log(num);

// modify
num[2] = 300;
console.log(num);
console.log(num[2]);

// size of the arrays
console.log(num.length);

// other way to assign arrays //
var num = new Array(20,30,40,50);
console.log(num[2]);

// function //
// assign function
function sum(){
    console.log("this is a sample sum function");
}

 sum();  call/invoke

// assign parameter 
function sum(num){
    console.log('the input is '+""+num);
}
 sum(50);

// assign two parameters
function sum(num,num1){
    console.log('print the input'+" "+num+" "+num1);
}
sum(23,67);

// add two number
// function definition //
function sum(num,num1){
    console.log(num+num1);
}
sum(2,2);

function multiply(num,num1){
    console.log(' the result is'+" "+num*num1);
}
function divide(num,num1){
    console.log('the result is'+" "+num/num1);
}
divide(5,2);
multiply(2,2);

// return //
 function sum(num,num1){
     return num + num1;  // store
 }
var value = sum(20,20);
 console.log(value); //  call

// another way to assign function //
// function expression
var sum = function(num,num1){
    return num + num1;
}
var value = sum(20,20);
console.log(value);

