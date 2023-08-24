"use strict";

let a = 5;

// function sum(num1:number,num2:number):boolean{

// }

// sum("5","6")

console.log(a);

// for (let i = 0; i < 10; i++) {}

const myObj = {
  name: "John",
  age: null,
  balance: 100,

  address: {
    name: "Nizami street",
    cordinate: 40132102,
  },
};

// const result1 = myObj.name;
// const result2 = myObj["name"];

// myObj.job = "Developer";

myObj["job-position"] = "Developer";

// console.log(myObj);

// const result3 = myObj["job-position"];

const findKey = (obj, findValue) => {
  const array = Object.entries(obj);

  for (let itemArr of array) {
    if (itemArr[1] === findValue) {
      return itemArr[0];
    }
  }
};

// const findkey = findKey(myObj, "Developer");

// console.log("findkey", findkey);

// const { name: username, age = 32, ...values } = myObj ?? {};
// const { name: username, age = 32, ...values } = myObj;
// const { balance, ...values } = myObj;

// delete myObj.balance;

// // console.log(values);

// // console.log("name", username);
// // console.log("age", age);

// function A({ name: username, age = 32 }, num2) {
//   //   const { name: username, age = 32 } = obj;
// }

// A(myObj, 11);

// const myarray = [4, 5, 6];

// const [x, y, z] = myarray;

// const useState = [
//   0,
//   function () {
//     //...
//   },
// ];

// const [count, setCount] = useState;

// setCount()

// console.log("x", x);
// console.log("y", y);
// console.log("z", z);

// const arr = [1, 2];

// const [x, y] = [1, 2];

// const {
//   address: { name: street },
// } = myObj;

// console.log(street);

Object.prototype.findKey = function (findValue) {
  const array = Object.entries(this);

  for (let itemArr of array) {
    if (itemArr[1] === findValue) {
      return itemArr[0];
    }
  }
};

console.log(myObj.findKey("Developer"));

// const myArray = [2, 5];
// console.log(myArray);

// console.log(Object);

const car = {
  marka: "Bmw",
  isNew: null,
};

console.log(car.findKey(null));

Array.prototype.uzunlugunDe = function () {
  return `Bu listin uzunlugu budur: ${this.length}`;
};

const myArray = [2, 5];

console.log("myArray", myArray.uzunlugunDe());
