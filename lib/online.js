export default class Online {
  constructor (type, firebase) {
    this.type = type
    this.state = 'none'
    this.gameId = ''
    this.retrievedGameId = false
    this.firebase = firebase
    this.joined = ''
    this.foundGame = false
    this.text = ''
  }
  guid () {
    function randChar(count) {
      let adder = ''
      for (var i = 0; i < count; i += 1) {
        adder += '0'
      }

      return Math.floor((1 + Math.random()) * parseInt('0x1' + adder)).toString(16).substring(1)
    }

    return randChar(8) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(12)
  }

  pushData (thisGame) {
    this.firebase.database().ref('games/' + thisGame.owner + '/').set(thisGame)
  }

  pushNewGame (newGuid) {
    var newData = {
      owner : newGuid,
      data : '_________',
      turn : '',
      guest : '',
      state : 'unpaired',
      moves : 0
    }

    this.firebase.database().ref('games/' + newGuid + '/').set(newData)
  }

  pullData (key) {
    return this.firebase.database().ref('games/' + key + '/').once('value').then((snapshot) => {
      return snapshot.val()
    })
  }

  searchForGames () {
    return this.firebase.database().ref('games/').once('value').then((snapshot) => {
      let gameObject = snapshot.val()
      let gameArray = Object.keys(gameObject).map(key => gameObject[key])
      for (var game = 0; game < gameArray.length; game += 1) {
        if (gameArray[game].state == 'unpaired') {
          return gameArray[game]
        }
      }
      return 'none'
    })
  }
}
