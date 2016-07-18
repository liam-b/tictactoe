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
  constructor(character, player, level) {
    this.character = character;
    this.player = player;
    this.level = level
  }

  playMove (game) {
    switch (this.level) {
      case  6:
        throw 'you cant beat me so dont even try';
        break;
      case 5:
        return this.playUnbeatable(game);
        break;
      case 4:
        return this.playMinimax(game);
        break;
      case  3:
        return this.playWinningAndBlockingMove(game);
        break;
      case  2:
        return this.playWinningMove(game);
        break;
      case  1:
        return this.playRandom(game);
        break;
    }
  }

  playUnbeatable (game) {
    for (var move = 0; move < 9; ++move) {
      if (game.isEmpty(move)) {
        game = game.playMove(move, this.character)
      }
    }
    return game
  }

  playRandom (game) {
    let randomMove = Math.floor(Math.random() * 9)
    if (game.isEmpty(randomMove)) {
      game = game.playMove(randomMove, this.character);
      return game;
    }
    else {
      return this.playRandom(game);
    }
  }

  playWinningMove (game) {
    for (var move = 0; move < 9; ++move) {
      if (game.isEmpty(move)) {
        let newGame = game.playMove(move, this.character)
        if (newGame.whoWon() == this.character) {
          return newGame
        }
      }
    }
    return this.playRandom(game)
  }

  playWinningAndBlockingMove (game) {
    for (var move = 0; move < 9; ++move) {
      if (game.isEmpty(move)) {
        let newGame = game.playMove(move, this.player.character)
        if (newGame.whoWon() == this.player.character) {
          return newGame.playMove(move, this.character)
        }
      }
    }
    return this.playWinningMove(game)
  }

  playMinimax (game) {
    let bestGame = null
    let bestScore = -Infinity

    for (var move = 0; move < 9; ++move) {
      if (game.isEmpty(move)) {
        let newGame = game.playMove(move, this.character)
        let gameScore = this.scoreMinimax(newGame)

        if (gameScore >= bestScore) {
          bestGame = newGame
          bestScore = gameScore
        }
      }
    }
    return bestGame;
  }

  score (game) {
    if (game.whoWon() === this.character) {
      return 10;
    }
    else if (game.whoWon() === this.player.character) {
      return -10;
    }
    return 0;
  }

  scoreMinimax (game, turn) {
    if (!game.playing()) {
      return this.score(game);
    }

    if (turn === this.character) {
      let bestScore = -Infinity;
      for (var move = 0; move < 9; move++) {
        if (game.isEmpty(move)) {
          let score = this.scoreMinimax(game.playMove(move, this.character), this.player.character);
          if (score > bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore
    }
    else {
      let bestScore = Infinity;
      for (var move = 0; move < 9; move++) {
        if (game.isEmpty(move)) {
          let score = this.scoreMinimax(game.playMove(move, this.player.character), this.character);
          if (score < bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore
    }
  }
}
