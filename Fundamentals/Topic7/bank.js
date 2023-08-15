function Bank(fullname, balance) {
  this.fullname = fullname;
  this.balance = balance;

  this.addBalance = function () {};

  this.show = function () {}; //...
}

const humayCard = new Bank("Humay", 600);

humayCard.addBalance(50);

humayCard.cash(400);
