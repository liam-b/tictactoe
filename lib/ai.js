

function aiMove () {
    minimax(board);
    playBestMove();
    turn = 'player';
    move++;
}

function emptySquares () {
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      if (board[a][b].color == GREY) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

function moveRandom () {
  if (playing) {
    moveX = Math.floor(Math.random() * 3)
    moveY = Math.floor(Math.random() * 3)
    if (board[moveX][moveY].color == GREY) {
      board[moveX][moveY].color = RED;
      turn = 'player'
    }
  }
  else {
    turn = 'player'
  }
  move++;
}

function minimax (possibleBoard) {
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      var possibleBoard = copyOf(newBoard);
      
      if (lastMove == BLUE) {
        if (possibleBoard[a][b].owner == '') {
          possibleBoard[a][b].owner = 'ai';
          if (testForWin() == false) {
            minmax(possibleBoard);
          }
          else if (testForWin() == RED) {
            board[a][b].grade += 1;
          }
        }
      }
      else {
        if (possibleBoard[a][b].owner == '') {
          possibleBoard[a][b].owner = 'player';
          if (testForWin() == false) {
            minmax(possibleBoard);
          }
          else if (testForWin() == BLUE) {
            board[a][b].grade -= 1;
          }
        }
      }
    }
  }
}

function playBestMove () {
  bestMove = [ 0, 0, -100 ];
  for (a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++) {
      if (board[a][b].grade > bestMove[2] && board[a][b].color == GREY) {
        bestMove = [a, b, board[a][b].grade];
      }
    }
  }
  console.log(bestMove);
  console.log(board);
  board[bestMove[0]][bestMove[1]].color = RED;
}
