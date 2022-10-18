/*
name players
start game
generate board
game turns
update board
player wins
game ends
*/


const playerOne = new Player ();
const playerTwo = new Player ();
const newGame = new Game();
const newBoard = new Board();

const playerOneForm = document.getElementById("p1"); 
playerOneForm.addEventListener("submit", () => {
	const playerOneName = document.querySelector('#p1').value;
  playerOne.log(playerOneName);
});

const playerTwoForm = document.getElementById("p2"); 
playerTwoForm.addEventListener("submit", () => {
	const playerTwoName = document.querySelector('#p2').value;
  playerTwo.log(playerTwoName);
});

const startButton = document.getElementById("startbtn");
startButton.addEventListener("click", () => {
  newGame.playMatch();
});
  
const Board = (function() {
    var board=[[0,0,0],[0,0,0],[0,0,0]];
    const domBoard=document.getElementById("wrapper");
    
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
      board.appendChild(newLine);
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
      makeUppercase,
      writeToDOM,
    };
})();

const Player = (function() {

  const log = (name) => {
    const playerName = name;
  };
  
  const action = () => {
  };
  
  const writeToDOM = () => {
  }
  
    return {
      log
    }
})();


const Game = (function() {

    const _turn = () => {

    };

    const _playRound = () => {};

    const playMatch = () => {
      board.generate();
    };

    const _winConditionCheck = () => {
    
    };
  
    return {
      playMatch      
    }
})();
  
  
  