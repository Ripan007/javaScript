// getElementById
const title = document.getElementById("main-heading");
console.log(title);

// getElementByClassName
const listItem = document.getElementsByClassName("list-item");
console.log(listItem);

// getElementsByTagName
const tag = document.getElementsByTagName("li");
console.log(tag);

// querySelector
const container = document.querySelector("div");
console.log(container);

// querySelectorAll
const all = document.querySelectorAll("div");
console.log(all);

// styling elements //

// for id querySelector is most suitable
// styling single element
const title = document.querySelector("#main-heading");
title.style.color = "red";

// querySelectorAll //
const listItem = document.querySelectorAll(".list-item");
traverse to select all element //
for (i = 0; i < listItem.length; i++) {
  listItem[i].style.color = "pink";
}

// creating element

const ul = document.querySelector("ul"); // select
const li = document.createElement("li"); // create
// adding element
ul.append(li);

// modifying text
const firstListItem = document.querySelector(".list-item");
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = "x-men";

/// modifying attribute and class

li.setAttribute("id", "main-heading"); // copy the property
li.removeAttribute("id"); // remove the  property

const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));

li.classList.add("list-item"); // inherit the class property
li.classList.remove("list-item");

console.log(li.classList.contains("list-item"));

//remove elements

li.remove();

// NAVIGATE THE DOM //

Parent Node Traversal
parent : one step higher(above)
let ul = document.querySelector("ul");
console.log(ul);
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);
const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

// child node traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "blue";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//sibling node traversal 
console.log(ul.previousSibling);
console.log(ul.nextSibling);

const div = document.querySelector("div");
console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// EVENT LISTENERS //
{
  <button onclick="alert('javaScript is cool')" class="btn-3">enter</button> 
  // one way
}
element.addEventListener("click",function)

const btnThree = document.querySelector(".btn-3");  // otherWay
function alertBtn() {
  alert("love java as well as javaScript");
}
btnThree.addEventListener("click", alertBtn);

//mouseOver

const newBackgroundColor = document.querySelector(".box-2");
function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "yellow";
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reveal event

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

// css

.hidden-content{
  display: none
}

.hidden-content.reveal-btn{
  display: block;
}

// event probagation
// 3 phases
// event Capturing
// target
// event bubbling

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("Div 2");
  },
  true
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("Div 1");
  },
  true
);
e - eventObject
document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  true
);

//modify
document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked"));
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Div 2");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Div 2");
  },
  { once: true }
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log((e.target.innerText = "clicked"));
  },
  true
);

// event delegation
// it allow users to append  a SINGLE event listener to a parent element that adds it to all of its present and future descendants that match a selector

document.querySelector("#football").addEventListener("click", function (e) {
  console.log("click the football section");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#basketball").addEventListener("click", function (e) {
  console.log("click the basketball section");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#boxing").addEventListener("click", function (e) {
  console.log("click the boxing section");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#tennis").addEventListener("click", function (e) {
  console.log("click the tennis section");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + "is clicked");
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

const sports = document.querySelector("#sports");
const newSports = document.createElement("li");

newSports.innerText = "rugby";
newSports.setAttribute("id", "rugby");
sports.appendChild(newSports);
