// class DomSelector {
//   regestration_form = document.querySelector("#regestration_form");
//   addMany = document.querySelector("#add_many");
//   payMany = document.querySelector("#pay_many");
//   showBalance = document.querySelector("#show_balance");
//   err_place = document.querySelector("#err_message");
//   my_balance = document.querySelector("#my_balance");
//   noShow = document.querySelector(".noShow");

//   showDom() {
//     console.log("Fill dom element");
//   }
// }

// class BankAcount extends DomSelector {
//   balance = 0;
//   #userName = null;
//   cur_balance = null;

//   constructor(fullname, balance) {
//     super();

//     this.balance = balance;
//     this.#userName = fullname;
//   }

//   getRegister(name, age, event) {
//     if (!(name == "" || age == "")) {
//       event.target.style.display = "none";
//       this.noShow.style.display = "flex";
//       this.#userName = name;

//       this.monitor();
//     }
//     //   showErr(true, err_place, "Xahis edirik adivizi veya yasinizi girin");
//   }

//   get username() {
//     return this.#userName;
//   }

//   set username(u) {
//     if (u != "") {
//       this.#userName = u;
//     }
//   }

//   monitor() {
//     console.log("Hello");
//   }

//   increment(price) {
//     if (price >= 0) {
//       this.my_balance += price;
//       showBalance.innerHTML = "Balansivizi yenileyin";
//     } else {
//       alert("sizin qiymetiviz musbet eded olmalidir");
//     }
//   }
// }

// const customerIzzetM = new BankAcount("Izzet Memmedov", 200);

// console.log(customerIzzetM);

// customerIzzetM.regestration_form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let name = this.name_input.value;
//   let age = this.age_input.value;

//   customerIzzetM.getRegister(name, age, event);
// });

// customerIzzetM.addMany.addEventListener("click", function () {
//   let price = +prompt("Balansinizi artiramaq ucun qiymet daxil edin.");
//   customerIzzetM.increment(price);
// });

// const mirzeSBMW = new Bmw("Mirze", 30000);

class Car {
  carSpeed = 0;
  carLights = false;
  carFuel = 0;

  constructor(carType, carFuel) {
    this.carType = carType;
    this.carFuel = carFuel;
  }
}

// const car = new Car("Sedan", 30000);

class BMW extends Car {
  carName = "BMW";

  constructor(carType, carPrice, carFuel) {
    super(carType, carFuel);
    this.carPrice = carPrice;
  }

  // constructor(carType, carPrice, carFuel) {
  //   super();
  //   this.carType = carType;
  //   this.carPrice = carPrice;
  //   this.carFuel = carFuel;
  // }

  drive() {
    if (this.carFuel > 0) {
      this.carLights = true;
      this.carPrice++;
      this.carFuel--;
      console.log("Driving");
    } else {
      console.log("no gas");
    }
  }
  stop() {
    this.carLights = false;
  }
}

let myCar = new BMW("sedan", 30000, 100);

console.log(myCar);

/**
 *
 * @param {string} customerCode müştəri kodu
 * @param {number} beginninMeter sayğacın başlanğıc göstəricisi
 * @param {number} endingMeter sayğacın son göstəricisi
 * @param {number} totalUsage gallon ilə su miqdarı
 * @param {number} bill borc
 *
 * @returns {string} səliqəli mesaj hazırlayıb qaytarır
 */
const getAccurateMessage = (
  customerCode,
  beginninMeter,
  endingMeter,
  totalUsage,
  bill
) => {
  return `
  Customer code: ${customerCode}
  Beginning meter reading: ${beginninMeter}
  Ending meter reading: ${endingMeter}
  Gallons of water used: ${totalUsage} gallon
  Amount billed: $${bill}
  `;
};



/**
@param {number} num1
@param {number} num2
**/

function sum(num1,num2)