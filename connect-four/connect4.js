/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

var WIDTH = 7;
var HEIGHT = 6;

var currPlayer = 2; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {

  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for (let y = 0; y < HEIGHT; y++) {
		board.push(Array.from({ length: WIDTH }));
	}
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  var htmlBoard = document.getElementById('board');
  // TODO: add comment for this code
  var top = document.createElement("tr"); //create table row element
  top.setAttribute("id", "column-top"); // give table row element a attribute and id
  top.addEventListener("click", handleClick); // when table row clicked call handleClick function

  for (var x = 0; x < WIDTH; x++) {
    var headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // TODO: add comment for this code
  for (var y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");//create tr element for per row,height
    for (var x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td"); // create table element for per cell, width
      cell.setAttribute("id", `${y}-${x}`); // give each cell unique id by height and width
      row.append(cell);// append the cell to the row
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */


function makeDiv() {
  let divElement = document.createElement('div');
  divElement.classList.add('piece');

  if (currPlayer === 1) {
      divElement.classList.add('player1');
  } else {
      divElement.classList.add('player2');
  }

  return divElement;
}



function placeInTable(y, x) {
    // TODO: make a div and insert into correct table cell
  const idLocation = document.getElementById(`${y}-${x}`);
  idLocation.append(makeDiv());

}

function updatePlayer(){
  let player=document.querySelector('h1');
  player.innerText = `Current Player:${currPlayer} `;
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  var x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  var y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  board[y][x] = currPlayer;

  // check for win
  if (checkForWin()) {
    return endGame(`GAME OVER! Player ${currPlayer} won!`);
    }



  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  if (checkFortie()) {
   return endGame('All is filled up!');
  }


  // switch players
  // TODO: switch currPlayer 1 <-> 2
  switchPlayer();

  updatePlayer();

}
/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkFortie(){
  return board.every(row => row.every(cell => cell));
}

function switchPlayer(){
 return currPlayer === 1?  currPlayer = 2 : currPlayer = 1;
}


function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
