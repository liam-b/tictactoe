// require('immutable');
// require('firebase');

import WinTest from './winTest.js';
// var ai = require('./ai.js');

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var GREY = '#909090';
var BACKGROUND = '#d9d9d9';
var BLUE = '#4faddb';
var RED = '#db4f4f';

var WIDTH = 100;
var HEIGHT = 100;
var OFFSET = 105;

var CENTER_X = canvas.width / 2;
var CENTER_Y = canvas.height / 2;

var turn = 'player';
var playing = true;
var move = 0;
var lastMove = 'player';

var squareX = CENTER_X - OFFSET * 2;
var squareY = CENTER_Y - OFFSET * 2;

var board = [];
for (var x = 0; x < 3; x++) {
  board[x] = []
  squareX = squareX + OFFSET;
  for (var y = 0; y < 3; y++) {
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
  // if (testForWin() == false && turn == 'ai') {
  //   aiMove();
  // }
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
    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {  
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
  var winner = new WinTest(board).testForWin();
  
  if (winner == 'player') {
    print('Blue wins', canvas.width / 2 - 110, 120, BLUE, 'lighter', '50px')
  }
  else if (winner == 'ai') {
    print('Red wins', canvas.width / 2 - 100, 120, RED, 'lighter', '50px')
  }
  else if (winner == '') {
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
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
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
