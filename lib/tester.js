export default class Tester {
  constructor (board) {
    this.width = board.width;
    this.height = board.height;
  }

  whoWon (moves) {
    this.moves = moves;

    if (this._wonVertical('X') || this._wonHorizontal('X') || this._wonDiagonal('X')) {
      return 'X';
    }
    else if (this._wonVertical('O') || this._wonHorizontal('O') || this._wonDiagonal('O')) {
      return 'O';
    }
    else if (this.moves.indexOf('_') < 0) {
      return 'draw';
    }
    else {
      return 'nobody';
    }
  }

  _wonVertical (color) {
    for (var y = 0; y < this.height; y++) {
      var vertical = 0;
      for (var x = 0; x < this.width; x++) {
        var index = y * this.width + x;
        if (this.moves.charAt(index) == color) {
          vertical = vertical + 1;
        }
      }
      if (vertical == 3) {
        return true;
      }
    }
    return false;
  }

  _wonHorizontal (color) {
    for (var y = 0; y < this.height; y++) {
      var horizontal = 0;
      for (var x = 0; x < this.width; x++) {
        var index = x * this.height + y;
        if (this.moves.charAt(index) == color) {
          horizontal = horizontal + 1;
        }
      }
      if (horizontal == 3) {
        return true;
      }
    }
    return false;
  }

  _wonDiagonal (color) {
    var count = 0;
    for (var i = 0; i < this.height * 3; i++) {
      if (i % 4 == 0) {
        if (this.moves.charAt(i) == color) {
          count++;
        }
      }
    }

    if (count == 3) {
      return true;
    }
    else {
      count = 0
    }

    for (var i = 2; i < this.height * 3 - 1; i += 2) {
      if (this.moves.charAt(i) == color) {
        count++;
      }
    }

    if (count == 3) {
      return true;
    }

    return false;
  }

  moveCount (moves) {
    let moveCount = 0;
    for (var move = 0; move < 9; move += 1) {
      if (moves.charAt(move) != '_') {
        moveCount += 1;
      }
    }
    return moveCount;
  }
};
