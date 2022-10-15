// continue promises
// event loop
// closure
// prototype
// async wait

// resolveFunc(value) => call on fullfield

// executor function
// promise produce

// modification required

// const user = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4];
//         resolve(roll_no);
//         // reject("getting error")
//     }, 2000)
// })

// const getUserData = (indexData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((indexData) => {
//             let bioData = {
//                 name: "raja",
//                 age: 23
//             }
//             resolve(`my rollNo is ${indexData} my name is ${bioData.name} and my age is ${bioData.age}`)
//         }, 2000, indexData)
//     })
// }


// user.then((rollNo) => {
//     console.log(rollNo);
//     getUserData(rollNo[1]).then((get) => {
//         console.log(rollNo);
//     })
// }).catch((error) => {
//     console.log(error);
// })

// Async wait

// executor
// promise produce


// const pObj = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4];
//         resolve(roll_no);
//     }, 2000)
// });

// const getBioData = (indexData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((indexData) => {
//             let bioData = {
//                 name: "raj",
//                 age: 23
//             }
//             resolve(`my name is ${bioData.name} and i am ${bioData.age} years old`)
//         }, 2000, indexData)
//     })
// }

// promise consuming / receiving value
// pObj.then((rollno) => {
//     console.log(rollno);
//     return getBioData(rollno[1]);
// }).then((random) => {
//     console.log(random);
// }).catch((error) => {
//     console.log(error);
// })

// using async await rewrite promise consuming / receiving data

// async function getData() {
//     const rollNoData = await pObj;
//     console.log(rollNoData);
//     const bioDatas = await getBioData(roll_no[1]);
//     console.log(bioDatas);
// }
// getData();

// fetch api

// print : cell , email, gender

// fetch('https://randomuser.me/api/').then((apiData) => {
//     return apiData.json();
// })
//     .then((oriData) => {
//         const user = oriData.results[0];
//         document.querySelector("#show").innerHTML = ` the phoneNum of the user ${user.cell} as well as email of the user is ${user.email}`
//     })
//     .catch((error) => {
//         console.log(`error are return here: ${error}`);
//     })

