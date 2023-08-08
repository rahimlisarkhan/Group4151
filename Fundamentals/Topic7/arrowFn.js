// function A(n) {

// }

const A = function (n) {
  return n + 5;
};

const C = (a, b) => {
  let num = 0;
  if (typeof a === "string") {
    num = parseInt(a);
    return;
  }

  return num + b;
};

const B = (n, d) => n + 5 + d;

const D = (n, d) => n + d;

var arr = [];

arr.map(function (item, index) {
  return `<div>${index + 1}. ${item} </div>`;
});

arr.map(
  (item, index) => `<div>${index + 1}. ${item} 
<span> </span>
</div>`
);

arr.sort(function (a, z) {
  if (z - a) {
    return 1;
  }

  return -1;
});

arr.sort((a, z) => z - a);

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// var a = sum(9); //

// var b = a(4); // 13

const result = sum(9)(4)(2); // 13

(function () {
  return 5 + 6;
})();

function total(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

// const total = (num1) => {
//   return (num2) => {
//     return num1 + num2;
//   };
// };

// const total = (num1) => {
//   return (num2) => num1 + num2;
// };

const total = (num1) => (num2) => num1 + num2;

total(19)(3); //curuying

// hoc(Component)(data);

function T(a) {
  return function (b) {
    return a + b;
  };
}
