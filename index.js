var prompt = require('prompt');
var player1 = 'X'
var player2 = 'O'
var count = 0; // when count hits 9 - game ends

var properties = [
  {
    name: 'row',
    validator: /^[0-2]+$/,
    warning: 'Use Only Capitals Letters - first 9 letters of alphabet [A - I]'
  },
 {
    name: 'col',
    validator: /^[0-2]+$/,
    warning: 'Use Only Capitals Letters - first 9 letters of alphabet [A - I]'
  },
];

var initialPrompt = function () {
  console.log('This is a game of tic-tac-toe!');
};

var board =
[ ['_' , '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_']
];

function printBoard(row, col, player) {

  if (row = 0 && col == 0 ) {
    board[0][0] = player;
    board.concat(board[0][0]);
  }
  if (row === 0 && col === 1) {
    board[0][1] = player;
    board.concat(board[0][1]);
  }
  if (row === 0 && col === 2) {
    board[0][2] = player;
    board.concat(board[0][2]);
  }
  if (row === 1 && col === 0) {
    board[1][0] = player;
    board.concat(board[1][0]);
  }
  if (row === 1 && col === 1) {
    board[1][1] = player;
    board.concat(board[1][1]);
  }
  if (row === 1 && col === 2) {
    board[1][2] = player;
    board.concat(board[1][2]);
  }
  if (row === 2 && col === 0) {
    board[2][0] = player;
    board.concat(board[2][0]);
  }
  if (row === 2 && col === 1) {
    board[2][1] = player;
    board.concat(board[2][1]);
  }
  if (row === 2 && col === 2) {
    board[2][2] = player;
    board.concat(board[2][2]);
  }
console.log('\n' +
    ' ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2] + '\n' +
    ' ---------\n' +
    ' ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2] + '\n' +
    ' ---------\n' +
    ' ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + '\n');

}

// If player hits any of these scenarios - gets a winPrompt;
var winningMoves = function(player) {
  if (player) {
    winPrompt(player);
  }
};

var winPrompt = function(player) {
  console.log(player, ' won this round!');
};

initialPrompt();
printBoard();

prompt.start();

var askPlayerOne = function() {
  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }

    // PLAYER 1
    console.log(' Player 1 - pick a row: ' + result.row);
    console.log(' Player 1 - pick a col: ' + result.col);
    var row = result.row;
    var col = result.col;
    // update the board - player's 1 input
    printBoard(row, col, player1);
  });
}

var askPlayerTwo = function() {
  prompt.get(properties, function (err, result) {
    if (err) {return onErr(err);}

    // PLAYER 2
    console.log(' Player 2 - pick a row: ' + result.row);
    console.log(' Player 2 - pick a col: ' + result.col);
    var row = result.row;
    var col = result.col;
    // update the board - player's 2 input
    printBoard(row, col, player2);
  });
}

// while (count !== 9) {
  askPlayerOne();
  count++;
  askPlayerTwo();
  count++;
// }

function onErr(err) {
  console.log(err);
  return 1;
}