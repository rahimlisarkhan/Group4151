//? Scope

//?Global
var a = 5;

function helper() {
  //?Function first

  //   var a = 3;

  var result = a + 6;

  function B() {
    //?Function second

    // var a = 2;

    var result = a + 9;

    return result;
  }

  B();

  return result;
}

helper();

if (true) {
  //?Block second
  var a = 1;
}

// var c = 6;
// var d = 3;

// function sum(num1, num2) {
//   //   var result = c + d;
//   var result = num1 + num2;

//   return result;
// }

// sum(c, d);

function test() {
  var e = 3.14;
}
