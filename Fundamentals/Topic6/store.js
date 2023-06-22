alert("Bazara xos gelibsiz!");

// var age = prompt("Nece yasiniz var?");

// var married = confirm("Evlisiz?");

// console.log("age:", age);
// console.log("married:", married);

var productName = prompt("Sizin mehsul adiniz?");
var productPrice = Number(prompt(`Bu ${productName} mehsulun qiymeti?`));
var productCount = Number(
  prompt(`Bu ${productName} mehsuldan nece eded aldizki?`)
);

var serviceFeedback = confirm("Xidmetden razi qaldinizmi?");

// const price = Number(productPrice);
// const count = parseInt(productCount);
// const price = +productPrice;
// const price = Number(productPrice);

var total = productPrice * productCount;

alert(`Siz bu ${productName} mehsula xerciviz ${total} qeder xerciniz cixdi`);

if (serviceFeedback === true) {
  console.log("Cox sagolun bizi secdiyiviz!");
} else {
  console.log("Xosva gelmir get basqa yerden al!!!");
}
console.log(total);

// console.log("productPrice:", price);
// console.log("productCount:", count);
