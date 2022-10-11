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
  
const Board = (function(doc) {
    const _log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
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
    const score = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
    const turn = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };
  
    const winCondition = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
})(document || documentMock);
  
  
  