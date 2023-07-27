var pokemons = ["e", "w", "f"];
var player1Score = 0;
var player2Score = 0;

console.log("playerFirstScore", playerFirstScore);
console.log("playerSecondScore", playerSecondScore);

function randomPokemonSelector(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length); //0.42343423

  return arr[randomNumber];
}

function showPokemon(p1, p2) {
  playerFirstScore.innerText = `Score: ${player1Score}`;
  playerSecondScore.innerText = `Score: ${player2Score}`;

  playerFirstPokemon.src = `./assets/images/${p1}.jpg`;
  playerSecondPokemon.src = `./assets/images/${p2}.jpg`;
}

function startGame(e) {
  var firstPlayerChoose = e.key;

  if (!pokemons.includes(firstPlayerChoose)) {
    alert("Please correct choose item: 'e,w,f'");
    return;
  }

  var compPlayerChoose = randomPokemonSelector(pokemons);

  console.log("firstPlayerChoose", firstPlayerChoose);
  console.log("compPlayerChoose", compPlayerChoose);

  if (
    (firstPlayerChoose === "e" && compPlayerChoose === "w") ||
    (firstPlayerChoose === "w" && compPlayerChoose === "f") ||
    (firstPlayerChoose === "f" && compPlayerChoose === "e")
  ) {
    console.log("You WIN");
    console.log("COMP LOSe");

    player1Score += 1;

    showPokemon(firstPlayerChoose, compPlayerChoose);
  } else if (
    (firstPlayerChoose === "e" && compPlayerChoose === "e") ||
    (firstPlayerChoose === "w" && compPlayerChoose === "w") ||
    (firstPlayerChoose === "f" && compPlayerChoose === "f")
  ) {
    console.log("You DRAW");

    showPokemon(firstPlayerChoose, compPlayerChoose);
  } else {
    console.log("You LOSe");
    console.log("COMP WIN");
    player2Score += 1;
    showPokemon(firstPlayerChoose, compPlayerChoose);
  }

  console.log("player1Score", player1Score);
  console.log("player2Score", player2Score);
}

window.addEventListener("keyup", startGame);
