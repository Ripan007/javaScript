// fetching a file

// fetch('apiText.txt').then(function (response) {
//     return response.text();
// }).then(function (data) {
//     return document.write(data)
// })


// fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((read) => {
//     console.log(read);
//     for (let show in read) {
//         document.write(`${read[show].name} => ${read[show].username}  <br/>`)
//     }
// })

// create a html form , take two input as firstName and lastName ,
// when  you click submit button it will print firstName then name same for last name

// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const submit = document.querySelector("#submit");




// function submission() {
//     document.write(` firstName:${firstName.value} <br/>`)
//     document.write(` lastName:${lastName.value} <br/>`)
// }

// submit.addEventListener("click", submission)

// submit.addEventListener("click", function () {
//     document.write(` firstName:${firstName.value} <br/>`)
//     document.write(` lastName:${lastName.value} <br/>`)
// })

// submit.addEventListener("click", function () {
//     const firstname = firstName.value;
//     const lastname = lastName.value;
//     const first = document.querySelector("#first").innerHTML = document.write(firstname)
//     const last = document.querySelector("#last").innerHTML = document.write(lastname)

// })

// remove duplicate from array

// const duplicate = [1, 2, 3, 4, 5, 5, 5];
// const uniqueElement = [...new Set(duplicate)];

// document.write(uniqueElement);


// synchronous

// function fun2() {
//     console.log("fun2 is starting");
// }

// function fun1() {
//     console.log("fun1 is starting");
//     fun2();
//     console.log("fun1 is ending");
// }

// fun1();

// asynchronous

// function fun2() {
//     setTimeout(() => {
//         console.log("fun2 is starting");
//     }, 2000)

// }

// function fun1() {
//     console.log("fun1 is starting");
//     fun2();
//     console.log("fun1 is ending");
// }

// fun1();


// synchronous : without completing one task we cant able to do other task
// asynchronous : we can do multiple task at ones

// task
// student rollNo
// student nam and age
// gender

// const getRollNo = () => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4];
//         console.log(roll_no);
//         setTimeout(() => {
//             const bioData = {
//                 name: "raj",
//                 age: 20
//             }
//             console.log(`hi i  am ${bioData.name} amd i am ${bioData.age} year old`);
//             setTimeout(() => {
//                 bioData.gender = "male";
//                 console.log(`${bioData.gender}`);
//             }, 2000)

//         }, 2000)
//     }, 2000)
// }

// getRollNo();

// promise

// const pObj1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let Roll_no = [1, 2, 3, 4];
//         resolve(Roll_no)
//     }, 2000)
// })

// pObj1.then((rollNo) => {
//     console.log(rollNo);
// })


// closure

// const outerFunction = ((a) => {
//     let b = 4;
//     const innerFunction = (() => {
//         add = a + b;
//         console.log(add);
//     })
//     innerFunction();
// })

// outerFunction(7)

// mock //


alert('hi')
