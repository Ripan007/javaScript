// Array traversing and accessing data structures //

// let data = [10, 20, 30, 40, 50];
// document.write(data[0])
// for (let i = 0; i < data.length; i++) {
//     document.write(`Array ${i} contain ${data[i]} <br/>`)
// }

// let x = 3;
// document.write(data[x])


// function getElement() {
//     let el = document.querySelector("#element").value;
//     if (el < data.length) {
//         alert(`print the index value ${data[el]}`)
//     } else {
//         alert(`print valid value`)
//     }
// }

// insert element in array //

// let  data = [20,30,40,50];
// let newEle = 10;
// let position  = 0;

// for(let i=data.length-1;i>=0;i--){
//     if(i>=position){
//         data[i+1] = data[i];
//         if(i===position){
//             data[i] = newEle;
//         }
//     }
// }
// document.write(`[${data}]`)



// function result() {
//     let data = [20, 30, 40, 50];
//     let newEle = document.querySelector("#newEle").value;
//     newEle = parseInt(newEle);
//     let position = document.querySelector("#position").value;

//     for (let i = data.length - 1; i >= 0; i--) {
//         if (i >= position) {
//             data[i + 1] = data[i];
//             if (i == position) {
//                 data[i] = newEle;
//             }
//         }
//     }
//     document.write(data);
// }

//  default way to insert element //

// let data = [20, 30, 40];
// data.splice(1, 0, 100);
// document.write(data);

// delete element in array //


// let data = [10, 20, 30, 40, 50];
// let position = 2;
// for (let i = position; i < data.length - 1; i++) {
//     data[i] = data[i + 1];
// }
// data.length = data.length - 1;
// console.warn(data);


// function deleteEle() {
//     let data = [10, 20, 30, 40, 50];
//     let position = document.querySelector("#position").value;
//     position = parseInt(position)

//     for (let i = position; i < data.length - 1; i++) {
//         data[i] = data[i + 1];
//     }
//     data.length = data.length - 1;
//     console.warn(data);
// }


// let data = [10, 20, 30, 40, 50];
// let target = 10;
// let index = undefined;

// for (let i = 0; i < data.length; i++) {
//     if (data[i] === target) {
//         index = i;
//         break;
//     }
// }
// console.warn(index);
// data.splice(2, 1);
// console.log(data);

// function search() {
//     let data = [10, 20, 30, 40, 50];
//     let target = document.querySelector("#target").value;
//     let index = undefined;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] == target) {
//             index = i;
//             break;
//         }
//     }
//     console.warn(index);
// }

// merge two array

let data = [10, 20];
let data2 = [30, 40];
let data3 = [];

for (i = 0; i < data.length; i++) {
    data3[i] = data[i];
}
for (i = 0; i < data2.length; i++) {
    data3[data.length + i] = data2[i];
}

console.log(data3);

// let data = [10, 20, 30, 40];
// let reverse = data.reverse();
// console.log(reverse);

// let data2 = [50, 60, 70];

// let data3 = [...data, ...data2];
// console.log(data3);

let data1 = [10, 20, 30, 40, 50, 60];
let data2 = [5, 15, 25];
let data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
    if (data1[d1] < data2[d2]) {
        data3[d3] = data1[d1];
        d1++;
    } else {
        data3[d3] = data2[d2];
        d2++;
    }
    d3++;

}

while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d1++;
    d3++;
}

console.log(data3);