class DomSelector {
  regestration_form = document.querySelector("#regestration_form");
  addMany = document.querySelector("#add_many");
  payMany = document.querySelector("#pay_many");
  showBalance = document.querySelector("#show_balance");
  err_place = document.querySelector("#err_message");
  my_balance = document.querySelector("#my_balance");
  noShow = document.querySelector(".noShow");

  showDom() {
    console.log("Fill dom element");
  }
}

class BankAcount extends DomSelector {
  balance = 0;
  #userName = null;
  cur_balance = null;

  constructor(fullname, balance) {
    super();

    this.balance = balance;
    this.#userName = fullname;
  }

  getRegister(name, age, event) {
    if (!(name == "" || age == "")) {
      event.target.style.display = "none";
      this.noShow.style.display = "flex";
      this.#userName = name;
    }
    //   showErr(true, err_place, "Xahis edirik adivizi veya yasinizi girin");
  }

  get username() {
    return this.#userName;
  }

  set username(u) {
    if (u != "") {
      this.#userName = u;
    }
  }

  increment(price) {
    if (price >= 0) {
      this.my_balance += price;
      showBalance.innerHTML = "Balansivizi yenileyin";
    } else {
      alert("sizin qiymetiviz musbet eded olmalidir");
    }
  }
}

const customerIzzetM = new BankAcount("Izzet Memmedov", 200);

console.log(customerIzzetM);

customerIzzetM.regestration_form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = this.name_input.value;
  let age = this.age_input.value;

  customerIzzetM.getRegister(name, age, event);
});

customerIzzetM.addMany.addEventListener("click", function () {
  let price = +prompt("Balansinizi artiramaq ucun qiymet daxil edin.");
  customerIzzetM.increment(price);
});

const mirzeSBMW = new Bmw("Mirze", 30000);
