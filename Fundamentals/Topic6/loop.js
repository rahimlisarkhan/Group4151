// var fruits = ["Mango", "Avakado", "Pie", "Apple", "Pineapple", "Orange"];

// console.log("fruit:", fruits[0]);
// console.log("fruit:", fruits[1]);
// console.log("fruit:", fruits[2]);

// // var userNum = Number(prompt("Your number"));
// // var userStep = Number(prompt("Your step"));

// // //Loop
// // for (var count = 1; count <= userNum; count += userStep) {
// //   console.log("count:", count);
// // }

// // fruits.at(-1)

// var arrayUzunluq = fruits.length; // 6

// for (var index = 0; index < arrayUzunluq; index += 1) {
//   //   console.log("index:", index);

//   console.log("fruit:", fruits[index]);
// }

// var nums = [
//   101, 102, 103, 401, 105, 106, 107, 108, 229, 3310, 411, 512, 613, 314,
// ];

// for (var i = 0; i < nums.length; i++) {
//   console.log("index:", i);
//   console.log("item:", nums[i]);
// }

// var nums = [
//   101, 102, 103, 401, 105, 106, 107, 108, 229, 3310, 411, 512, 613, 314,
// ];

// for (var i = 0; i < nums.length; i++) {
//   console.log("index:", i);
//   console.log("item:", nums[i]);
// }

// var nums = [
//   101, 102, 103, 401, 105, 106, 107, 108, 229, 3310, 411, 512, 613, 314,
// ];

// var tamBolunenler = [];

// for (var i = 0; i < nums.length; i++) {
//   var numEl = nums[i];

//   if (numEl % 2 == 0) {
//     // console.log("numEl:", numEl);
//     tamBolunenler.push(numEl);
//   }
// }

// console.log(tamBolunenler);

var elements = ["Mango", "Kenan", 4, true, 4.5, null, "Ayxan"];
// var reverseElements = [];
// var strings = [];

// for (var i = 0; i < elements.length; i += 1) {
//   if (typeof elements[i] === "string") {
//     strings.push(elements[i]);
//   }
// }

// console.log(strings);

// for (var i = elements.length - 1; i >= 0; i--) {
//   //   console.log("i:", elements[i]);

//   reverseElements.push(elements[i]);
// }

// for (var el of elements) {
//   console.log("el:", el);
//   if (typeof el === "string") {
//   }
// }

// for (var i in elements) {
//   console.log("i:", elements[i]);

//   if (typeof elements[i] === "string") {
//   }
// }

var arr = ["BmwX5", "Mercedes", "Kia", "Vaz07", "BmwX6", "Bmwi8"];

// for (var num = arr.length; num > 0; num -= 1) {
//   var arrayinEllementi = arr[num];

//   if (arrayinEllementi.toLowerCase().includes("bmw")) {
//     console.log("arrayinEllementi", arrayinEllementi);
//   }
// }
// console.log("for of----");

// for (var el of arr) {
//   console.log("el:", el);
// }
// console.log("for of----");
// console.log("for in----");

// for (var i in arr) {
//   console.log("el:", arr[i]);
// }
// console.log("for in----");

// var i = 0;
// while (i < arr.length) {
//   var arrayinEllementi = arr[i];

//   if (arrayinEllementi.toLowerCase().includes("bmw")) {
//     console.log("arrayinEllementi", arrayinEllementi);
//   }

//   i += 1;
// }

// do {
//   console.log("i:", i);

//   i++;
// } while (i < 10);

// while (i < 10) {

//   console.log("i:", i);
//   i++;
// }

var qLength = +prompt("Nece eded fav nomreniz var?");
var favoriteNum = []; // "[17,4,3]"

// for (var count = 0; count < qLength; count++) {
//   var qNum = +prompt(`${count + 1}-ci nomrenizi daxil edin`);
//   console.log(count);

//   favoriteNum.push(qNum);
// }

var count = 0;

while (count < 3) {
  var qNum = +prompt(`${count + 1}-ci nomrenizi daxil edin`);

  favoriteNum.push(qNum);
  count++;
}

document.write("Hello");
// // alert(`sizin fav nomreleriniz: ${favoriteNum.join("-")}`);
