// OOP Object Oriented Programing

//? Abctract
//? Interance
//? Encapsulation (private, public,protected)
//? Polmarism

//? SOLID

// class Animal {
//   fullname = null;
//   canli = null;
//   isEat = null;

//   constructor(animalName) {
//     this.fullname = animalName;
//   }

//   voice() {
//     const a = 5;

//     const result = `${this.fullname}: ${a}`;

//     console.log(result);
//   }
// }

// // const animal = new Animal("dasdasdas")

// class WaterAnimal extends Animal {
//   uzmek = null;

//   constructor(name1, uzmek) {
//     super();

//     this.fullname = name1;
//     this.uzmek = uzmek;
//     // super(name1);
//   }

//   dombalaqAsmaq() {
//     console.log("Asdi dombalaq");
//     // super.voice();
//     this.voice();
//   }
// }

// class Memeliler extends WaterAnimal {
//   neferAlmaqCiyer = null;

//   constructor(name, uz, nef) {
//     super();
//     this.fullname = name;
//     this.uzmek = uz;
//     this.neferAlmaqCiyer = nef;
//   }

//   parasutdenTullanmaq() {}
// }

// class MemeliOlmayanlar extends WaterAnimal {
//   nefesAlmaqQelseme = null;

//   constructor(name, uz, nef) {
//     super();
//   }
// }

// const balinaM = new Memeliler("Balina", true, true);

// console.log(balinaM);

// const baliqAnimal = new WaterAnimal("Balina");

// baliqAnimal.voice();
// baliqAnimal.dombalaqAsmaq();

// console.log("baliqAnimal", baliqAnimal);

class Numbers {
  #PI = null;
  _fullname = null;

  constructor(pi, f) {
    this.#PI = pi;
    this._fullname = f;
  }

  start() {
    this.#PI = 44;
  }
}

class SingleNumbers extends Numbers {
  #pass = null;

  constructor(full) {
    super();
    this._fullname = full;
  }

  voice() {
    this._fullname;
  }

  set username(fl) {
    if (typeof fl !== "string" && !fl) {
      alert("Invalid value!");
      return;
    }
    this._fullname = fl;
  }

  get username() {
    return this._fullname;
  }

  get password() {
    return this.#pass;
  }

  set password(p) {
    if (p.length < 8) {
      return;
    }

    this.#pass = p;
  }
}

const mathResult = new SingleNumbers("School numbers");

mathResult.username = "test";

console.log(mathResult.username);
