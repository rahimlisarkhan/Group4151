//? Finding element
// const titleEl = document.getElementById("title");
// const titleEl = document.getElementsByClassName("title_header");
// const titleEl = document.querySelectorAll(".title");
// const titleEl = document.querySelector("#title");
const paragEl = document.querySelector("#parag");
const imgEl = document.querySelector("#headerImg");

//? Changing element
paragEl.innerText = "Hello";
// paragEl.innerText = "<span>Hello</span>";
// paragEl.innerHTML = "<span>Hello</span>";

paragEl.style.color = "red";
paragEl.style.backgroundColor = "yellow";
paragEl.setAttribute("class", "text-danger bg-warning");
// paragEl.setAttribute("class", "text-danger bg-warning");
// paragEl.style.boxShadow = "0 0 10px 10px black";
// paragEl.style.left = "0";
// paragEl.style.display = "0";

// const h1 = document.getElementsByTagName("h1");

// console.log(titleEl);

// const imgSrc = imgEl.getAttribute("src");
const imgSrc = imgEl.src;
console.log(imgSrc);

imgEl.setAttribute(
  "src",
  "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
);

//? Adding and Deleting Elements

// const fullname = "M.Mustafa";

// document.write(`hello ${fullname}`);

//* Example 1
const divEl = document.createElement("div");
const h2El = document.createElement("h2");
const text = " Vanilla js crete element ";

divEl.setAttribute("class", "bg-warning");
h2El.setAttribute("class", "title-text");

h2El.style.textShadow = "0 0 5px 5px black";

h2El.innerText = text;

divEl.appendChild(h2El);

// document.body.appendChild(divEl);
// document.body.prepend(divEl);
document.body.append(divEl);

console.log(divEl);

//* Example 2
const myContent = document.querySelector("#myContent");

let count = 1;

myContent.innerHTML = `<div class="bg-warning"> 
<h2 class="title-text">${text}</h2>
</div>`;

//* Example 3

const titleEl = document.querySelector("#title");

console.log(titleEl);

// document.body.removeChild(titleEl);
// document.body.removeChild(titleEl);

//* Example 4
const removeItemBtn = document.querySelector("#removeItemBtn");
const addItemBtn = document.querySelector("#addItemBtn");
const list = document.querySelector("#list");

let data = [];

removeItemBtn.addEventListener("click", function () {
  const childFirstEl = list.firstElementChild;

  data.shift();
  list.removeChild(childFirstEl);
  console.log("click me", childFirstEl);
});

addItemBtn.addEventListener("click", function () {
  const liEl = document.createElement("li");

  const chunckData = `Test${count}`;

  data.push(chunckData);

  // const randomNum = Math.ceil(Math.random() * 100);

  liEl.innerText = chunckData;
  list.appendChild(liEl);

  count += 1;
  console.log("click me", liEl);
});

document.querySelector("#showItems").addEventListener("click", function () {
  console.log(data);
});

const nodeList = document.querySelectorAll(".title_header");

console.log(nodeList);

for (index in nodeList) {
  const el = nodeList[index];

  el.innerText = " WOOW! ";

  el.style.backgroundColor = "pink";
  el.style.fontSize = "45px";

  el.setAttribute("data-name", index + 1);
}

btn.setAttribute("onclick", "callme()");
