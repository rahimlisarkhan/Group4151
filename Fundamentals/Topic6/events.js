//? Example1
function callme() {
  alert("Hello");
}

//? Example2
// addItemBtn.addEventListener("click", function () {
addItemBtn.addEventListener("dblclick", function () {
  // const liEl = document.createElement("li");
  // const chunckData = `Test${count}`;
  // data.push(chunckData);
  // // const randomNum = Math.ceil(Math.random() * 100);
  // liEl.innerText = chunckData;
  // list.appendChild(liEl);
  // count += 1;
  // console.log("click me", liEl);
});

//? Example3
addItemBtn.onclick = callme;
