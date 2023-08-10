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
