console.log(window);

// window.addEventListener("mousemove",function(){

// })

// function showPokemon() {
//   if (window.innerWidth < 500) {
//     alert("Please you have to enter only PC");
//     return;
//   }
// }

// console.log(window.screen);
// console.log(window.location);

async function showBattery() {
  const battery = await window.navigator.getBattery();

  const result = battery.level * 100 + "%";

  return result;
}

showBattery().then((batery) => {
  const bateryTool = document.querySelector(".progress-bar");
  bateryTool.style.width = batery;
  bateryTool.innerHTML = batery;
  console.log(batery);
});

// const isTodoPage = window.location.href.includes("todo.html");

// todoSend.addEventListener("click", function () {
//   if (isTodoPage) {
//     alert("");
//   }

//   window.location.reload();

//   //   window.localStorage
//   //   window.localStorage
// });

// function alertForFigma() {
//   if (window.screen.width > 1500) {
//     alert("Carefull! Your screen is big");
//   }
// }

// alertForFigma();
