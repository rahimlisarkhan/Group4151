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
