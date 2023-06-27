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
// [3, 5, 6, 8].find((n) => n % 2 === 0); // 6
// [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
// [3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
// [1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
// [2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
// [2, 3, 4, 5].every((x) => x < 6); // true
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

console.log("arr:", arr);

// arr.reverse();

// arr[0];
