// console.log(2 + "2");
// console.log(2 - "2");
// bug

// difference b/w null and undefined ?
// null
// const a = null;
// console.log(a);
// console.log(typeof (a));
// object
// bug

// undefined
// var b;
// console.log(b);
// console.log(typeof (b));

// what is NaN ?
// console.log("a" - "b");
// var myNumber = 44444444;
// var myName = "raj";

// console.log(isNaN(myNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)) {
//     console.log("input valid elements");

// }
// increment and decrement operator
// var num = 2;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// more practice required
// ask in interview
// postfix
// var num = 2;
// var newNum = num++ + 3;
// console.log(num);
// console.log(newNum);

// prefix
// var num = 2;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

// var num = 3;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

// write a program to swap numbers
// var a = 5;
// var b = 10;
// var temp;

// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

//  swap number without using third variable

// var a = 5;
// var b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

// diff between == and === ?
// write a program if the year is a leap year or not ?

// var year = 2020;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400) {
//             console.log("leap year");
//         } else {
//             console.log("not a leap year");
//         }
//     } else {
//         console.log("leap year");
//     }
// } else {
//     console.log("not a leap year");
// }

// what is truthy an falsy value  ?

// ternary operator
// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you cant vote");

// var num = 0;
// while (num <= 20) {
//     console.log(num);
//     num++
// }

// print  a  table using forloop

// for (var i = 1; i <= 10; i++) {
//     console.log(2 * i);
// }

// function sum() {
//     var a = 2;
//     var b = 2;
//     var total = a + b;
//     console.log(total);
// }

// sum()

// function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// sum(2, 2);




// function bioData() {
//     var myFirstName = "ripan";
//     console.log(myFirstName);
//     if (true) {
//         let myLastName = "mondal";
//         console.log('inner' + myLastName);
//         console.log('inner' + myFirstName);

//     }

//     console.log('innerOuter' + myLastName);
// }

// bioData();

var name = ["a", "b", "c", "d"];

// for (let element in name) {
//     console.log(element);
// }

// for (let element of name) {
//     console.log(element);
// }

// name.forEach(function (element, index, array) {
//     console.log(element);
// })

// const heading = document.querySelector("#heading");
// const button = document.querySelector("button");

// function changeText() {
//     heading.innerHTML = "change";
// }

// button.addEventListener("click", changeText)

// inputs events




// function render() {
//     const input = document.querySelector("#ice").value;
//     const select = document.querySelector("#iceCreams").value;
// console.log(`${input} and ${select}`);
//     const result = document.querySelector("#result");
//     result.value = `${input} ${select}`
// }



// const iceCreams = document.querySelector("#iceCreams");
// iceCreams.addEventListener('change', () => {
//     const iceCreams = document.querySelector("#iceCreams").value;
//     const input = document.querySelector("#ice").value;
//     const result = document.querySelector("#result");
//     result.value = `${input} ${iceCreams}`
// })

// const show = document.querySelector("#showName");
// const button = document.querySelector("#btn");

// function showName() {
//     setTimeout(() => {
//         show.innerHTML = "ripan";
//     }, 2000)
// }

// button.addEventListener('click', showName);


// const show = document.querySelector("#showName");
// const button = document.querySelector("#btn");

// function showName() {
//     show.innerHTML = "ripan";
// }




