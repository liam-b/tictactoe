var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

GREY = '#909090';
BACKGROUND = '#d9d9d9';
BLUE = '#4faddb';
RED = '#db4f4f';

WIDTH = 100;
HEIGHT = 100;
OFFSET = 105;

CENTER_X = canvas.width / 2;
CENTER_Y = canvas.height / 2;

turn = 'player';
playing = true;
move = 0;
lastMove = BLUE;

var squareX = CENTER_X - OFFSET * 2;
var squareY = CENTER_Y - OFFSET * 2;

var board = [];
for (x = 0; x < 3; x++) {
  board[x] = []
  squareX = squareX + OFFSET;
  for (y = 0; y < 3; y++) {
    squareY = squareY + OFFSET;
    board[x][y] = { owner : '', x : squareX, y : squareY }
  }
  squareY = CENTER_Y - OFFSET * 2;
}

var mouse = {
  x : 0,
  y : 0
}

function draw () {
  if (testForWin() == false && turn == 'ai') {
    aiMove();
  }
  winCheck();
  drawBoard();
  requestAnimationFrame(draw);
}

draw();

window.addEventListener('mousemove', mousePosition, false);
canvas.addEventListener('mousedown', mouseClick, false);


function mousePosition (event) {
  var rect = canvas.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
}

function mouseClick (event) {
  if (turn == 'player') {
    for (x = 0; x < 3; x++) {
      for (y = 0; y < 3; y++) {  
        if (mouse.x > board[y][x].x - WIDTH / 2 && mouse.x < board[y][x].x + WIDTH / 2) {
          if (mouse.y > board[y][x].y - HEIGHT / 2 && mouse.y < board[y][x].y + HEIGHT / 2) {
            if (board[y][x].owner == '') {
              board[y][x].owner = 'player';
              turn = 'ai'
              move++;
            }
          }
        }
      }
    }
  }
  if (playing == false) {
    reset();
  }
}

function winCheck () {
  winner = testForWin();
  if (winner == BLUE) {
    print('Blue wins', canvas.width / 2 - 110, 120, BLUE, 'lighter', '50px')
  }
  else if (winner == RED) {
    print('Red wins', canvas.width / 2 - 100, 120, RED, 'lighter', '50px')
  }
  else if (winner == GREY) {
    print('Draw', canvas.width / 2 - 60, 120, GREY, 'lighter', '50px')
  }
  if (winner != false) {
    playing = false;
    move = 0;
  }
}

function print (text, x, y, color, type, size) {
  context.font = type + ' ' + size + ' Open Sans';
  context.fillStyle = color;
  context.fillText(text, x, y);
}

function drawBoard () {
  context.fillStyle = GREY;
  context.fillRect(CENTER_X - 155, CENTER_Y - 155, 310, 310);
  for (x = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
      context.fillStyle = BACKGROUND;
      context.fillRect(board[x][y].x - WIDTH / 2, board[x][y].y - HEIGHT / 2, HEIGHT, WIDTH);
      if (board[x][y].owner == 'player') {
        print('X', board[x][y].x - 25, board[x][y].y + 30, BLUE, 'bold', '80px');
      }
      else if (board[x][y].owner == 'ai') {
        print('O', board[x][y].x - 31, board[x][y].y + 30, RED, 'bold', '80px');
      }
    }
  }
}