/*
name players
start game
generate board
game turns
update board
player wins
game ends
*/


/*
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
*/

const startButton = document.getElementById("startbtn");
startButton.addEventListener("click", () => {
  Game.playMatch();
});
  
const Board = (function() {
    var board = [[0,0,0],[0,0,0],[0,0,0]];
    const wrapper = document.getElementById("wrapper");
    const domBoard = document.createElement("div");
    domBoard.setAttribute("id", "gameboard");
    
    const updateBoardState = () => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == 1){
            document.getElementById(`${i+1}${j+1}`).style.backgroundImage = "url('../img/basictile.png')";
          }
          else if (board[i][j] == 2){
            document.getElementById(`${i+1}${j+1}`).style.backgroundImage = "url('../img/basictile.png')";
          }
          else if (board[i][j] == 0){
            document.getElementById(`${i+1}${j+1}`).style.backgroundImage = "url('../img/basictile.png')";
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
    

    const _createLine = (i)=>{
      const newLine = document.createElement("div");
      newLine.classList.add("line");
      newLine.setAttribute("id", `${i+1}`);
      domBoard.appendChild(newLine);
    };

    const _drawBoard = ()=>{
      for (let index = 0; index < 3; index++) {
        _createLine(index);
      }
      const lines = document.getElementsByClassName("line");
      for (let i = 0; i < 3; i++) {
        const line = lines[i];
        for (let j = 0; j < 3; j++) {
          const newSquare = document.createElement("div");
          newSquare.classList.add("square");
          newSquare.setAttribute("id",`${i+1}${j+1}`);
        line.appendChild(newSquare);
        };
      };
    };

    const generate = () => {
      wrapper.innerHTML = "";
      wrapper.appendChild(domBoard);
      _drawBoard();
    };

    const writeToDOM = () => {

    };
  
    return {
      generate,
      updateBoardState
    };
})();

const Game = (function() {

    const _turn = () => {

    };

    const _playRound = () => {};

    const playMatch = () => {
      Board.generate();
      Board.updateBoardState();
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
  
  
  