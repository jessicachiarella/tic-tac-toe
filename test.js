//enter names and have them displayed
//check for wins or draws
//be told of a win or a draw
//if one player: see computer as opponent
//have computer make moves as if it were human

let gameState = ['', '', '', '', '', '', '', '', ''];
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
];
const onePlayer = document.getElementById("oneButton");
const twoPlayer = document.getElementById("twoButton");

document.getElementById("playerTwo").hidden = true;
document.getElementById("Computer").hidden = false;

onePlayer.addEventListener("click", oneClick);
function oneClick(event){
document.getElementById("playerTwo").hidden = true; 
document.getElementById("Computer").hidden = false;
}

twoPlayer.addEventListener("click", twoClick);
function twoClick(event) {
  document.getElementById("playerTwo").hidden = false;
  document.getElementById("Computer").hidden = true;
}

oneName.addEventListener("keypress", (event) => {
  if(event.key==="Enter" && oneName.value.length >0){
    playerOne.innerText = oneName.value;
    playerOne.style.color = "white";
    playerOne.style.fontSize = "30px";
    playerOne.style.fontWeight = "bold";
    playerOne.style.padding = "15px";
  }
})
twoName.addEventListener("keypress", (event) => {
  if(event.key==="Enter" && twoName.value.length >0){
    playerTwo.innerText = twoName.value;
    playerTwo.style.color = "white";
    playerTwo.style.fontSize = "30px";
    playerTwo.style.fontWeight = "bold";
    playerTwo.style.padding = "15px";
  }
})
  


function winMessage(){
  let text = "Player ${currenPlayer} Wins!";
}
function drawMessage(){
  let text = "It's a Draw!"
}

// const boxes = Array.from(document.getElementsByClassName('tile'));
const board = document.getElementById("board");

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
    gameState.CurrentPlayer = playerO;
  } else {
    clickedTile.innerText = "O";
    let id = clickedTile.id;
    gameState[id] = "O";
    gameState.CurrentPlayer = playerX;
  }
  gameChecker();
}
//
const resetButton = document.getElementById("reset_button");

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

  gameState = ['', '', '', '', '', '', '', '', ''];

  let firstPlayer = Math.random();
  if (firstPlayer < 0.5) {
    return "X";
  } else {
    return "O";
  }
  let CurrentPlayer = firstPlayer;
}

function gameChecker() {
  // let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    // let win = winningCombinations[i];
    let a = gameState[winningCombinations[0]];
    let b = gameState[winningCombinations[1]];
    let c = gameState[winningCombinations[2]];
    if (a === "" || b === "" || c === "") continue;
  }
  if (a === b && a === c) {
    roundWon = true;
    return winMessage;
  }
  let draw = !gameState.includes('');
  if (draw){
    return drawMessage;
  }
}

//computer picks a random square, checks if it's occupied, if so, pick another random square

//have an additional button that chooses a computer vs. a second player (should have a form to input name)