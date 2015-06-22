"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyLayout = KeyLayout;

function KeyLayout(state, options) {
  var layout = {
    setState: function setState(newState) {
      state = newState;
    }
  };

  var _loop = function (key) {
    Object.defineProperty(layout, key, {
      get: function get() {
        return state.down(options[key]);
      }
    });
  };

  for (var key in options) {
    _loop(key);
  }

  return layout;
}