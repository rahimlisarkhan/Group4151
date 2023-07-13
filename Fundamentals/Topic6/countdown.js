var userDate = prompt("Please enter your date! (For exam:'12/31/2024')");

function getCoundownTime(userTime) {
  var currentDate = new Date();
  var futureDate = new Date(userTime);

  var diffrentTime = futureDate.getTime() - currentDate.getTime();

  var days = Math.ceil(diffrentTime / 1000 / 60 / 60 / 24);

  return days;
}

var countDownDays = getCoundownTime(userDate);

console.log(countDownDays);

var employeTime = new Date();
var currentDate = new Date();

employeTime.setFullYear(2020, 11, 23);

employeTime.getTime();
