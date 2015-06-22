export function KeyLayout(state, options) {
  var layout = {
    setState(newState) {
      state = newState;
    }
  };

  for (let key in options) {
    Object.defineProperty(layout, key, {
      get() { return state.down(options[key]); }
    });
  }

  return layout;
}
