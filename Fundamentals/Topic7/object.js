//? OBJECT

var name = "A-class";

function start() {}

const car = {
  name: "A-class",
  isNew: false,
  marka: "Mercedes",
  speed: 0,
  randomSpeed: 0,
  light: false,

  start: function () {
    this.speed += 10;

    this.monitor();
  },

  monitor: function (driver = "Driver") {
    const info = `${driver} ${this.marka} | ${this.name} - ${this.speed}`;

    console.log(info);
  },

  break: function () {
    this.speed -= 5;
  },

  toggleLight: function () {
    const newValue = this.light ? false : true;
    this.light = newValue;
  },

  getRandomSpeed: function () {
    const randomS = Math.ceil(Math.random() * 40);
    console.log(randomS);
    this.speed += randomS;
    this.monitor();

    return randomS;
  },

  stop: function () {
    this.speed = 0;

    this.monitor();
  },

  // log: () => {
  log: function () {
    console.log("this", this);

    // const thisContent = this;

    // const randomIndex = function(){
    // function randomIndex() {
    //   // console.log("randomIndex this", this);
    //   console.log("randomIndex thisContent", thisContent);
    //   thisContent.speed += 100;
    //   thisContent.monitor();
    // }

    const randomIndex = () => {
      console.log("randomIndex this", this);
      // this.speed += 100;
      // this.monitor();

      const randomIndexAll = () => {
        console.log("randomIndexAll", this);
      };
      randomIndexAll();
    };

    randomIndex();
  },
};

// const car2 = { ...car };

car.log();
// car.getRandomSpeed();
// car.getRandomSpeed();
// car.getRandomSpeed();
// const result = car.getRandomSpeed(); //34

// car.monitor("John");

// car.start();
// car.start();

// car.break();
// car.stop();

// car.getRandomSpeed();
// car.getRandomSpeed();
// car.getRandomSpeed();

// car.monitor();

// car.toggleLight();
// car.toggleLight();

// car2.monitor();

// el.style.backgroundColor = car.light ? "yellow" : "white";
// console.log(car);

// function A() {
//   console.log("A", this);
// }

// A();

// var myObj = {
//   name: "",

//   yell: function () {
//     this.name = "Star Powerup";

//     //this obj

//     var changeName = function (newName) {
//       //this window
//       this.name = newName;
//     };

//     changeName("Blue Shell"); // window.name = Blue Shell

//     console.log("example", this); // obj name =  Star Powerup
//   },

// };

// myObj.yell();

// const MyMath = {
//   PI: 3.1457378628738273,

//   randomNumber: function () {

//   },
// };

// MyMath.PI

// MyMath.randomNumber()
