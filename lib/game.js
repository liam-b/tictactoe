String.prototype.replace = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

export default class Game {
  constructor (tester, turn, data, player) {
    this.tester = tester
    this.data = data || '_________'
    this.turn = turn || '_'
    this.state = 'unpaired'
    this.gameId = ''
  }

  playing () {
    return this.whoWon() === 'nobody';
  }

  playMove (index, character) {
    let data = this.data.slice(0)
    data = data.replace(index, character)
    return new Game(this.tester, this.turn, data)
  }

  whoWon () {
    return this.tester.whoWon(this.data);
  }

  isEmpty (index) {
    if (this.data.charAt(index) == '_') {
      return true;
    }
    return false;
  }

  moveAt (index) {
    return this.data.charAt(index);
  }

  clear () {
    this.data = '_________'
    this.turn = '_'
  }
};
