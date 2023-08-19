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

// let isCash = true;

// if (window.location.hash === "#cash") {
//   addbalance();
//   return;
// }

// if (window.location.hash === "#withdraw") {
//   rmvBalance();
//   return;
// }

const data = {
  name: "Bestteller",
  children: ["#dasdsa", "#dasdasdsa"],
};

const atmData = {
  my_balance: 0,
  userName: "",
  cur_balance: null,
  showBalance: document.querySelector("#showBalance"),

  increment(price) {
    this.my_balance += price;
    this.showBalance.innerHTML = "Balansivizi yenileyin";
  },

  decrement(price) {
    if (this.my_balance <= 0 || this.my_balance - price < 0) {
      alert("Balansivizi yoxlayin");
    } else {
      this.my_balance -= price;
    }
    this.showBalance.innerHTML = "Balansivizi yenileyin";
  },

  getInfo(name, cur) {
    this.userName = name;
    this.cur_balance = cur;
  },

  balance() {
    this.showBalance.innerHTML = "Balans gosterildi";
    showErr(true, this.cur_balance, this.my_balance);
  },
};

regestration_form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = this.name_input.value;
  let age = this.age_input.value;

  if (!(name == "" || age == "")) {
    event.target.style.display = "none";
    document.querySelector(".noShow").style.display = "flex";

    atmData.getInfo(name, document.querySelector("#my_balance"));
  }
  showErr(true, err_place, "Xahis edirik adivizi veya yasinizi girin");
});

addMany.addEventListener("click", function () {
  let price = +prompt("Balansinizi artiramaq ucun qiymet daxil edin.");
  atmData.increment(price);
});

payMany.addEventListener("click", function () {
  let price = +prompt("Balansizinizda cixacaq meblegi yazin");

  atmData.decrement(price);
});

showBalance.addEventListener("click", function () {
  atmData.balance();
});

function showErr(bool, err_place, title) {
  if (bool) {
    err_place.innerHTML = title;
  }
  return false;
}
