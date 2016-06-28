String.prototype.replace = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

export default class Ai {
  constructor(tester, board) {
    this.tester = tester;
  }

  moveRandom (game) {
    let randomMove = Math.floor(Math.random() * 9)
    if (game.isEmpty(randomMove)) {
      game = game.playMove(randomMove, 'O');
      return game;
    }
    else {
      return this.moveRandom(game);
    }
  }

  playMinimax (game) {
    console.log('-----')
    let bestGame = null
    let bestScore = -Infinity

    for (var move = 0; move < 9; ++move) {
      if (game.isEmpty(move)) {
        let newGame = game.playMove(move, 'O')
        let gameScore = this.scoreMinimax(newGame)
        console.log(move + ' | ' + gameScore);

        if (gameScore >= bestScore) {
          bestGame = newGame
          bestScore = gameScore
          console.log(bestGame)
        }
      }
    }
    return bestGame;
  }

  score (game) {
    if (game.whoWon() === 'O') {
      return 10;
    }
    else if (game.whoWon() === 'X') {
      return -10;
    }
    return 0;
  }

  scoreMinimax (game, turn) {
    if (!game.playing()) {
      return this.score(game);
    }

    if (turn === 'O') {
      // max
      let bestScore = -Infinity;
      for (var move = 0; move < 9; move++) {
        if (game.isEmpty(move)) {
          let score = this.scoreMinimax(game.playMove(move, 'O'), 'X');
          if (score > bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore
    }
    else {
      // min
      let bestScore = Infinity;
      for (var move = 0; move < 9; move++) {
        if (game.isEmpty(move)) {
          let score = this.scoreMinimax(game.playMove(move, 'X'), 'O');
          if (score < bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore
    }
  }
};
