// comment //
// in-line comment
var a = 23;
// multi-line comment

/*
var a;
a = 56; 
var c = 55;

*/

// data type //
 
/* undefined , null , boolean , string , symbol , number and object */

// type 
var type = "undefined";
let;
const;

// difference between three of them

// var: ued through out the whole program
// let: only be used within the scope of where you declare that
// const : it can never change   

// example of constant 
const name = "raj";
name = "mohan";
console.log(name); // wrong

// storing value with assignment operator

var a ; // declaring 
var a = 3; // declaring & assigning

// initializing variable with assignment operator

// uninitialized variable 
// case sensitivity in variable 
// camelCase   

// adding  assignment operator
// * exponent
// / divide
// - subtract
 var  num = 2+2;
 console.log(num);

// finding a remainder 
// % - modulus

// compound assignment with augmented addition

var a =12;
a+=20;
console.log(a);

// other type assignment
// -=
// *=
// /=

// escaping literal  quotes in strings

var string = " i am "double quote" and i am also "double quote"  "; // wrong
// use \* *\
var string = " i am \"double quote\" and i am also \"double quote\"  ";  // right way

// quoting string with single quotes
var string = ' i am "double quote" and i am also "double quote"  '; 

//  escapes sequence in string    

/* 
' single quote 
"" double quote 
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*/

//  concatenating string with plus operator

var name = "ripan"+"mondal";
console.log(name)

// concate using plus = operator (+=)

var name = "ripan";
name+=" desire to explore to code";
console.log(name);

// appending variables to string  
var name = 'ripan';
var word ="explore the code";
name+=word;
console.log(name)

// find length of string 

// one way;
var name = "jjjfk";
var find = name.length;
console.log(find);
// other way
var character = "ffffff";
console.log(character.length);


// bracket notation to find first character in string 
var pet = "cat";
console.log(pet[0]);

// string immutability
// cant alter ones they created 
// individual character of the string cannot be changed
var pet = "cat";
var[0] = "d";
console.log(pet);  // wrong 

// correct order 
pet = "dog";
consol.log(pet);

// nth character of the string
var pet = "cat";
console.log(pet[0]);
// last character in string  
var pet = "cat";
console.log(pet[pet.length-1]);
// second last character 

console.log(pet[pet.length-2]);

// word blanks
function wordBlanks(a,b,c){
    var result = "";
    result+= b+" "+ c +" " + "about" + " " + a;
    return result;
}

console.log(wordBlanks("code","ripan","passionate"));

// store multiple values with arrays

var  arr = ["name",20];

// nested array

var arr = [ [1,2,3],[4,5,6],9,10
]

// access array data with indexes

// access multi-dimensional array indexes

var arr = [1,2,3];
console.log(arr[0]);

var arr1 = [[1,2,3],[4,5,6]];
console.log(arr1[1][0]);



// manipulate arrays with pop()
// remove an array with pop()
//  remove the last element
// remove the last array part

var arr = [[1,2,3],[4,5,6]];

arr.pop();
console.log(arr);

// manipulate arrays with shift();
// it remove the fast element
// similar to pop

var arr = [[1,2,3],[4,5,6]];

arr.shift();
console.log(arr);

// manipulate arrays with unshift();
// similar to push
// insert element  at the begin of the array
var arr = [[1,2,3],[4,5,6]];

arr.unshift([0,1,2]);
console.log(arr);

// manipulate array with push()
// append data at the end of the array  
var arr = [[1,2,3],[4,5,6]];

arr.push([7,8,9]);
console.log(arr);

// write res reusable code  with functions
function hello(){
    console.log("hello javaScript");
}

hello();

// passing  value to function with argument
function sum(a,b){
    console.log(a+b);
}

sum(2,3);a
// global scope and functions
// visibility of the variable
// variable which are defined outside of a function block have a global scope
// global scope means they can be seen everywhere in your javascript code

// local scope and functions
// variable which are declared within a function as well as the functions parameter 
//they,re only visible from within the function


// global vs local scope in functions

function print(a,b){
    var  a = 5;
    console.log(a);
}

print();

// precedence between local vs global
// local > global

var outer = "hello"; // global

function sent(){
    var outer = 34; // local scope
    return outer;
}

console.log(sent());

console.log(outer);

// return a value from a function with return
function sum (num){
    return num * 4;
    }
    
    console.log(sum(2));

    // understanding undefined value returned from  a function

    function sum(num){
        num *3;
        }
        
        console.log(sum(3));

        // assignment with a returned value

        // stand in line 

        // bollean values

        // use conditional logic with if statements
        function trueOrFalse(washThatTrue){
            if(washThatTrue){
                return "it is a true statement";
            }else{
                return "false statement";
            }
        
        }
        
        console.log(trueOrFalse(false))
        // comparison with the equality operator
// == equality operator
// = assignment operator


// comparison with the strict equality operators

// difference between == vs ===
// == attempt to convert both values beings compared to a common type
// === does not do the type conversion

// comparison with the Inequality operators




