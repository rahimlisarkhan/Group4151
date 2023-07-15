//? Scope

// var a = 4;
let a = 4;

function test1() {
  var d = 4;
  // let d = 4;
  // const d = 4;

  function test5() {
    var z = 3;

    return z;
  }

  var resultTest5 = test5();

  return d + resultTest5;
  // a
}

// for(){
//   a
// }

//? Can be asiggned value
let f = 3;

f = 14;

let d = 3;

d = 11;

const PI = 3.14;

// PI = 12;

// const students = ["test", "test2"];

// let month = ["Jan", "Feb", "Mar"];

// console.log(window);

// var atestFn = () => {};

{
  // var test100 = 99;
  // const test100 = 99;
  let test100 = 99;
}

// console.log("test100", test100);

// for (var i = 0; i < 5; i++) {
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("kenarda", i);

var outerFunction = function () {
  var x = 5;

  var nestedFunction = function () {
    var y = 7;

    // What will this print? (x = 5)
    console.log("X: " + x);

    // What will this print? (y = 7)
    console.log("Y: " + y);

    var z = 10;
    // What will this print? (z = 10)
    return "Z (inside): " + z;
  };

  // return [2, 3];
  var result = nestedFunction;
  return result;
};

var myFunction = outerFunction;

console.log(myFunction());

// What will this print? (z is undefined)
// console.log("Z (outside): " + z);

function twotop() {
  function two(a) {
    alert("Two: " + a);
  }

  two(a);

  var a = 13;

  return "somthing";
}

// What will get alerted?
twotop();
