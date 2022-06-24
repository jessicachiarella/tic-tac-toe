//enter names and have them displayed

//take turns placing marks in empty spaces
//not be able to place marks in occupied spaces
//check for wins or draws
//be told of a win or a draw
//start the game over without having to restart the browser
//if one player: see computer as opponent
//have computer make moves as if it were human


const gameState = [null, null, null, null ,null, null, null, null, null];
const playerX = "X";
const playerO = "O";
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
 ];

// const boxes = Array.from(document.getElementsByClassName('tile'));
const board = document.getElementById('board');

board.addEventListener('click', onBoardClick);
function onBoardClick (event){
    let clickedTile = event.target;
    if(clickedTile.innerText != ""){
      return;
    } 
    if(gameState.CurrentPlayer === playerX){
      clickedTile.innerText = "X";
      let id = clickedTile.id;
      gameState[id] = "X"
    //   gameChecker();
      gameState.CurrentPlayer = playerO;
    }
    else{
      clickedTile.innerText = "O";
      let id = clickedTile.id;
      gameState[id] = "O"
    //   gameChecker();
      gameState.CurrentPlayer = playerX;
    }
  }

//   
const resetButton = document.getElementById('reset_button');


resetButton.addEventListener("click", startGame);
 function startGame (){
  document.getElementById('0').innerText = "";
  document.getElementById('1').innerText = "";
  document.getElementById('2').innerText = "";
  document.getElementById('3').innerText = "";
  document.getElementById('4').innerText = "";
  document.getElementById('5').innerText = "";
  document.getElementById('6').innerText = "";
  document.getElementById('7').innerText = "";
  document.getElementById('8').innerText = "";

  gameState = [null, null, null, null ,null, null, null, null, null];

  let firstPlayer = Math.random(); 
  if (firstPlayer < 0.5){
    return 'X';
  } else {
    return 'O';
  }
  let CurrentPlayer = firstPlayer;
 }

function gameChecker(){
        for (let i = 0; i <= 7; i++){
            const win = winningCombinations[i];
            let a = gameState[win[0]];
            let b = gameState[win[1]];
            let c = gameState[win[2]]
            if (a === '' || b === '' || c === '')
            continue;
    }
    if (a === b && b === c){
        roundWon = true;

        console.log(roundWon)
    }
} 
