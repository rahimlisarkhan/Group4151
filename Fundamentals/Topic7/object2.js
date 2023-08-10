const person = {
  name: "Filankes",
  jobRaiting: 4,

  position: "Fehle",
  //   araQatan: function () {},
};

// const result = Object.values(person); // ["Filankes",4,"Fehle"]

// const result = Object.keys(person); // ["name","jobRaiting","position"]
const result = Object.entries(person); //? [ ["name","Filankes"], ["jobRaiting",4], ["position","Fehle"] ]

console.log(result);

// for (key in person) {
//   console.log(person[key]);
//   person[key] = "Test4";
// }

// console.log(person);

// person.age = 37;

// delete person.jobRaiting;

// console.log(person);

// const person2Obj = {};

// person2Obj["name"] = "Test2";
// person2Obj["age"] = 34;

// console.log(person.hasOwnProperty("age"));

// if(person.hasOwnProperty("age")){

// }else{

// }

// var result = "[object Object]";
