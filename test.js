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


const xArray = [];
const oArray = [];

const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
 
}


// console.log(xArray)
 
// let initialState;

// function buildInitialState() {
  
// }

// function renderState() {

// }

// // maybe a dozen or so helper functions for tiny pieces of the interface

// // listeners
const boxes = Array.from(document.getElementsByClassName('tile'));
const board = document.getElementById('board');

board.addEventListener('click', onBoardClick);
function onBoardClick (event){
    let clickedTile = event.target;
    if(clickedTile.innerText != ""){
      return;
    } 
    if(gameState.CurrentPlayer === playerX){
      clickedTile.innerText = "X";
      xArray.push(clickedTile.id);
      //checker function - if X wins
      gameState.CurrentPlayer = playerO;
    }
    else{
      clickedTile.innerText = "O";
      oArray.push(clickedTile.id);
      //checker function -- if O wins
      gameState.CurrentPlayer = playerX;
    }
  }
  function onCheckBox(element){
    checkedBoxes.push({box:element.id, player: CurrentPlayer});
    checkElement(element);

  }
  console.log(boxes);
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
// const winningCombinations = [
//     [0, 1, 2]
//     [3, 4, 5]
//     [6, 7, 8]
//     [0, 3, 6]
//     [1, 4, 7]
//     [2, 5, 8]
//     [0, 4, 8]
//     [2, 4, 6]
// ]

