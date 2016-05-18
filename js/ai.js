function aiMove () {
  moveRandom();
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