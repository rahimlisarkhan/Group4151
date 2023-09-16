// function corekal() {
//   console.log("Eve gelende corek al!");
// }

// function kartofal() {
//   console.log("Eve gelende kartof al!");
// }

// const a = setTimeout(corekal, 3000);
// const b = setTimeout(kartofal, 3000);
// // const c = setTimeout(corekal, 3000);

// clearTimeout(b);

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

//? Timeout

let a;
let seconds = 0;

let pausa = false;

function clock() {
  seconds += 1;

  const min = Math.floor(seconds / 60);

  const qaliqsaniye = seconds - min * 60;

  const result = `${min < 10 ? "0" + min : min} : ${
    qaliqsaniye < 10 ? "0" + qaliqsaniye : qaliqsaniye
  }`;

  document.querySelector("#clock").innerHTML = result;

  console.log(result);
}

document.querySelector("#play").addEventListener("click", function (e) {
  pausa = pausa ? false : true;

  if (pausa) {
    clearInterval(a);
    e.target.innerHTML = "Play";

    a = setInterval(clock, 1000);
  } else {
    clearInterval(a);
    e.target.innerHTML = "Pause";
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(a);
});
