export default class Online {
  constructor (gameType, firebase) {
    this.gameType = gameType;
    this.playerId = this.guid('player');
    this.retrievedGameId = false;
    this.firebase = firebase;
  }
  guid (type) {
    function randChar(count) {
      let adder = '';
      for (var i = 0; i < count; i += 1) {
        adder += '0';
      }

      return Math.floor((1 + Math.random()) * parseInt('0x1' + adder)).toString(16).substring(1);
    }

    if (type == 'server') {
      return randChar(6) + '-' + randChar(4) + '-' + randChar(8);
    }
    else {
      return randChar(8) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(12);
    }
  }

  pushData (thisGame) {
    var newData = this.format(thisGame);
    // newData[players] = {}
    this.firebase.database().ref('games/' + thisGame.gameId + '/').set(newData);
  }

  searchForGames () {
    this.firebase.database().ref('games/').once('value', function(snapshot) {
      let gameObject = snapshot.val();
      let gameArray = Object.keys(gameObject).map(key => gameObject[key]);
      for (var game = 0; game < gameArray.length; game += 1) {
        if (gameArray[game].state == 'unpaired') {
          console.log(gameArray[game].gameId);
          return gameArray[game].gameId;
        }
      }
    });
  }

  format (thisGame) {
    return {
      gameId : thisGame.gameId,
      data : thisGame.data,
      turn : thisGame.turn,
      players : {},
      state : thisGame.state,
      moveCount : thisGame.tester.moveCount(thisGame.data),
      dimensions : {
        height : thisGame.tester.height,
        width : thisGame.tester.width
      }
    }
  }
}
