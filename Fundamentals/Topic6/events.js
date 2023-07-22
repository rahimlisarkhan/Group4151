// //? Example1
// function callme() {
//   alert("Hello");
// }

// //? Example2
// // addItemBtn.addEventListener("click", function () {
// addItemBtn.addEventListener("dblclick", function () {
//   // const liEl = document.createElement("li");
//   // const chunckData = `Test${count}`;
//   // data.push(chunckData);
//   // // const randomNum = Math.ceil(Math.random() * 100);
//   // liEl.innerText = chunckData;
//   // list.appendChild(liEl);
//   // count += 1;
//   // console.log("click me", liEl);
// });

// //? Example3
// addItemBtn.onclick = callme;

const imgContent = document.querySelector("#imgContent");
const imgInfo = document.querySelector("#imgInfo");

imgContent.addEventListener("mouseenter", function (e) {
  console.log("in");

  console.log(e);

  imgInfo.style.display = "block";
});

imgContent.addEventListener("mouseleave", function (e) {
  console.log("out");
  imgInfo.style.display = "none";
});

imgContent.addEventListener("mousemove", function (e) {});

// function addEventListene(eventname,callback){

//   if(eventname === "mouseleave"){

//   }

// }

// let array = ["Hello", "World"];
let array = ["Hello", ""];

const firstArr = array[0];
const secondArr = array[1];

let result = "";

for (let i = 0; i < firstArr.length; i++) {
  result += `${firstArr[i]} ${secondArr[i] ?? " "}\n`;
}

console.log(result);
