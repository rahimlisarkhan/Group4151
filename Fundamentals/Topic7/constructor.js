function Car(paramName, paramMarka) {
  this.name = paramName;
  this.marka = paramMarka;

  this.start = function () {
    console.log(`${this.name} started`);
  };
}

const car1 = new Car("Mercedes", "A-class");
const car2 = new Car("Bmw", "X6");

car2.start();

// console.log("car1", car1);
// console.log("car2", car2);

// const car1 = {
//   name: "",
//   marka: "",

//   start: function () {},
// };

// const car2 = {
//   name: "",
//   marka: "",

//   start: function () {},
// };

// let myObj = {};

// myObj.name = "Test1";
// myObj.age = 45;
