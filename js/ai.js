function aiMove () {
  minimax();
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
  for (x = 0; x < 2; ++x) {
    for (y = 0; y < 2; ++y) {
      console.log(x, y)
      if (board[x][y].color == GREY) {
        board[x][y].color = RED;
        if (testForWin() == RED) {
          //board[x][y].grade = 1;
        }
        else if (testForWin() == BLUE) {
          //board[x][y].grade = -1;
          board[x][y].color = GREY;
          moveRandom();
        }
        else {
          //board[x][y].grade = 0;
          board[x][y].color = GREY;
          moveRandom();
        }
      }
    }
  }
}