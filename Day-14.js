// find the missing number

// function missing(arr) {
//   let missNum = [];
//   let minNum = Math.min(...arr);
//   let maxNum = Math.max(...arr);

//   // for loop

//   for (let i = minNum; i < maxNum; i++) {
//     if (arr.indexOf(i) < 0) {
//       missNum.push(i);
//     }
//   }
//   return missNum;
// }

// console.log(missing([1, 2, 4]));

// find unique elements

// let arr = [1, 2, 2, 4];
// let result = {};
// for (let i = 0; i < arr.length; i++) {
//   if (!(arr[i] in result)) {
//     result[arr[i]] == 1;
//   }
// }

// console.log(Object.keys(result));

//! grocery list
// Instead of creating a static shopping list with paper and a pen, create it dynamically. Take the list item and the price from the user and further find the grand total.

function insertItem() {}

const shoppingCart = [];
document.querySelector("button").addEventListener("click", () => {
  let title = document.querySelector("#item-name-input");
  let price = document.querySelector("#item-price-input");
  if (title.value !== "" && price.value != "") {
  } else {
    alert("fill the field correctly");
  }
});
