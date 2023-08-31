const cars = [
  {
    title: "Kia rio",
    price: 25000,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJStbxyygYj5SMYR7k5XX38DqV96usVz79h1oY9ihhFsda_GRMnWy_lF7s_k_AM8daGVo&usqp=CAU",
    desc: "This is a stylish and efficient car with advanced features.",
    link: "https://www.car.info/en-se/toyota",
  },
  {
    title: "Mercedes ",
    price: 32000,
    imgUrl:
      "https://bakurentacar.az/wp-content/uploads/2019/12/MercedesEclass-BestRent-28122019.jpg",
    desc: "A luxury car that offers both comfort and performance.",
    link: "https://www.car.info/en-se/toyota",
  },
  // ... Repeat this structure for 28 more cars ...
  {
    title: "Bmw X6",
    price: 18000,
    imgUrl:
      "https://derivates.kicker.de/image/upload/c_crop,x_19,y_496,w_6573,h_3697/w_1000,q_auto/hhp4va7ytvcfhab6qhis.jpg",
    desc: "An affordable and reliable car for everyday use.",
    link: "https://www.car.info/en-se/toyota",
  },
];

const myPromises = new Promise((resolse, reject) => {
  setTimeout(() => {
    if (!cars) {
      reject({ message: "Error not found data", status: 500 });
      return;
    }

    resolse({ status: 200, message: "OK", result: { data: cars } });
  }, 2000);
});
