/*
name players
start game
generate board
game turns
update board
player wins
game ends
*/


const playerOneForm = document.getElementById("p1"); 
playerOneForm.addEventListener("submit", () => {
	const playerOneName = document.querySelector('#p1').value;
  const playerOne= Player(playerOneName);
});

const playerTwoForm = document.getElementById("p2"); 
playerTwoForm.addEventListener("submit", () => {
	const playerTwoName = document.querySelector('#p2').value;
  const playerTwo= Player(playerTwoName);
});

const startButton = document.getElementById("startbtn");
startButton.addEventListener("click", () => {
  Game.playMatch();
});
  
const Board = (function() {
    var board = [[0,0,0],[0,0,0],[0,0,0]];
    const domBoard = document.getElementById("wrapper");
    
    const updateBoardState = () => {
      for (let i = 0; i < board.length; index++) {
        for (let j = 0; j < board[i].length; index++) {
          if (board[i][j] == 1){

          }
          else if (board[i][j] == 2){

          }
          else{

          }
        }
      }
    };

    const _resetBoard = () => {
      //clean board array
      var j;
      for (var i = board[j].length; i > 0; i--) {
        board[j] = [0,0,0];
        j ++;
       }
      j=0;
    };
    

    const _createLine =()=>{
      const newLine = document.createElement("div");
      newLine.classList.add("line");
      domBoard.appendChild(newLine);
    };

    const _drawBoard = ()=>{
      for (let index = 0; index < 3; index++) {
        _createLine();
      }
      const lines = document.getElementsByClassName("line");
      for (let i = 0; i < 3; i++) {
        const line = lines[i];
        for (let j = 0; j < 3; j++) {
          const newSquare = document.createElement("div");
          newSquare.setAttribute("id", "square");
          newSquare.classList.add(`${i+1}${j+1}`);
          newSquare.addEventListener("click", function ( Write ) {
          newSquare.classList.add('hoverSquare');
          });
        line.appendChild(newSquare);
        };
      };
    };

    const generate = () => {
      domBoard.innerHTML = "";
      _drawBoard();
    };

    const writeToDOM = () => {

    };
  
    return {
      generate
    };
})();

const Game = (function() {

    const _turn = () => {

    };

    const _playRound = () => {};

    const playMatch = () => {
      Board.generate();
    };

    const _winConditionCheck = () => {
    
    };
  
    return {
      playMatch      
    }
})();

const Player = (name) => {
  const getName  = () => name;
  return {getName};
};
  
  
  