//? Call apply bind

const obj1 = {
  fullname: "Jeyhun",
  age: 19,

  getName: function () {
    console.log("this", this.fullname);
  },
};

const obj2 = {
  age: 45,

  getAge: function (a, b, c) {
    console.log("a b c", a, b, c);

    console.log("this", this.age);

    return "Test" + this.age;
  },
};

// obj2.getAge.call(obj1, 12, 13, 14); //19
// obj2.getAge.apply(obj1, [12, 13, 14]); //19
const getNewAge = obj2.getAge.bind(obj1); //19

console.log(getNewAge);

// getNewAge(12, 13, 14);

// const result = obj2.getAge.call(obj1);
// const result = obj2.getAge.apply(obj1, [12]);

// console.log(result);

// obj2.getAge(7, 8, 9); //45

// function getFullname() {
//   console.log(this);
// }

// getFullname.call(obj1);

// const $ = function () {
//   document.querySelector.call(this, arguments);
// };

// class A extends Alfa {
//   constructor(a) {
//     super();
//     this.a = a;
//   }

//   getMonitor() {
//     return this.a;
//   }
// }

// class B extends Beta {
//   a = "Test6";

//   constructor(b) {
//     super();
//     this.v = v;
//   }

//   getBreak() {
//     return this.a;
//   }
// }

// const myA = new A("Filling...");

// const myB = new B("Creating...");

// // myA.getMonitor();

// myA.getMonitor.call(myB, 4, 5, 6, 7);
// myA.getMonitor.apply(myB, [2, 3, 4, [true]]);

var array = [
  {
    id: 1,
    label: "Satisfied customers",
    children: [
      {
        id: 2,
        label: "Good food",
        icon: "restaurant_menu",
        children: [
          { id: 3, label: "Quality ingredients" },
          { id: 4, label: "Good recipe" },
        ],
      },
      {
        id: 5,
        label: "Good service",
        icon: "room_service",
        children: [
          { id: 6, label: "Prompt attention" },
          { id: 7, label: "Professional waiter" },
        ],
      },
      {
        id: 8,
        label: "Pleasant surroundings",
        icon: "photo",
        children: [
          {
            id: 9,
            label: "Happy atmosphere (not tickable)",
            tickable: false,
          },
          {
            id: 10,
            label: "Good table presentation (disabled node)",
            disabled: true,
          },
          {
            id: 11,
            label: "Pleasing decor",
          },
        ],
      },
      {
        id: 12,
        label: "Extra information (has no tick)",
        noTick: true,
        icon: "photo",
      },
      {
        id: 13,
        label: 'Forced tick strategy (to "strict" in this case)',
        tickStrategy: "strict",
        icon: "school",
        children: [
          {
            id: 14,
            label: "Happy atmosphere",
          },
          {
            id: 15,
            label: "Good table presentation",
          },
          {
            id: 16,
            label: "Very pleasing decor",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Satisfied customers",
    children: null,
  },
];
