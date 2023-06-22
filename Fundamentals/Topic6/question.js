alert("Oyuna xos geldiz!!!");

var start = confirm("Oyun baslasinmi?");

var points = 0;

if (start) {
  var q1 = prompt("Goy uzunun rengi?");

  if (q1 === "mavi" || q1 === "goy") {
    points += 10;

    alert(`Tebrikler ${points} xal qazandiniz!`);

    var q2 = prompt("Ucbucagin bucaqlarinin cemi nece derecedir?");

    if (q2 == 180) {
      points += 10;
      alert(`Tebrikler ${points} xal qazandiniz!`);
    } else {
      alert(`Tessuff ki 2ci sualdaca yandiz!.Xal:${points}`);
    }
  } else {
    alert("Tessuff ki ilk sualdaca yandiz!");
  }
} else {
  alert("Yene sizi gozleyirik!!!");
}
