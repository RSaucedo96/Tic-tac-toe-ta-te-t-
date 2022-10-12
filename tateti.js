/*
name players
start game
generate board
game turns
update board
player wins
game ends
*/


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
      var j;
      for (var i = board[j].length; i > 0; i--) {
        board[j].pop();
        j ++;
       }
       j=0;
       
       /* clean interface */
      
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

const Player = (function(doc) {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };
  
    const writeToDOM = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
})(document || documentMock);


const Game = (function(doc) {


    const _score = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
    const _turn = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };
    
    const logPlayers = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }

    const playRound = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
    
    const _winCondition = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
})(document || documentMock);
  
  
  