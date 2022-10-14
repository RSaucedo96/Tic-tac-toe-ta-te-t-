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

const documentMock = (() => ({
    querySelector: (selector) => ({
      innerHTML: null,
    }),
}))();
  
const Board = (function() {
    var board=[[[0],[0],[0]],[[0],[0],[0]],[[0],[0],[0]]];
    const domBoard=document.getElementById("wrapper");
    
    const _boardState = (message) => {
      
    };

    const _resetBoard = () => {
      //clean board array
      var j;
      for (var i = board[j].length; i > 0; i--) {
        board[j].pop();
        j ++;
       }
      j=0;
      // clean web board
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
          newSquare.setAttribute("id", "square")
          newSquare.classList.add(`${i+1}${j+1}`);
          newSquare.addEventListener("click", function ( Write ) {
              newSquare.classList.add('hoverSquare')
          });
        line.appendChild(newSquare);
        };
      };
    };

    const generate = () => {
      domBoard.innerHTML = "";
      _drawBoard();


    };

    const writeToDOM = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
})(document || documentMock);

const Player = (function() {

  const log = (name) => {
    const playerName = name;
  };
  
  const action = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
  };
  
  const writeToDOM = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
  }
  
    return {
      log
    }
})(document || documentMock);


const Game = (function(doc) {


    const _score = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
      

    const _turn = () => {
      log("Making uppercase");
      return text.toUpperCase();
    };

    const _playRound = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    };

    const playMatch = () => {
      const board = new Board();
      board.generate();

    };

    const _winCondition = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    };
  
    return {
      playMatch      
    }
})(document || documentMock);
  
  
  