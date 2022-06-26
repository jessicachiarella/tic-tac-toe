let gameState = ["", "", "", "", "", "", "", "", ""];
const playerX = "X";
const playerO = "O";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
const board = document.getElementById("board");
const onePlayer = document.getElementById("oneButton");
const twoPlayer = document.getElementById("twoButton");
const resetButton = document.getElementById("reset_button");

document.getElementById("playerTwo").hidden = true;
document.getElementById("Computer").hidden = false;

onePlayer.addEventListener("click", oneClick);
function oneClick() {
  document.getElementById("playerTwo").hidden = true;
  document.getElementById("Computer").hidden = false;
}

twoPlayer.addEventListener("click", twoClick);
function twoClick() {
  document.getElementById("playerTwo").hidden = false;
  document.getElementById("Computer").hidden = true;
}

oneName.addEventListener("keypress", keyPress);
function keyPress(event) {
  if (event.key === "Enter" && oneName.value.length > 0) {
    playerOne.innerText = oneName.value;
  }
}
twoName.addEventListener("keypress", keyPressTwo);
function keyPressTwo(event) {
  if (event.key === "Enter" && twoName.value.length > 0) {
    playerTwo.innerText = twoName.value;
  }
}

board.addEventListener("click", onBoardClick);
function onBoardClick(event) {
  let clickedTile = event.target;
  if (clickedTile.innerText != "") {
    return;
  }
  if (gameState.CurrentPlayer === playerX) {
    clickedTile.innerText = "X";
    let id = clickedTile.id;
    gameState[id] = "X";
    gameChecker();
    gameState.CurrentPlayer = playerO;
  } else {
    clickedTile.innerText = "O";
    let id = clickedTile.id;
    gameState[id] = "O";
    gameChecker();
    gameState.CurrentPlayer = playerX;
  }
}

resetButton.addEventListener("click", startGame);
function startGame() {
  document.getElementById("0").innerText = "";
  document.getElementById("1").innerText = "";
  document.getElementById("2").innerText = "";
  document.getElementById("3").innerText = "";
  document.getElementById("4").innerText = "";
  document.getElementById("5").innerText = "";
  document.getElementById("6").innerText = "";
  document.getElementById("7").innerText = "";
  document.getElementById("8").innerText = "";

  gameState = ["", "", "", "", "", "", "", "", ""];

  let firstPlayer = Math.random();
  if (firstPlayer < 0.5) {
    return "X";
  } else {
    return "O";
  }
  let CurrentPlayer = firstPlayer;
}

function gameChecker() {
  let roundWon = false;
  for (let i = 0; i < 8; i++) {
    const winCheck = winningCombinations[i];
    let a = gameState[winCheck[0]];
    let b = gameState[winCheck[1]];
    let c = gameState[winCheck[2]];

    if (a === "" || b === "" || c === "") {
      roundWon = false;
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
    }
    if (roundWon) {
      alert("We have a winner!");
    } else {
      let draw = !gameState.includes("");
      if (draw) {
        alert("It's a draw!");
        startGame();
      }
    }
  }
}
