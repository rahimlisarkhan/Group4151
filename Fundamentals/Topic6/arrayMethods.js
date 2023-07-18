// var arr = [1, 2, 3, [8, 7, ["3", "0"]], [4, 5]];
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.push(4); // [1, 2, 3, 4]
// arr.pop(); // [1, 2]
// arr.shift(); // [2, 3]
// arr.unshift(0); // [0, 1, 2, 3]
// ["a", "b"].concat("c"); // ['a', 'b', 'c']
// ["a", "b", "c"].join("-"); // a-b-c
// ["a", "b", "c"].slice(1); // ['b', 'c']
// ["a", "b", "c"].indexOf("b"); // 1
// ["a", "b", "c"].includes("c"); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[3, 4, 8, 6].forEach((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
// [2, 4, 3, 7].sort((a, b) => a - b); // [2,3,4,7]
// [2, 3, 4, 5,8].every((x) => x < 6); // true
// [3, 5, 6, 8].some((n) => n > 6); // true
// [1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
// [3, 5, 7, 8].at(-1); // 7
// [3, 5, 7, 8].at(-1); // 7

// var newArray = arr.flat(3);

// var newArray = arr.slice(2, 7);
// var newArray = arr.splice(1, null, "Pie");
// var newArray = arr.splice(1, null, "Banana", "Pie");
// var newArray = arr.splice(1, 1);

// newArray.push(1001);
// console.log("arr", arr);

var num = 3;
var hasEl = arr.indexOf(num);

if (hasEl !== -1) {
  arr.splice(hasEl, 1);
  arr.splice(hasEl, null, "smile");
} else {
  arr.push(num);
}

// arr.reverse();

// arr[0];

function useElement(item, index, list) {
  // function useElement(_, i) {
  // console.log("------");
  // console.log("a:", a);
  // console.log("b:", b);
  // console.log("c:", c);
  // console.log("------");

  // if (item < 6) {
  // if (item !== 6) {
  if (index > 2) {
    return true;
  }

  return false;
}

// var arr1 = [3, 5, 0, 6, 8, 0, 11, 0];
var arr1 = [3, 5, 1, 6, 8, 1, 11, 1];

// var findEl = arr1.find(useElement); //* 8
// var findEl = arr1.findIndex(useElement); //* 3
// var findEl = arr1.filter(function (item, index) {
//   return index > 2;
// }); //* [3,5,8]

// var findEl = arr1.reduce(function (sum, num) {
//   console.log("sum:", sum);
//   console.log("num:", num);

//   return sum + num;
// }, 15);

// var newArray = arr1.map(function (item, index, list) {
//   var newText = `<div><h1>this item is ${item}</h1> <span> id: ${index} <span></div>`;

//   return newText;
// }, 15);

// var newArray = arr1.map(function (item) {
//   // return item ** 2;
//   return item / 2;
// });

// var newArray = [];

// arr1.forEach(function (item) {
//   // return item ** 2;
//   newArray.push(item ** 2);
// });

// var newArray = arr1
//   .filter(function (item, index) {
//     return item !== 0;
//   })
//   .map(function (item) {
//     return "filter" + item ** 2;
//   });

// var newArray = arr1.filter(function (item, index) {
// return item.toLowerCase().includes("an");
// });

// console.log(newArray);

// console.log("newArray:", newArray);

// var isEmpthField = arr1.some(function (item, index) {
//   return item > 10;
// });

// var isEmpthField = arr1.every(function (item, index) {
//   return item >= 1;
// });

// var name = "Cey hun 1";
// var name = "Ceyhun1";

// var isResult = name.split("").every(function (s) {
//   return s !== " ";
// });

// console.log(isResult);

// console.log(isEmpthField);

// var newArray = arr1.sort(function (a, z) {
//   // if (item1 > item2) {
//   // if (a > z) {
//   //   return 1;
//   // }
//   // return -1;

//   return z - a;
// });

// console.log("newArray:", newArray);

// [1, 3, 5];

var langs = [
  ["english", "Welcome"],
  ["turkish", "Merhaba"],
];

b = 5;

console.log("b", b);

function translate(str) {
  let arr = [
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"],
  ];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].startsWith(str)) {
      return arr[i][1];
    }
  }
}

console.log("result", translate("en"));
