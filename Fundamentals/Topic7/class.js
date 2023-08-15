const myObj = {
  name: "Test",

  start: function () {},
};

class Cat {
  //   name = null;
  //   age = null;
  //   isPeyvend = false;

  static fullname = "John Doe";

  constructor(userCatName, userCatAge, isPeyvend, color, legCount) {
    if (!userCatAge || !userCatName) {
      return;
    }
    this.fullname = userCatName;
    this.age = userCatAge;
    this.isPeyvend = isPeyvend;
  }

  voice() {
    console.log(`${this.name} says: Meow Meow`);
  }

  peyvend(p) {
    if (typeof p !== "boolean") {
      alert("Please enter only boolean value");
      return;
    }

    this.isPeyvend = p;
    this.voice();
  }

  static now() {
    console.log("Sleeping..Zzzz.");
  }
}

// Cat.fullname

// const johnSCat = new Cat("Mestan", 2);

// console.log(johnSCat);
// const johnSCat = new Cat();

// const mustafaSCat = new Cat("Pisiy", 4, "black", 3);

// const date = new Date();

// console.log(Cat.fullname);

// Date.now();

// mustafaSCat.peyvend(true);

// console.log(johnSCat);
// console.log(mustafaSCat);
