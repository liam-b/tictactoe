var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

GREY = '#909090';
BLUE = '#4faddb';
RED = '#db4f4f';

WIDTH = 100;
HEIGHT = 100;
OFFSET = 115;

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
    board[x][y] = { color : GREY, x : squareX, y : squareY, grade : 0 }
  }
  squareY = CENTER_Y - OFFSET * 2;
}

var mouse = {
  x : 0,
  y : 0
}

function draw () {
  if (turn == 'ai' && testForWin() != GREY) {
    aiMove();
  }
  drawBoard();
  if (playing) {
    winCheck();
  }
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
  if (turn == 'player' && playing) {
    for (x = 0; x < 3; x++) {
      for (y = 0; y < 3; y++) {  
        if (mouse.x > board[y][x].x - WIDTH / 2 && mouse.x < board[y][x].x + WIDTH / 2) {
          if (mouse.y > board[y][x].y - HEIGHT / 2 && mouse.y < board[y][x].y + HEIGHT / 2) {
            if (board[y][x].color == GREY) {
              board[y][x].color = BLUE;
              turn = 'ai'
            }
          }
        }
      }
    }
  }
  if (playing == false) {
    reset();
  }
  move++;
}

function winCheck() {
  if (testForWin() == BLUE) {
    print('Blue wins', canvas.width / 2 - 110, 120, BLUE, 'center')
    playing = false;
  }
  else if (testForWin() == RED) {
    print('Red wins', canvas.width / 2 - 100, 120, RED, 'center')
    playing = false;
  }
  else if (testForWin() == GREY) {
    print('Draw', canvas.width / 2 - 60, 120, GREY, 'center')
    playing = false;
  }
}

function print (text, x, y, color, align) {
  context.font = 'lighter 50px Open Sans';
  context.fillStyle = color;
  context.fillText(text, x, y);
}

function drawBoard () {
  for (x = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
      context.beginPath();
      context.fillStyle = board[x][y].color;
      context.fillRect(board[x][y].x - WIDTH / 2, board[x][y].y - HEIGHT / 2, HEIGHT, WIDTH);
      context.closePath();
    }
  }
}

function clear () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}