"use strict";

const pokemons = ["e", "w", "f"];

let player1Score = 0;
let player2Score = 0;

// let dubbleKey = "ctrl p"

let isRemoteControl = false;

// console.log(randomElement);

function isWin(isPlayer1Win) {
  playerFirstTitle.innerHTML = isPlayer1Win ? "WIN" : "LOSE";
  playerSecondTitle.innerHTML = !isPlayer1Win ? "WIN" : "LOSE";

  playerFirstTitle.classList.remove(
    `text-${isPlayer1Win ? "danger" : "success"}`
    // isPlayer1Win ? "izeetin-red" : "izeetin-green"
  );

  playerFirstTitle.classList.add(`text-${isPlayer1Win ? "success" : "danger"}`);

  //second
  playerSecondTitle.classList.add(
    `text-${!isPlayer1Win ? "success" : "danger"}`
  );

  playerSecondTitle.classList.remove(
    `text-${!isPlayer1Win ? "danger" : "success"}`
  );
}

function showPokemon(p1, p2) {
  playerFirstScore.innerText = `Score: ${player1Score}`;
  playerSecondScore.innerText = `Score: ${player2Score}`;

  playerFirstPokemon.src = `./assets/images/${p1}.jpg`;
  playerSecondPokemon.src = `./assets/images/${p2}.jpg`;
}

function startGame(e) {
  if (isRemoteControl) return;

  const firstPlayerChoose = e.key;

  // dubbleKey += firstPlayerChoose + " "

  if (!pokemons.includes(firstPlayerChoose)) {
    alert("Please correct choose item: 'e,w,f'");
    return;
  }

  const compPlayerChoose = randomElement(pokemons);

  console.log("firstPlayerChoose", firstPlayerChoose);
  console.log("compPlayerChoose", compPlayerChoose);

  if (
    (firstPlayerChoose === "e" && compPlayerChoose === "w") ||
    (firstPlayerChoose === "w" && compPlayerChoose === "f") ||
    (firstPlayerChoose === "f" && compPlayerChoose === "e")
  ) {
    console.log("You WIN");
    console.log("COMP Lose");

    player1Score += 1;

    isWin(true);
    showPokemon(firstPlayerChoose, compPlayerChoose);
  } else if (
    (firstPlayerChoose === "e" && compPlayerChoose === "e") ||
    (firstPlayerChoose === "w" && compPlayerChoose === "w") ||
    (firstPlayerChoose === "f" && compPlayerChoose === "f")
  ) {
    console.log("You DRAW");

    showPokemon(firstPlayerChoose, compPlayerChoose);
  } else {
    console.log("You Lose");
    console.log("COMP WIN");
    player2Score += 1;
    isWin();
    showPokemon(firstPlayerChoose, compPlayerChoose);
  }

  // console.log("player1Score", player1Score);
  // console.log("player2Score", player2Score);
}

window.onkeydown = startGame;

// window.navigator.getBattery().then((data) => {
//   console.log(data);
// });

function isPalindrome(x) {
  if (!x) return true;

  let str = x.toLowerCase();
  let reversestr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
  }

  if (reversestr == str) {
    return true;
  }

  return false;
}
