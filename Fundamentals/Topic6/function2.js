// function A(num1 = 0, isNew) {
//   num1 = 10;

//   // if(isNew === true)
//   if (isNew) {
//     return num1 + 5;
//   }

//   return num1 + 10;
// }

// console.log(A(null, false));

//? Spread
var arr1 = [1, 2, 3, 4, 5, 6];
// var arr3 = ["a", "b", "c", "d"];

// // var arr2 = arr1;

// // arr2[1] = 99;

// var arr2 = [...arr1, ...arr3, "Banana", "Apple"]; //Spread

// console.log("arr2", arr2);

//? Rest
// function sum(...nums) {
//   //rest
//   var total = 0;
//   // for (num of arguments) {
//   //   total += num;
//   // }

//   for (var num of nums) {
//     total += num;
//   }
//   console.log(total);
// }

// sum(10, 12, 14);

// function sum(n, n2, n3, n4) {
// function sum(...nums) {
//   console.log(nums);
// }

// sum(...arr1); //Spread 1,2,3,4

// Test.assertEquals(position("a"), "Position of alphabet: 1");
// Test.assertEquals(position("z"), "Position of alphabet: 26");
// Test.assertEquals(position("e"), "Position of alphabet: 5");

function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  // let letterIndex = alphabet.indexOf(letter);

  // let response = `Position of alphabet: ${letterIndex + 1}`;

  // return response;

  for (var i in [...alphabet]) {
    if (alphabet[i] === letter) {
      return `Position of alphabet: ${i + 1}`;
    }
  }

  //Write your own Code!
}

// var a = 0;
// var a = "";
// var a = false;
// var a = null;
// var a = undefined;

var a = isNaN("5");

console.log(position("a"));

function peopleWithAgeDrink(old) {
  switch (!isNaN(old)) {
    case old < 14:
      return "drink toddy";
    case old < 18:
      return "drink coke";
    case old < 21:
      return "drink beer";
    default:
      return "drink wicky";
  }
}

peopleWithAgeDrink("5");

function findAverage(array) {
  var sum = 0;

  if (array.length) {
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum / array.length;
  }

  return 0;
}

function findAverage(array) {
  if (array.length == 0) {
    return 0;
  }

  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

//? Invoked Functions
(function A(num) {
  console.log("Test1001", num);
})(5);

(function getBooks(author) {
  console.log("Books", author);
})("Dan Brown");

function getBooks() {
  console.log("books");
}

getBooks();
