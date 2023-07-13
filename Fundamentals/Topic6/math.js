//? Math

// var result = Math.PI;

// var num = -101;
// var num = 101;
// var nums = [5, 14, 2, 3, 101, 4];

// var result = Math.abs(num);
// var result = Math.min(5, 14, 2, 3, 101, 4);
// var result = Math.max(5, 14, 2, 3, 101, 4);
// var result = Math.max(...nums);
// var result = Math.random() * 100;
// var result = Math.floor(3.7); // 3
// var result = Math.round(3.6); // 4
// var result = Math.round(3.4); // 3
// var result = Math.ceil(3.1); // 4
// var result = Math.pow(2, 4);

// console.log(result);

var studets = ["Ceyhun", "Mirze", "Ayten", "Ali", "Humay", "Rufet", "Murad"];
var cars = ["Bmw", "Mercedes", "Kia", "Honda"];

// var randomNum = Math.random() * 5;

function randomElement(arr) {
  var roundIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[roundIndex];

  //    arr.splice(roundIndex, 1);

  return randomElement;
}

var randomName = randomElement(studets);
var randomCar = randomElement(cars);

console.log(
  `Hormetli ${randomName}! Siz ${randomCar} masinini qazanmaq sansi elde etdiniz.Linke click`
);

const randomBetweenNumbers = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

randomBetweenNumbers(25, 55);
