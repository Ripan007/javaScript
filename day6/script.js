// access elements in dom

// const normal = document.getElementsByTagName("p");
// console.log(normal[0].innerHTML);

// const id = document.getElementById("id");
// console.log(id.innerHTML);

// const Class = document.getElementsByClassName("para");
// console.log(Class[0].innerHTML);
// console.log(Class[0].innerText);
// console.log(Class.innerHTML);

// const paragraph = document.getElementsByClassName("para");
// paragraph[0].innerText = "change the  documentation of the element";

// innerText
// innerHTML

// function changeHeading() {
//   const userInput = document.getElementById("heading").value;
//   const heading = document.getElementsByTagName("h1");
//   heading[0].innerText = userInput.value;
// }

// function changeInput() {
//   const takeInput = document.getElementById("heading").value;
//   const heading = document.getElementsByTagName("h1");
//   heading[0].innerText = takeInput;
// }

// onchange
// onclick

// appending new elements

// append child

function inputHead() {
  const takeInput = document.getElementById("head").value;
  const newElement = document.createElement("h1");
  newElement.innerText = takeInput;
  const container = document.getElementById("container");
  container.appendChild(newElement);
}
