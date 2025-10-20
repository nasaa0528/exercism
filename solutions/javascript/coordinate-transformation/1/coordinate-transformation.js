export function translate2d(dx, dy) {
  return function increment(x,y) {
    return [x + dx, y + dy];
  }
}

export function scale2d(sx, sy) {
  return function scale(x,y) {
    return [x * sx, y * sy];
  }
}

export function composeTransform(f, g) {
  return function compose(x, y) {
    return g(...f(x, y));
  }
}

export function memoizeTransform(f) {
  const state = {
    fn: null,
    x: null,
    y: null,
    r: null,
    ry:  null
  };

  return function nf(x, y) {
    if (state.fn !== f.name || state.x !== x || state.y !== y) {
      [state.fn, state.x, state.y, state.r] = [f.name, x, y, f(x,y)];
    }
    return state.r;
  }
}
