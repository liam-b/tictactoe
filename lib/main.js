import Board from './board.js'
import Tester from './tester.js'
import Ai from './ai.js'
import Game from './game.js'
import Player from './player.js'

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
var game = new Game(tester);
var player = new Player('X');
var ai = new Ai('O', player, 1);

game.turn = player.character;

function draw () {
  if (game.turn == ai.character && game.playing()) {
    game.turn = player.character + '*';
    setTimeout(function () {
      game = ai.playMove(game);
      game.turn = player.character;
    }, 100 + Math.floor((Math.random() * 700) + 1));
  }

  board.drawGame(game, ai);

  if (game.playing()) {
    requestAnimationFrame(draw);
  }
  else {
    game.turn = 'nobody'
    let winner = game.whoWon()
    if (winner != 'draw') {
      if (winner == 'X') {
        if (ai.level != 4) {
          ai.level += 1
        }
        board.print(winner + ' wins!', 380, 110, '#4faddb', 'normal', '80px')
        console.log('the winner is : ' + winner + ', in move set : ' + game.data + '!')
      }
      else {
        if (ai.level == 5) {
          ai.level += 1
        }
        board.print(winner + ' wins!', 380, 110, '#db4f4f', 'normal', '80px')
        console.log('the winner is : ' + winner + ', in move set : ' + game.data + '!')
      }
    }
    else {
      if (ai.level == 4) {
        ai.level += 1
      }
      board.print('Draw!', 390, 110, '#909090', 'normal', '80px')
    }
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
  if (game.turn == player.character) {
    var i = -2;
    for (var x = 0; x < 3; x++) {
      i++;
      for (var y = 0; y < 3; y++) {
        i++;
        if (mouse.x > board.squares[y][x].x - board.squareWidth / 2 && mouse.x < board.squares[y][x].x + board.squareWidth / 2) {
          if (mouse.y > board.squares[y][x].y - board.squareHeight / 2 && mouse.y < board.squares[y][x].y + board.squareHeight / 2) {
            if (game.isEmpty(x + y * 3)) {
              game = game.playMove(x + y * 3, player.character);
              game.turn = ai.character;
            }
          }
        }
      }
    }
  }
  else if (game.turn == 'nobody') {
    board.reset()
    game.clear()
    game.turn = player.character
    draw()
  }
}
