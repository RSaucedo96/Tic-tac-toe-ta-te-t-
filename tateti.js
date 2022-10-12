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

const playerOneForm = document.getElementById("p1"); 
playerOneForm.addEventListener("submit", playerOne.log);

const playerTwoForm = document.getElementById("p2"); 
playerTwoForm.addEventListener("submit", playerTwo.log );

const documentMock = (() => ({
    querySelector: (selector) => ({
      innerHTML: null,
    }),
}))();
  
const Board = (function() {
    var board=[[],[],[]];
    
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
  
    const generate = (text) => {
      _log("Making uppercase");
      return text.toUpperCase();
    };

    currentState
  
    const writeToDOM = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
})(document || documentMock);

const Player = (function() {

  const log = (e) => {
    e.preventDefault();
    const playerName = document.querySelector('#p1').value;
  };
  
  const makeUppercase = (text) => {
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

    };

    const _winCondition = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    };
  
    return {
        
    }
})(document || documentMock);
  
  
  