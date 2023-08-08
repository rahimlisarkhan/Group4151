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
};

// const car2 = { ...car };

car.getRandomSpeed();
car.getRandomSpeed();
car.getRandomSpeed();
const result = car.getRandomSpeed(); //34

car.monitor("John");

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

el.style.backgroundColor = car.light ? "yellow" : "white";
console.log(car);
