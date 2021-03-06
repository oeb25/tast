export default class Tast {

  constructor(state) {
    this.state = state || [];
  }

  listen(elm = window) {
    const handleKey = (e) => {
      this.state[e.which] = e.type === 'keydown';
    };

    elm.addEventListener('keydown', handleKey);
    elm.addEventListener('keyup', handleKey);

    return this;
  }

  down(id) {
    if (Array.isArray(id)) {
        for (var i = 0; i < id.length; i++) {
          if (this.state[id[i]] === true) {
            return true;
          }
        }
    }

    return !!this.state[id];
  }

  up(id) {
    return !this.down(id);
  }

  save() {
    return new Tast(this.state.slice());
  }

  reset() {
    this.state = [];
  }

}

export const KEYS = {
  UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39,

  SPACE: 32,

  A: 65, B: 66, C: 67, D: 68,
  E: 69, F: 70, G: 71, H: 72,
  I: 73, J: 74, K: 75, L: 76,
  M: 77, N: 78, O: 79, P: 80,
  Q: 81, R: 82, S: 83, T: 84,
  U: 85, V: 86, W: 87, X: 88,
  Y: 89, Z: 90
};

export * from './KeyLayout'
