function testForWin () {
  if (wonVertical(BLUE) || wonHorizontal(BLUE) || wonDiagonal(BLUE)) {
    return BLUE;
  }
  else if (wonVertical(RED) || wonHorizontal(RED) || wonDiagonal(RED)) {
    return RED;
  }
  else if (testForDraw()) {
    return GREY;
  }
}

function wonVertical (color) {
  for (y = 0; y < 3; y++) {
    count = 0;
    for (x = 0; x < 3; x++) {
      if (board[y][x].color == color) {
        count = count + 1;
      }
    }
    if (count == 3) {
      break;
    }
  }
  if (count == 3) {
    return true;
  }
  else {
    return false;
  }
}

function wonHorizontal (color) {
  for (y = 0; y < 3; y++) {
    count = 0;
    for (x = 0; x < 3; x++) {
      if (board[x][y].color == color) {
        count = count + 1;
      }
    }
    if (count == 3) {
      break;
    }
  }
  if (count == 3) {
    return true;
  }
  else {
    return false;
  }
}

function wonDiagonal (color) {
  if (board[0][0].color == color && board[1][1].color == color && board[2][2].color == color) {
    return true;
  }
  else if (board[2][0].color == color && board[1][1].color == color && board[0][2].color == color) {
    return true;
  }
  else {
    return false;
  }
}

function testForDraw () {
  count = 0;
  for (y = 0; y < 3; y++) {
    for (x = 0; x < 3; x++) {
      if (board[y][x].color != GREY) {
        count = count + 1;
      }
    }
  }
  if (count == 9 && playing) {
    return true;
  }
  else {
    return false;
  }
}

function reset () {
  for (y = 0; y < 3; y++) {
    for (x = 0; x < 3; x++) {
      board[y][x].color = GREY;
      board[y][x].grade = 0;
    }
  }
  clear();
  playing = true;
}