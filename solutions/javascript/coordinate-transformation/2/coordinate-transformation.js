export function translate2d(dx, dy) {
  return (x, y) => [dx + x, dy + y]; 
}

export function scale2d(sx, sy) {
  return (x, y) => [x * sx, y * sy];
}

export function composeTransform(f, g) {
  return (x, y) => g(...f(x,y));
}

export function memoizeTransform(f) {
  const s = {
    f: null,
    x: null,
    y: null,
    r: null,
  };

  return (x, y) => {
    if (s.f !== f.name || s.x !== x || s.y !== y) {
      [s.f, s.x, s.y, s.r] = [f.name, x, y, f(x,y)];
    }
    return s.r;
  }
}
