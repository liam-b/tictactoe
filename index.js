!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register('2', ['3', '4'], function (_export) {
  var _createClass, _classCallCheck, GREY, BACKGROUND, BLUE, RED, SQUARE_WIDTH, SQUARE_HEIGHT, SQUARE_OFFSET, Board;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }],
    execute: function () {
      'use strict';

      GREY = '#909090';
      BACKGROUND = '#d9d9d9';
      BLUE = '#4faddb';
      RED = '#db4f4f';
      SQUARE_WIDTH = 100;
      SQUARE_HEIGHT = 100;
      SQUARE_OFFSET = 105;

      Board = (function () {
        function Board(width, height) {
          _classCallCheck(this, Board);

          this.width = width;
          this.height = height;

          this.squareWidth = 100;
          this.squareHeight = 100;

          this.CENTER_X = window.canvas.width / 2;
          this.CENTER_Y = window.canvas.height / 2;
          this.setupBoard();
          this.drawBoard();
        }

        _createClass(Board, [{
          key: 'setupBoard',
          value: function setupBoard() {
            this.squares = [];

            var squareX = this.CENTER_X - SQUARE_OFFSET * 2;
            var squareY = this.CENTER_Y - SQUARE_OFFSET * 2;

            for (var x = 0; x < this.width; x++) {
              squareX = squareX + SQUARE_OFFSET;
              this.squares[x] = [];
              for (var y = 0; y < this.height; y++) {
                squareY = squareY + SQUARE_OFFSET;
                this.squares[x][y] = { x: squareX, y: squareY };
              }
              squareY = this.CENTER_Y - SQUARE_OFFSET * 2;
            }
          }
        }, {
          key: 'drawBoard',
          value: function drawBoard() {
            window.context.fillStyle = GREY;
            window.context.fillRect(this.CENTER_X - 155, this.CENTER_Y - 155, 310, 310);

            for (var x = 0; x < this.width; x++) {
              for (var y = 0; y < this.height; y++) {
                window.context.fillStyle = BACKGROUND;
                window.context.fillRect(this.squares[x][y].x - SQUARE_WIDTH / 2, this.squares[x][y].y - SQUARE_HEIGHT / 2, SQUARE_HEIGHT, SQUARE_WIDTH);
              }
            }
          }
        }, {
          key: 'print',
          value: function print(text, x, y, color, type, size) {
            context.font = type + ' ' + size + ' Open Sans';
            context.fillStyle = color;
            context.fillText(text, x, y);
          }
        }, {
          key: 'drawGame',
          value: function drawGame(game, ai) {
            window.context.fillStyle = '#d9d9d9';
            window.context.fillRect(window.canvas.width / 2 - 469, window.canvas.height / 2 - 500, 510, 310);
            var levelText = '';

            if (ai.level) {
              switch (ai.level) {
                case 1:
                  levelText = 'Novice';
                  break;
                case 2:
                  levelText = 'Intermediate';
                  break;
                case 3:
                  levelText = 'Expert';
                  break;
                case 4:
                  levelText = 'Unbeatable';
                  break;
                case 5:
                  levelText = 'Incomprehensible';
                  break;
                case 6:
                  levelText = 'Unintelligible';
                  break;
              }
              this.print('AI level: ' + levelText, 50, 70, '#909090', 'normal', '25px');
            } else {
              this.print(ai.text, 50, 70, '#909090', 'normal', '25px');
            }

            var i = 0;
            for (var x = 0; x < this.width; ++x) {
              for (var y = 0; y < this.height; ++y) {
                if (i < game.data.length) {
                  var value = game.data.charAt(i++);
                  if (value != '_') {
                    if (value == 'X') {
                      this.print('X', this.squares[x][y].x - 27, this.squares[x][y].y + 30, BLUE, 'bold', '80px');
                    } else {
                      this.print('O', this.squares[x][y].x - 32, this.squares[x][y].y + 30, RED, 'bold', '80px');
                    }
                  }
                }
              }
            }
          }
        }, {
          key: 'reset',
          value: function reset(game) {
            this.drawBoard();
            window.context.fillStyle = '#d9d9d9';
            window.context.fillRect(window.canvas.width / 2 - 155, window.canvas.height / 2 - 500, 310, 310);
          }
        }]);

        return Board;
      })();

      _export('default', Board);

      ;
    }
  };
});
$__System.register('5', ['3', '4'], function (_export) {
  var _createClass, _classCallCheck, Tester;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }],
    execute: function () {
      'use strict';

      Tester = (function () {
        function Tester(board) {
          _classCallCheck(this, Tester);

          this.width = board.width;
          this.height = board.height;
        }

        _createClass(Tester, [{
          key: 'whoWon',
          value: function whoWon(moves) {
            this.moves = moves;

            if (this._wonVertical('X') || this._wonHorizontal('X') || this._wonDiagonal('X')) {
              return 'X';
            } else if (this._wonVertical('O') || this._wonHorizontal('O') || this._wonDiagonal('O')) {
              return 'O';
            } else if (this.moves.indexOf('_') < 0) {
              return 'draw';
            } else {
              return 'nobody';
            }
          }
        }, {
          key: '_wonVertical',
          value: function _wonVertical(color) {
            for (var y = 0; y < this.height; y++) {
              var vertical = 0;
              for (var x = 0; x < this.width; x++) {
                var index = y * this.width + x;
                if (this.moves.charAt(index) == color) {
                  vertical = vertical + 1;
                }
              }
              if (vertical == 3) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: '_wonHorizontal',
          value: function _wonHorizontal(color) {
            for (var y = 0; y < this.height; y++) {
              var horizontal = 0;
              for (var x = 0; x < this.width; x++) {
                var index = x * this.height + y;
                if (this.moves.charAt(index) == color) {
                  horizontal = horizontal + 1;
                }
              }
              if (horizontal == 3) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: '_wonDiagonal',
          value: function _wonDiagonal(color) {
            var count = 0;
            for (var i = 0; i < this.height * 3; i++) {
              if (i % 4 == 0) {
                if (this.moves.charAt(i) == color) {
                  count++;
                }
              }
            }

            if (count == 3) {
              return true;
            } else {
              count = 0;
            }

            for (var i = 2; i < this.height * 3 - 1; i += 2) {
              if (this.moves.charAt(i) == color) {
                count++;
              }
            }

            if (count == 3) {
              return true;
            }

            return false;
          }
        }, {
          key: 'moveCount',
          value: function moveCount(moves) {
            var moveCount = 0;
            for (var move = 0; move < 9; move += 1) {
              if (moves.charAt(move) != '_') {
                moveCount += 1;
              }
            }
            return moveCount;
          }
        }]);

        return Tester;
      })();

      _export('default', Tester);

      ;
    }
  };
});
$__System.register("6", ["3", "4"], function (_export) {
  var _createClass, _classCallCheck, Ai;

  return {
    setters: [function (_) {
      _createClass = _["default"];
    }, function (_2) {
      _classCallCheck = _2["default"];
    }],
    execute: function () {
      "use strict";

      String.prototype.replace = function (index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
      };

      Array.prototype.max = function () {
        return Math.max.apply(null, this);
      };

      Array.prototype.min = function () {
        return Math.min.apply(null, this);
      };

      Ai = (function () {
        function Ai(character, player, level) {
          _classCallCheck(this, Ai);

          this.character = character;
          this.player = player;
          this.level = level;
        }

        _createClass(Ai, [{
          key: "playMove",
          value: function playMove(game) {
            switch (this.level) {
              case 5:
                return this.playUnbeatable(game);
                break;
              case 4:
                return this.playMinimax(game);
                break;
              case 3:
                return this.playWinningAndBlockingMove(game);
                break;
              case 2:
                return this.playWinningMove(game);
                break;
              case 1:
                return this.playRandom(game);
                break;
            }
          }
        }, {
          key: "playUnbeatable",
          value: function playUnbeatable(game) {
            for (var move = 0; move < 9; ++move) {
              if (game.isEmpty(move)) {
                game = game.playMove(move, this.character);
              }
            }
            return game;
          }
        }, {
          key: "playRandom",
          value: function playRandom(game) {
            var randomMove = Math.floor(Math.random() * 9);
            if (game.isEmpty(randomMove)) {
              game = game.playMove(randomMove, this.character);
              return game;
            } else {
              return this.playRandom(game);
            }
          }
        }, {
          key: "playWinningMove",
          value: function playWinningMove(game) {
            for (var move = 0; move < 9; ++move) {
              if (game.isEmpty(move)) {
                var newGame = game.playMove(move, this.character);
                if (newGame.whoWon() == this.character) {
                  return newGame;
                }
              }
            }
            return this.playRandom(game);
          }
        }, {
          key: "playWinningAndBlockingMove",
          value: function playWinningAndBlockingMove(game) {
            for (var move = 0; move < 9; ++move) {
              if (game.isEmpty(move)) {
                var newGame = game.playMove(move, this.player.character);
                if (newGame.whoWon() == this.player.character) {
                  return newGame.playMove(move, this.character);
                }
              }
            }
            return this.playWinningMove(game);
          }
        }, {
          key: "playMinimax",
          value: function playMinimax(game) {
            var bestGame = null;
            var bestScore = -Infinity;

            for (var move = 0; move < 9; ++move) {
              if (game.isEmpty(move)) {
                var newGame = game.playMove(move, this.character);
                var gameScore = this.scoreMinimax(newGame);

                if (gameScore >= bestScore) {
                  bestGame = newGame;
                  bestScore = gameScore;
                }
              }
            }
            return bestGame;
          }
        }, {
          key: "score",
          value: function score(game) {
            if (game.whoWon() === this.character) {
              return 10;
            } else if (game.whoWon() === this.player.character) {
              return -10;
            }
            return 0;
          }
        }, {
          key: "scoreMinimax",
          value: function scoreMinimax(game, turn) {
            if (!game.playing()) {
              return this.score(game);
            }

            if (turn === this.character) {
              var bestScore = -Infinity;
              for (var move = 0; move < 9; move++) {
                if (game.isEmpty(move)) {
                  var score = this.scoreMinimax(game.playMove(move, this.character), this.player.character);
                  if (score > bestScore) {
                    bestScore = score;
                  }
                }
              }
              return bestScore;
            } else {
              var bestScore = Infinity;
              for (var move = 0; move < 9; move++) {
                if (game.isEmpty(move)) {
                  var score = this.scoreMinimax(game.playMove(move, this.player.character), this.character);
                  if (score < bestScore) {
                    bestScore = score;
                  }
                }
              }
              return bestScore;
            }
          }
        }]);

        return Ai;
      })();

      _export("default", Ai);
    }
  };
});
$__System.register('7', ['3', '4'], function (_export) {
  var _createClass, _classCallCheck, Game;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }],
    execute: function () {
      'use strict';

      String.prototype.replace = function (index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
      };

      Game = (function () {
        function Game(tester, turn, data, gameId, playerTurn, state) {
          _classCallCheck(this, Game);

          this.tester = tester;
          this.data = data || '_________';
          this.turn = turn || '_';
          this.state = state || 'unpaired';
          this.playerTurn = playerTurn || '_';
          this.gameId = gameId || '_';
        }

        _createClass(Game, [{
          key: 'playing',
          value: function playing() {
            return this.whoWon() === 'nobody';
          }
        }, {
          key: 'playMove',
          value: function playMove(index, character) {
            var data = this.data.slice(0);
            data = data.replace(index, character);
            return new Game(this.tester, this.turn, data, this.gameId, this.playerTurn, this.state);
          }
        }, {
          key: 'whoWon',
          value: function whoWon() {
            return this.tester.whoWon(this.data);
          }
        }, {
          key: 'isEmpty',
          value: function isEmpty(index) {
            if (this.data.charAt(index) == '_') {
              return true;
            }
            return false;
          }
        }, {
          key: 'moveAt',
          value: function moveAt(index) {
            return this.data.charAt(index);
          }
        }, {
          key: 'clear',
          value: function clear() {
            this.data = '_________';
            this.turn = '_';
          }
        }]);

        return Game;
      })();

      _export('default', Game);
    }
  };
});
$__System.register("8", ["4"], function (_export) {
  var _classCallCheck, Player;

  return {
    setters: [function (_) {
      _classCallCheck = _["default"];
    }],
    execute: function () {
      "use strict";

      Player = function Player(character, id) {
        _classCallCheck(this, Player);

        this.character = character;
        this.id = id;
      };

      _export("default", Player);

      ;
    }
  };
});
$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('9');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("b", ["a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('a'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("3", ["b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('b')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("d", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('c');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("10", ["f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('f');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("11", ["e", "12", "10"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('e'),
      core = $__require('12'),
      ctx = $__require('10'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("14", ["11", "12", "13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('11'),
      core = $__require('12'),
      fails = $__require('13');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("15", ["d", "14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('d');
  $__require('14')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("16", ["15", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('15');
  module.exports = $__require('12').Object.keys;
  return module.exports;
});

$__System.registerDynamic("17", ["16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('16'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('18', ['3', '4', '17'], function (_export) {
  var _createClass, _classCallCheck, _Object$keys, Online;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_3) {
      _Object$keys = _3['default'];
    }],
    execute: function () {
      'use strict';

      Online = (function () {
        function Online(type, firebase) {
          _classCallCheck(this, Online);

          this.type = type;
          this.state = 'none';
          this.gameId = '';
          this.retrievedGameId = false;
          this.firebase = firebase;
          this.joined = '';
          this.foundGame = false;
          this.text = '';
        }

        _createClass(Online, [{
          key: 'guid',
          value: function guid() {
            function randChar(count) {
              var adder = '';
              for (var i = 0; i < count; i += 1) {
                adder += '0';
              }

              return Math.floor((1 + Math.random()) * parseInt('0x1' + adder)).toString(16).substring(1);
            }

            return randChar(8) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(4) + '-' + randChar(12);
          }
        }, {
          key: 'pushData',
          value: function pushData(thisGame) {
            this.firebase.database().ref('games/' + thisGame.owner + '/').set(thisGame);
          }
        }, {
          key: 'pushNewGame',
          value: function pushNewGame(newGuid) {
            var newData = {
              owner: newGuid,
              data: '_________',
              turn: '',
              guest: '',
              state: 'unpaired',
              moves: 0
            };

            this.firebase.database().ref('games/' + newGuid + '/').set(newData);
          }
        }, {
          key: 'pullData',
          value: function pullData(key) {
            return this.firebase.database().ref('games/' + key + '/').once('value').then(function (snapshot) {
              return snapshot.val();
            });
          }
        }, {
          key: 'searchForGames',
          value: function searchForGames() {
            return this.firebase.database().ref('games/').once('value').then(function (snapshot) {
              var gameObject = snapshot.val();
              var gameArray = _Object$keys(gameObject).map(function (key) {
                return gameObject[key];
              });
              for (var game = 0; game < gameArray.length; game += 1) {
                if (gameArray[game].state == 'unpaired') {
                  return gameArray[game];
                }
              }
              return 'none';
            });
          }
        }]);

        return Online;
      })();

      _export('default', Online);
    }
  };
});
$__System.register('1', ['2', '5', '6', '7', '8', '18'], function (_export) {
  'use strict';

  var Board, Tester, Ai, Game, Player, Online, mouse, online, board, tester, game, player, ai;

  function findOnlineGame() {
    online.foundGame = false;
    online.text = 'Searching for game';
    board.drawGame(game, online);
    setTimeout(function () {
      online.searchForGames().then(function (foundGame) {
        if (foundGame == 'none') {
          online.text = 'Hosting game';
          board.drawGame(game, online);
          online.state = 'host';
          online.gameId = online.guid();
          player.id = online.gameId;
          online.pushNewGame(online.gameId);
          console.log('opened new game at ' + online.gameId);
        } else {
          online.text = 'Joining game';
          board.drawGame(game, online);
          console.log('found game ' + foundGame.owner);
          online.state = 'guest';
          var onlineTemp = foundGame;
          online.gameId = foundGame.owner;
          onlineTemp.turn = player.id;
          onlineTemp.guest = player.id;
          onlineTemp.state = 'paired';
          online.pushData(onlineTemp);
        }
        online.foundGame = true;
      });
    }, 1000);
  }

  function draw() {
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
    } else {
      game.turn = 'nobody';
      var winner = game.whoWon();
      if (winner != 'draw') {
        if (winner == 'X') {
          if (ai.level != 5) {
            ai.level += 1;
          }
          board.print(winner + ' wins!', 380, 110, '#4faddb', 'normal', '80px');
          console.log('the winner is : ' + winner + ', in move set : ' + game.data + '!');
        } else {
          if (ai.level == 5) {
            ai.level += 1;
          }
          board.print(winner + ' wins!', 380, 110, '#db4f4f', 'normal', '80px');
          console.log('the winner is : ' + winner + ', in move set : ' + game.data + '!');
        }
      } else {
        board.print('Draw!', 390, 110, '#909090', 'normal', '80px');
      }
    }
  }

  function drawOnline() {
    if (online.foundGame) {
      online.pullData(online.gameId).then(function (pulledData) {
        if (pulledData != null) {
          var newData = '';
          for (var i = 0; i < 9; i += 1) {
            if (pulledData.data.charAt(i) == 'h') {
              if (online.state == 'host') {
                newData += 'X';
              } else {
                newData += 'O';
              }
            } else if (pulledData.data.charAt(i) == 'g') {
              if (online.state == 'host') {
                newData += 'O';
              } else {
                newData += 'X';
              }
            } else {
              newData += '_';
            }
          }
          game.data = newData;

          if (pulledData.state == 'unpaired') {
            online.text = 'Waiting for player';
          } else if (pulledData.state == 'paired') {
            online.text = 'Connected and playing';
          }
        } else {
          online.state = 'disconnected';
          online.text = 'Disconnected';
        }

        board.drawGame(game, online);

        if (!game.playing()) {
          online.text = 'Game over';
          var winner = game.whoWon();
          if (winner != 'draw') {
            if (winner == 'X') {
              board.print(winner + ' wins!', 380, 110, '#4faddb', 'normal', '80px');
            } else {
              board.print(winner + ' wins!', 380, 110, '#db4f4f', 'normal', '80px');
            }
          } else {
            board.print('Draw!', 390, 110, '#909090', 'normal', '80px');
          }
          setTimeout(function () {
            online.text = 'Rejoining new game';
            setTimeout(function () {
              board.reset();
              if (online.state == 'host') {
                firebase.database().ref('games/' + online.gameId + '/').set(null);
              }
              findOnlineGame();
            }, 1000);
          }, 1000);
        } else {
          requestAnimationFrame(drawOnline);
        }
      });
    } else {
      requestAnimationFrame(drawOnline);
    }
  }

  function mousePosition(event) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  }

  function mouseClick(event) {
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
              } else {
                var position = x + y * 3;
                online.pullData(online.gameId).then(function (pulledData) {
                  var onlineTemp = pulledData;
                  console.log(onlineTemp.turn, player.id);
                  if (onlineTemp.turn == player.id) {
                    if (onlineTemp.data.charAt(position) == '_') {
                      if (online.state == 'host') {
                        onlineTemp.data = onlineTemp.data.replace(position, 'h');
                        onlineTemp.turn = onlineTemp.guest;
                      } else if (online.state == 'guest') {
                        onlineTemp.data = onlineTemp.data.replace(position, 'g');
                        onlineTemp.turn = onlineTemp.owner;
                      }
                      online.pushData(onlineTemp);
                      console.log(onlineTemp);
                    }
                  }
                });
              }
            }
          }
        }
      }
    } else if (game.turn == 'nobody') {
      board.reset();
      game.clear();
      game.turn = player.character;
      draw();
    }
  }
  return {
    setters: [function (_) {
      Board = _['default'];
    }, function (_2) {
      Tester = _2['default'];
    }, function (_3) {
      Ai = _3['default'];
    }, function (_4) {
      Game = _4['default'];
    }, function (_5) {
      Player = _5['default'];
    }, function (_6) {
      Online = _6['default'];
    }],
    execute: function () {

      String.prototype.replace = function (index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
      };

      window.canvas = document.getElementById('myCanvas');
      window.context = window.canvas.getContext('2d');

      mouse = {
        x: 0,
        y: 0
      };
      online = new Online('offline', 'null');
      // firebase for second slot
      board = new Board(3, 3);
      tester = new Tester(board);
      game = new Game(tester);
      player = new Player('X', online.guid());
      ai = new Ai('O', player, 1);

      console.warn('there may be a whole bunch of errors and firebase warinings, ignore those');

      if (online.type == 'online') {
        online.text = 'Connencting to server';
        board.drawGame(game, online);
        findOnlineGame();
      } else {
        game.turn = player.character;
      }if (online.type == 'online') {
        drawOnline();
      } else {
        console.warn('things went bad');
        draw();
      }

      window.addEventListener('mousemove', mousePosition, false);
      canvas.addEventListener('mousedown', mouseClick, false);
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map
