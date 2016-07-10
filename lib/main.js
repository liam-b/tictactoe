import Board from './board.js'
import Tester from './tester.js'
import Ai from './ai.js'
import Game from './game.js'
import Player from './player.js'
import Online from './online.js'

String.prototype.replace = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

window.canvas = document.getElementById('myCanvas');
window.context = window.canvas.getContext('2d');

var mouse = {
  x : 0,
  y : 0
}

var online = new Online('online', firebase)
var board = new Board(3, 3)
var tester = new Tester(board)
var game = new Game(tester)
var player = new Player('X', online.guid())
var ai = new Ai('O', player, 1)
console.warn('there may be a whole bunch of errors and firebase warinings, ignore those')

if (online.type == 'online') {
  online.searchForGames().then((foundGame) => {
    if (foundGame == 'none') {
      online.state = 'host'
      online.gameId = online.guid()
      player.id = online.gameId
      online.pushNewGame(online.gameId)
      console.log('opened new game at ' + online.gameId)
    }
    else {
      console.log('found game ' + foundGame.owner)
      online.state = 'guest'
      let onlineTemp = foundGame
      online.gameId = foundGame.owner
      onlineTemp.turn = player.id
      onlineTemp.guest = player.id
      onlineTemp.state = 'paired'
      online.pushData(onlineTemp)
    }
    online.foundGame = true
  })
}
else {
  game.turn = player.character
}

function draw () {
  if (game.turn == ai.character && game.playing()) {
    game.turn = player.character + '*';
    game = ai.playMove(game);
    game.turn = player.character;
    // setTimeout(function () {
    //   game = ai.playMove(game);
    //   game.turn = player.character;
    // }, 100 + Math.floor((Math.random() * 700) + 1));
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
        if (ai.level != 5) {
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
      board.print('Draw!', 390, 110, '#909090', 'normal', '80px')
    }
  }
}

function drawOnline () {
  if (online.foundGame) {
    online.pullData(online.gameId).then((pulledData) => {
      if (pulledData != null) {
        var newData = ''1
        for (var i = 0; i < 9; i += 1) {
          if (pulledData.data.charAt(i) == 'h') {
            if (online.state == 'host') {
              newData += 'X'
            }
            else {
              newData += 'O'
            }
          }
          else if (pulledData.data.charAt(i) == 'g') {
            if (online.state == 'host') {
              newData += 'O'
            }
            else {
              newData += 'X'
            }
          }
          else {
            newData += '_'
          }
        }
        game.data = newData
        board.drawGame(game, ai);
      }

      requestAnimationFrame(drawOnline)

      // if (pulledData != null && pulledData.state == 'closed') {
      //   console.log('ahh! disconnected!')
      //   online.state = 'disconnected'
      // }
      //
      // if (online.state != 'disconnected') {
      // }
    })
  }
  else {
    requestAnimationFrame(drawOnline)
  }
}

if (online.type == 'online') {
  drawOnline()
}
else {
  console.warn('things went bad')
  draw()
}

window.addEventListener('mousemove', mousePosition, false);
canvas.addEventListener('mousedown', mouseClick, false);

function mousePosition (event) {
  var rect = canvas.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
}

function mouseClick (event) {
  if (game.turn == player.character || online.type == 'online') {
    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        if (mouse.x > board.squares[y][x].x - board.squareWidth / 2 && mouse.x < board.squares[y][x].x + board.squareWidth / 2) {
          if (mouse.y > board.squares[y][x].y - board.squareHeight / 2 && mouse.y < board.squares[y][x].y + board.squareHeight / 2) {
            if (online.type == 'offline') {
              console.log(x + y * 3);
              if (game.isEmpty(x + y * 3)) {
                game = game.playMove(x + y * 3, player.character);
                game.turn = ai.character;
              }
            }
            else {
              var position = x + y * 3
              online.pullData(online.gameId).then((pulledData) => {
                let onlineTemp = pulledData
                console.log(onlineTemp.turn, player.id)
                if (onlineTemp.turn == player.id) {
                  if (onlineTemp.data.charAt(position) == '_') {
                    if (online.state == 'host') {
                      onlineTemp.data = onlineTemp.data.replace(position, 'h')
                      onlineTemp.turn = onlineTemp.guest
                    }
                    else if (online.state == 'guest') {
                      onlineTemp.data = onlineTemp.data.replace(position, 'g')
                      onlineTemp.turn = onlineTemp.owner
                    }
                    online.pushData(onlineTemp)
                    console.log(onlineTemp)
                  }
                }
              })
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
