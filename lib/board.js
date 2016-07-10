const GREY = '#909090';
const BACKGROUND = '#d9d9d9';
const BLUE = '#4faddb';
const RED = '#db4f4f';

const SQUARE_WIDTH = 100;
const SQUARE_HEIGHT = 100;
const SQUARE_OFFSET = 105;

export default class Board {
  constructor (width, height) {
    this.width = width;
    this.height = height;

    this.squareWidth = 100;
    this.squareHeight = 100;

    this.CENTER_X = window.canvas.width / 2;
    this.CENTER_Y = window.canvas.height / 2;
    this.setupBoard();
    this.drawBoard();
  }

  setupBoard () {
    this.squares = [];

    var squareX = this.CENTER_X - SQUARE_OFFSET * 2;
    var squareY = this.CENTER_Y - SQUARE_OFFSET * 2;

    for (var x = 0; x < this.width; x++) {
      squareX = squareX + SQUARE_OFFSET;
      this.squares[x] = [];
      for (var y = 0; y < this.height; y++) {
        squareY = squareY + SQUARE_OFFSET;
        this.squares[x][y] = { x : squareX, y : squareY };
      }
      squareY = this.CENTER_Y - SQUARE_OFFSET * 2;
    }
  }

  drawBoard () {
    window.context.fillStyle = GREY;
    window.context.fillRect(this.CENTER_X - 155, this.CENTER_Y - 155, 310, 310);

    for (var x = 0; x < this.width; x++) {
      for (var y = 0; y < this.height; y++) {
        window.context.fillStyle = BACKGROUND;
        window.context.fillRect(this.squares[x][y].x - SQUARE_WIDTH / 2, this.squares[x][y].y - SQUARE_HEIGHT / 2, SQUARE_HEIGHT, SQUARE_WIDTH);
      }
    }
  }

  print (text, x, y, color, type, size) {
    context.font = type + ' ' + size + ' Open Sans';
    context.fillStyle = color;
    context.fillText(text, x, y);
  }

  drawGame (game, ai) {
    window.context.fillStyle = '#d9d9d9';
    window.context.fillRect(window.canvas.width / 2 - 469, window.canvas.height / 2 - 500, 510, 310);
    var levelText = ''

    switch (ai.level) {
      case 1:
        levelText = 'Novice'
        break;
      case 2:
        levelText = 'Intermediate'
        break;
      case 3:
        levelText = 'Expert'
        break;
      case 4:
        levelText = 'Unbeatable'
        break;
      case 5:
        levelText = 'Incomprehensible'
        break;
      case 6:
        levelText = 'Unintelligible'
        break;
    }
    this.print('AI level: ' + levelText, 50, 70, '#909090', 'normal', '30px')

    var i = 0;
    for (var x = 0; x < this.width; ++x) {
      for (var y = 0; y < this.height; ++y) {
        if (i < game.data.length) {
          var value = game.data.charAt(i++);
          if (value != '_') {
            if (value == 'X') {
              this.print('X', this.squares[x][y].x - 27, this.squares[x][y].y + 30, BLUE, 'bold', '80px');
            }
            else {
              this.print('O', this.squares[x][y].x - 32, this.squares[x][y].y + 30, RED, 'bold', '80px');
            }
          }
        }
      }
    }
  }

  reset (game) {
    this.drawBoard()
    window.context.fillStyle = '#d9d9d9';
    window.context.fillRect(window.canvas.width / 2 - 155, window.canvas.height / 2 - 500, 310, 310);
  }
};
