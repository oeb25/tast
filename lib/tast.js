'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tast = (function () {
  function Tast(state) {
    _classCallCheck(this, Tast);

    this.state = state || [];
  }

  _createClass(Tast, [{
    key: 'listen',
    value: function listen() {
      var _this = this;

      var elm = arguments[0] === undefined ? window : arguments[0];

      var handleKey = function handleKey(e) {
        _this.state[e.which] = e.type === 'keydown';
      };

      elm.addEventListener('keydown', handleKey);
      elm.addEventListener('keyup', handleKey);

      return this;
    }
  }, {
    key: 'down',
    value: function down(id) {
      return !!this.state[id];
    }
  }, {
    key: 'up',
    value: function up(id) {
      return !this.state[id];
    }
  }, {
    key: 'save',
    value: function save() {
      return new Tast(this.state.slice());
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.state = [];
    }
  }]);

  return Tast;
})();

exports['default'] = Tast;
var KEYS = {
  SPACE: 32,

  A: 65, B: 66, C: 67, D: 68,
  E: 69, F: 70, G: 71, H: 72,
  I: 73, J: 74, K: 75, L: 76,
  M: 77, N: 78, O: 79, P: 80,
  Q: 81, R: 82, S: 83, T: 84,
  U: 85, V: 86, W: 87, X: 88,
  Y: 89, Z: 90
};
exports.KEYS = KEYS;