// var fruits = ["Mango", "Avakado", "Pie", "Apple", "Pineapple", "Orange"];

// // console.log("fruit:", fruits[0]);
// // console.log("fruit:", fruits[1]);
// // console.log("fruit:", fruits[2]);

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

for (var el of elements) {
  console.log("el:", el);
  if (typeof el === "string") {
  }
}

for (var i in elements) {
  console.log("i:", elements[i]);

  if (typeof elements[i] === "string") {
  }
}
