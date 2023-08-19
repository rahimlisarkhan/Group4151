//? JSON; // JS Object National
var student1 = ["Mustafa", "Mustafayev", 36, 1987, []];

// student[1]

const student = {
  name: "Mustafa",
  surname: "Mustafayev",
  age: 36,
  "1bornIn": 1987,
  married: {
    name: "X",
    age: 0,
    parent: [],
    "job-position": "Manager",
  },

  children: [
    {
      name: "Mehri",
      age: 8,
    },
  ],
};

// const result = student.children[0].name;
// const result = student.married.parent;
// const result = student.married["job-position"];

el.innerHTML = result;
// const result = student["1bornIn"];

console.log(result);

const restuarants = [
  {
    name: "Papa John's",
    address: [
      { country: "Spain", street: "" },
      { country: "Azerbaijan", street: "Nizami 45" },
    ],
  },
  {
    name: "Mc Donald's",
    address: [
      { country: "Spain", street: "" },
      { country: "Azerbaijan", street: "Nizami 45" },
    ],
  },
];

var myArray = [
  {
    name: "chicken pizza",
    vegan: false,
    oil: true,
    cheese: true,
    baked: true,
    fish: false,
    rice: false,
  },
  {
    name: "sushi",
    vegan: true,
    oil: false,
    cheese: false,
    baked: false,
    fish: true,
    rice: true,
  },
  {
    name: "Xan pulovu",
    vegan: false,
    oil: true,
    cheese: false,
    baked: true,
    fish: false,
    rice: true,
  },
  {
    name: "paxlalı pulovu",
    vegan: true,
    oil: true,
    cheese: false,
    baked: true,
    fish: false,
    rice: true,
  },
];

const person = {
  fullname: "Izzet Memmedov",
  age: 35,
  marriage: true,
  children: 2,
  job: "Developer",
  salary: 15000,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
  hobbies: [{ name: "Coding" }, { name: "Fitness" }, { name: "Swimming" }],

  wife: [{ name: "X", age: 28, job: "Designer", sallary: 2000 }],
  children: [
    { name: "X", age: 4 },
    { name: "X", age: 7 },
    { name: "X", age: 1 },
  ],
};

console.log(person.cars);
console.log(person.cars[1].models[2]);
console.log(person.wife[0]);
console.log(person.children[0]);

const people = [
  {
    fullname: "Izzet Memmedov",
    age: 35,
    marriage: true,
    children: 2,
    job: "Developer",
    salary: 15000,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
    hobbies: [{ name: "Coding" }, { name: "Fitness" }, { name: "Swimming" }],

    wife: [{ name: "X", age: 28, job: "Designer", sallary: 2000 }],
    children: [
      { name: "X", age: 4 },
      { name: "X", age: 7 },
      { name: "X", age: 1 },
    ],
  },
  {
    fullname: "Kenan Memmedov",
    age: 35,
    marriage: true,
    children: 2,
    job: "Developer",
    salary: 15000,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
    hobbies: [{ name: "Coding" }, { name: "Fitness" }, { name: "Swimming" }],

    wife: [{ name: "X", age: 28, job: "Designer", sallary: 2000 }],
    children: [
      { name: "X", age: 4 },
      { name: "X", age: 7 },
      { name: "X", age: 1 },
    ],
  },
  {
    fullname: "Xalide Memmedova",
    age: 35,
    marriage: true,
    children: 2,
    job: "Developer",
    salary: 15000,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
    hobbies: [{ name: "Coding" }, { name: "Fitness" }, { name: "Swimming" }],

    wife: [{ name: "X", age: 28, job: "Designer", sallary: 2000 }],
    children: [
      { name: "X", age: 4 },
      { name: "X", age: 7 },
      { name: "X", age: 1 },
    ],
  },
];
