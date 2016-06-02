export default class WinTest {
  constructor(board) {
    this.board = board;
  }

 testForWin () {
    if (this.wonVertical('player') || this.wonHorizontal('player') || this.wonDiagonal('player')) {
      return 'player';
    }
    else if (this.wonVertical('ai') || this.wonHorizontal('ai') || this.wonDiagonal('ai')) {
      return 'ai';
    }
    else if (this.testForDraw()) {
      return '';
    }
    else {
      return false;
    }
  }

   wonVertical (color) {
    for (var y = 0; y < 3; y++) {
      var count = 0;
      for (var x = 0; x < 3; x++) {
        if (this.board[y][x].owner == color) {
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

   wonHorizontal (color) {
    for (var y = 0; y < 3; y++) {
      var count = 0;
      for (var x = 0; x < 3; x++) {
        if (this.board[x][y].owner == color) {
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

  wonDiagonal (color) {
    if (this.board[0][0].owner == color && this.board[1][1].owner == color && this.board[2][2].owner == color) {
      return true;
    }
    else if (this.board[2][0].owner == color && this.board[1][1].owner == color && this.board[0][2].owner == color) {
      return true;
    }
    else {
      return false;
    }
  }

 testForDraw () {
    var count = 0;
    for (var y = 0; y < 3; y++) {
      for (var x = 0; x < 3; x++) {
        if (this.board[y][x].owner != '') {
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

  // function reset () {
  //   for (var y = 0; y < 3; y++) {
  //     for (var x = 0; x < 3; x++) {
  //       this.board[y][x].owner = '';
  //       this.board[y][x].grade = 0;
  //     }
  //   }
  //   clear();
  //   playing = true;
  // }
};