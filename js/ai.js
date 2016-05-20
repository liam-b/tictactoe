lastMove = 'BLUE'

function aiMove () {
  if (testForWin() == false) {
    minimax();
    playBestMove();
  }
}

function emptySquares () {
  for (a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++) {
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

function minimax () {
  console.log('minimax');
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      if (lastMove == BLUE) {
        if (board[a][b].color == GREY) {
          board[a][b].color = RED;
          if (testForWin() == RED) {
            board[a][b].grade += 1;
            lastMove = RED;
            minimax();
          }
        board[a][b].color = GREY;
        }
      }
      else {
        if (board[a][b].color == GREY) {
          board[a][b].color = BLUE;
          if (testForWin() == BLUE) {
            board[a][b].grade += -1;
            lastMove = BLUE;
            minimax();
          }
        board[a][b].color = GREY;
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
  board[bestMove[0]][bestMove[1]].color = RED;
  turn = 'player';
}