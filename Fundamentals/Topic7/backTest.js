const fullName = document.querySelector("#fullName");
const password = document.querySelector("#password");
const btnEnter = document.querySelector("#btnEnter");
const btnAdd = document.querySelector("#btnAdd");
const btnCash = document.querySelector("#btnCash");
const btnExit = document.querySelector("#btnExit");
const addInput = document.querySelector("#addInput");
const welcome = document.querySelector(".welcome");
const firstPage = document.querySelector("#firstPage");
const secondPage = document.querySelector("#secondPage");
const customerInfo = [];
let balance = 200;

btnEnter.addEventListener("click", function () {
  event.preventDefault();
  const value = fullName.value;
  if (fullName.value === "" || password.value === "") {
    alert("please enter your fullname and password");
  } else {
    customerInfo.push(value);
    render();
    console.log(customerInfo);
  }
});

chk.addEventListener("change", function () {
  password.type = chk.checked ? "text" : "password";
});

function render() {
  firstPage.style.display = "none";
  secondPage.style.display = "block";
  let content = `Dear <span style="color:red;">${fullName.value}</span>, welcome to AyBank ATM.<br>Your Current balance ${balance} $.`;
  welcome.innerHTML = content;
  fullName.value = "";
}

btnAdd.addEventListener("click", function () {
  add();
});

btnCash.addEventListener("click", function () {
  cash();
});

function add() {
  event.preventDefault();
  if (addInput.value === "") {
    alert("Please enter an amount.");
  } else {
    balance += parseFloat(addInput.value);
    let content = `Processing successful. Your Current balance ${balance} $.`;
    welcome.innerHTML = content;
    addInput.value = "";
  }
}

function cash() {
  event.preventDefault();
  if (addInput.value === "") {
    alert("Please enter an amount");
  } else {
    if (addInput.value <= balance) {
      balance -= parseFloat(addInput.value);
      welcome.innerHTML = `Processing successful.Your Current balance ${balance} $.`;
      addInput.value = "";
    } else {
      alert("Low balance");
    }
  }
}

btnExit.addEventListener("click", function () {
  firstPage.style.display = "block";
});
