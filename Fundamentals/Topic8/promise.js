const cars = [
  {
    title: "Kia rio",
    price: 25000,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJStbxyygYj5SMYR7k5XX38DqV96usVz79h1oY9ihhFsda_GRMnWy_lF7s_k_AM8daGVo&usqp=CAU",
    desc: "This is a stylish and efficient car with advanced features.",
  },
  {
    title: "Mercedes ",
    price: 32000,
    imgUrl:
      "https://bakurentacar.az/wp-content/uploads/2019/12/MercedesEclass-BestRent-28122019.jpg",
    desc: "A luxury car that offers both comfort and performance.",
  },
  // ... Repeat this structure for 28 more cars ...
  {
    title: "Bmw X6",
    price: 18000,
    imgUrl:
      "https://derivates.kicker.de/image/upload/c_crop,x_19,y_496,w_6573,h_3697/w_1000,q_auto/hhp4va7ytvcfhab6qhis.jpg",
    desc: "An affordable and reliable car for everyday use.",
  },
];

// Accessing car data example
console.log(cars[0].title); // Outputs: Car Model 1
console.log(cars[1].desc); // Outputs: A luxury car that offers both comfort and performance.

function A(gel) {
  // if (gel) {
  //   B(true);
  // }

  return 150;
}

function B() {
  // if (gel) {
  //   C();
  // }
}

// function C() {}

// A(true);

// B();

// A()
// B()

const promisinCallbacki = (resolve, reject) => {
  const herseyYolunda = false;

  if (herseyYolunda) {
    const result = A();
    resolve({ message: "OK", status: 200, result });
    return;
  }

  reject({ error: "Bizi vurdu esitmezliye" });
};

const myAPromise = new Promise(promisinCallbacki);

myAPromise
  .then((response) => {
    console.log("response", response);
    B();
  })
  .catch((err) => {
    console.log(err);
  });

// const mySuSirasiPromise = new Promise((response, reject) => {
//   const marketeDusdu = false;

//   //   if (marketeDusdu) {
//   //     response({ message: "Marketde hersey var" });
//   //   } else {
//   //     reject({ error: "Getdim gordum market baglidi!" });
//   //   }

//   setTimeout(() => {
//     if (marketeDusdu) {
//       response({ message: "Marketde hersey var" });
//     } else {
//       reject({ error: "Getdim gordum market baglidi!" });
//     }
//   }, 3000);
// });

// mySuSirasiPromise
//   .then((data) => {
//     console.log("data", data);

//     renderContent(data);
//     return "Ela!";
//   })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((error) => {
//     console.log("err", error);

//     alert(error.error);
//   })
//   .finally(() => {
//     console.log("Emeliyyat bitdi!");
//   });

// function renderContent(d) {
//   //   el.innerHTML = "...";
//   console.log("B called..");
// }
