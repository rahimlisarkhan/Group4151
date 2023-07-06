//? Basic function

// function A() {
//   console.log("Hello World");

//   return 11;
// }

// // A = 15;

// var result = A();

// console.log(result);

// function sum() {
//   var a = 5;

//   var b = 3;

//   var total = a + b;

//   //   console.log(total);

//   return total;
// }

// var result = sum();

// console.log(result);

//? Arg function

// function sum(arg1,arg2)
// function sum(a,b)
// function sum(num1, num2) {
//   var total = num1 + num2;

//   return total;
// }

// var resul1 = sum(2, 7);
// var resul2 = sum(9, 45);
// var resul3 = sum(55, 35);

// console.log(resul1, resul2, resul3);

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = ["a", "b", "c", "d"];
// var arr3 = ["I", "II", true, false, null];
// var arr4 = [1, 24, "ds", "false"];

// console.log("-----");
// for (var el of arr1) {
//   console.log("el:", el);
// }
// console.log("-----");

// console.log("-----");
// for (var el of arr2) {
//   console.log("el:", el);
// }
// console.log("-----");

// console.log("-----");
// for (var el of arr3) {
//   console.log("el:", el);
// }
// console.log("-----");

// function loop(array, elName = "i") {
//   var info = `${elName}:`;

//   console.log("-----");
//   for (var el of array) {
//     console.log(info, el);
//   }
//   console.log("-----");
// }

// loop(arr1, "el");
// loop(arr2, "mix");
// loop(arr3, "item");
// loop(arr4);

// function calc(num1, num2, operator) {
//   var total;

//   //   if (operator === "+") {
//   //     total = num1 + num2;
//   //   } else if (operator === "-") {
//   //     total = num1 - num2;
//   //   }

//   //   return total;

//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       alert("Please enter correct operation");
//   }

//   //   switch (operator) {
//   //     case "+":
//   //       total = num1 + num2;
//   //       break;
//   //     case "-":
//   //       total = num1 + num2;
//   //       break;
//   //     case "*":
//   //       total = num1 + num2;
//   //       break;
//   //     case "/":
//   //       total = num1 + num2;
//   //       break;
//   //     default:
//   //       alert("Please enter correct operation");
//   //   }

//   //   return total
// }

// var result = calc(6, 9, "*");

// console.log(result);

// function pow(num, loopCount) {
//   var total = 1;

//   for (var i = 0; i < loopCount; i++) {
//     total *= num;
//     // total += num * num;
//   }

//   return total;
// }

// console.log(pow(2, 4));

//? EACAMP

function addThirdSymbol(word, count = 2, symbol = "-") {
  var strArr = word.split("");

  strArr.splice(count, null, symbol);

  var result = strArr.join("");

  return result;
}

console.log(addThirdSymbol("Abdulla", 5, "*")); //* EA-CAMP
// addThirdSymbol("Abdulla"); //* Ab-dulla
