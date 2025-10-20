export const translate2d = (dx, dy) => (x, y) => [dx + x, dy + y];
export const scale2d = (sx, sy) => (x, y) => [x * sx, y * sy];
export const composeTransform = (f, g) => (x, y) => g(...f(x, y));
export const memoizeTransform = f => {
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
