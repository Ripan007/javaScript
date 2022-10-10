// NON BOOLEAN VALUE WITH LOGICAL OPERATOR //
// in JS 1 is true and 0 is false;
// null,undefined,0,"",[],false => falsy value 
// anything other than that is truthy value   

var a = 1;
var b = 2;
var c = 0;

var d = a && b ;
// a && 2 => true && 2 
console.log(d);
// the reason  
// if the statement is true than it will print the value of the right side

var e = c && a;
// 0 && 1 => false && 1 
// if there is a falsy value then it will print 0

console.log(e);

var f = c && b;
console.log(f);

// if there would be a falsy value then it will print 0
// if there would be a truthy value then it will print the number which is present other than truth value

// LOOP
//The major difference between for loop and while loop is that for loop is used when the number of iterations is known whereas, in the while loop, execution is done until the statement in the program is proved wrong.
// when you want to do a task repeatedly for a certain amount of time
// for loop,while,do..loop
// difference between while or do while  loop
// while loop:before executing the code , if the condition is true thn only it will execute the code
// do while: first before checking the  code , it will execute ones , after that it will check the condition , further execution is depend upon the condition , if condition is true further execution will take other wise no execution
// decrement / increment operator

var a = 10;
a++;
console.log(a);

var  b = 10;
a--;
console.log(b);

for(var i=0;i<5;i++){
    console.log('javascript');
}

// other way

for(var i=0;i<5;i++) console.log('fun');

// should not have semicolon after the end of forLoop

// print the table of 5
for(var i=1;i<=10;i++){
    console.log("5 x",i,"=",5*i);
}

// concatenation

var firstName = "ripan";
var lastName = "mondal";
var fullName = firstName + " " + lastName;
console.log(fullName);

// when you concatenate anything with a string it will also concerted to a string

var a = 2;
var b = 2;
var c = a + b;
console.log(c);


var a1 = "2";
var b = 2;
var d = a1 + b;
console.log(d);

// WHILE LOOP
var i=0;
while(i<5){
    console.log("javascript");
    i++;
}

// DO WHILE

var i=0;
do{
    console.log("javaScript");
    i++
}while(i<5);

// loop is applied in Array to print the element
var arr = ["fruit","mango","king","tasty"];

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// calculate the sum  
var arr = [20,30,40,50];
var sum =0;
for(var i=0;i<arr.length;i++){
    sum = sum + arr[i];
    console.log("sum="+" "+sum)

}
console.log(sum);

// print every element in a single line
var arr = ["mango","is","king","of","fruit"];
console.log(arr.join("="));

// FOR of--loop 
// when there will would be no condition 
// we cant print a particular index value
var arr = ["mango","fruit","king","tasty"];

for(var item of arr){
console.log(item);
}

// FOR..IN loop
// it is not used for array
// is is used for objects

// print element in nextLine
console.log("java\n script");

var fruit = {
    name:"mango",
    designation:"king",
    taste:"awesome",
    color:"while",
    size:"20"

}

for(var item in fruit){
    console.log(fruit[item]);
}

console.log(fruit["name"]); // when we ave to print individual element

// BREAK
// when break statement  encounter the loop will stop and break out of the loop

for(var i=0;i<10;i++){
    if(i==5){
        break;
      }
    console.log("print");
}

// CONTINUE
// moves on to the next iteration / it will skip the condition index element on moves on
// skip current iteration and move out to the next iteration

for(var i=0;i<10;i++){
    if(i==5){
        break;
      }
    console.log("print");
}

// INFINITE LOOP

for(var i=0;true;i++){
    console.log(i);
}
