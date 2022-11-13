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


let data = [10, 20, 30, 40, 50];
let target = 10;
let index = undefined;

for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
        index = i;
        break;
    }
}


console.warn(index);