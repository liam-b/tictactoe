import Board from './board.js'
import Tester from './tester.js'
import Ai from './ai.js'
import Game from './game.js'

String.prototype.replace = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

window.canvas = document.getElementById('myCanvas');
window.context = window.canvas.getContext('2d');

var mouse = {
  x : 0,
  y : 0
}

var board = new Board(3, 3);
var tester = new Tester(board);
var ai = new Ai(tester, board);
var game = new Game(tester);
game.turn = 'X';
function draw () {
  if (game.turn == 'O' && game.playing()) {
    // game = game.playMove(1, 'X')
    // console.log('final : ' + ai.scoreMinimax(game));
    game = ai.playMinimax(game);
    game.turn = 'X';
  }

  board.drawGame(game);

  if (game.playing()) {
    requestAnimationFrame(draw);
  }
  else {
    game.turn = 'nobody';
    console.log('the winner is : ' + game.whoWon() + ', in move set : ' + game.data + '!');
  }
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
  if (game.turn == 'X') {
    var i = -2;
    for (var x = 0; x < 3; x++) {
      i++;
      for (var y = 0; y < 3; y++) {
        i++;
        if (mouse.x > board.squares[y][x].x - board.squareWidth / 2 && mouse.x < board.squares[y][x].x + board.squareWidth / 2) {
          if (mouse.y > board.squares[y][x].y - board.squareHeight / 2 && mouse.y < board.squares[y][x].y + board.squareHeight / 2) {
            if (game.isEmpty(x + y * 3)) {
              game = game.playMove(x + y * 3, 'X');
              game.turn = 'O';
            }
          }
        }
      }
    }
  }
}
