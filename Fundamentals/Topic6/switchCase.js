var month = prompt("Please enter your month index number");

if (month == 0) {
  alert("Jan");
} else if (month == 1) {
  alert("Feb");

  var time = prompt("");
} else if (month == 2) {
  alert("Mar");
} else if (month == 3) {
  alert("Apr");
} else if (month == 4) {
  alert("May");
} else if (month == 5) {
  alert("June");
} else {
  alert("Wrong month index");
}

switch (Number(month)) {
  case 0:
    alert("Jan");
    break;
  case 1:
    alert("Feb");
    break;
  case 2:
    alert("Mar");
    break;
  case 3:
    alert("Apr");
    break;
  case 4:
    alert("May");
    break;
  default:
    alert("Wrong month index!");
}
