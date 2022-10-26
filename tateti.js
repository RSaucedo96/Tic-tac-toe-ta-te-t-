/*
name players
start game
generate board
game turns
update board
player wins
game ends
*/

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const form = document.querySelector("#myForm");
const newGameBtn = document.querySelector("#restartBtn");
const resetGameBtn = document.querySelector("#resetBtn");


newGameBtn.addEventListener("click", () => {
  location.reload();
});


form.addEventListener("submit", (event) => {
  //prevent page refresh
  event.preventDefault();

  //initialize user form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  document.querySelector(".modal-wrapper").setAttribute("hidden", true);
  initializeGame(data);
});

const resetDom = () => {
  document.querySelectorAll(".box").forEach((box) => {
    box.className = "box";
    box.textContent = "";
  });
};

  
const Board = (function() {
    var board = [[0,0,0],[0,0,0],[0,0,0]];
    const wrapper = document.getElementById("wrapper");
    const domBoard = document.createElement("div");
    domBoard.setAttribute("id", "gameboard");
    domBoard.style.backgroundImage = "url('./img/boardgraph.png')";

    

    const updateArr = (clickedSpace,playerId) => {
        board[clickedSpace[0]-1][clickedSpace[1]-1] = playerId;
    };
    
    const updateUi = () => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === 1){
            document.getElementById(`${i+1}${j+1}`).style.backgroundImage = "url('./img/circle.png')";
          }
          else if (board[i][j] === 2){
            document.getElementById(`${i+1}${j+1}`).style.backgroundImage = "url('./img/cross.png')";
          }
          else if (board[i][j] === 0){
            document.getElementById(`${i+1}${j+1}`).style.backgroundImage = "url('./img/basictile.png')";
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
  
    return {
      generate,
      updateUi,
      updateArr
    };
})();

const Game = (function() {

    const _turn = (playerId) => {
      const spaces = document.getElementsByClassName("square");
      console.log(spaces[1].style.backgroundImage);
      for (let index = 0; index < spaces.length; index++) {
        if (spaces[index].style.backgroundImage == 'url("./img/basictile.png")'){
          spaces[index].addEventListener("click", (event) => {
            spaceId = event.target.id;
            console.log(spaceId);
            spaceArr = spaceId.split('');
            var result = spaceArr.map(function (x) {
              return parseInt(x, 10); 
            });
            Board.updateArr(result,playerId);
            Board.updateUi();
          });
        }
      }
    };


    const playMatch = () => {
      Board.generate();
      Board.updateUi();
      _turn(1);
      sleepUntil(() => document.querySelector('.my-selector'), 5000)
    .then(() => {
        // ready
    }).catch(() => {
        // timeout
    });
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
  
  
  