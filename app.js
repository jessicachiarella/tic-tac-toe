//enter names and have them displayed

//take turns placing marks in empty spaces
//not be able to place marks in occupied spaces
//check for wins or draws
//be told of a win or a draw
//start the game over without having to restart the browser
//if one player: see computer as opponent
//have computer make moves as if it were human



const playerX = "X";
const playerO = "O";




const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}
 

 
// let initialState;

// function buildInitialState() {
  
// }

// function renderState() {

// }

// // maybe a dozen or so helper functions for tiny pieces of the interface

// // listeners
const board = document.getElementById('board');

board.addEventListener('click', onBoardClick);
function onBoardClick (event){
    let clickedTile = event.target;
    if(clickedTile.innerText != ""){
      return;
    } 
    if(gameState.CurrentPlayer === playerX){
      clickedTile.innerText = "X"
      gameState.CurrentPlayer = playerO;
    }
    else{
      clickedTile.innerText = "O";
      gameState.CurrentPlayer = playerX;
    }
  }

  
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

  let firstPlayer = Math.random(); 
  if (firstPlayer < 0.5){
    return 'X';
  } else {
    return 'O';
  }
  let CurrentPlayer = firstPlayer;
 }
 

//   // update state, maybe with another dozen or so helper functions...

//   renderState() // show the user the new state
// }




// // }
// function gameChecker (){
 


// }

