export const timeToMixJuice = (n) => {
  switch(n) {
    case 'Pure Strawberry Joy': return 0.5;
    case 'Energizer': case 'Green Garden': return 1.5;
    case 'Tropical Island': return 3;
    case 'All or Nothing': return 5;
    default: return 2.5;
  }
}

export const limesToCut = (w, l) => {
  let n = 0, iE = 0;
  while (w && l.length && iE < w) {
    switch(l.shift()) {
      case 'small': iE += 6; break;
      case 'medium': iE += 8; break;
      case 'large': iE += 10; break;
    }
    n++;
  }
  return n;
}

export const remainingOrders = (t, o) => {
  while (t > 0 && o.length) {
    t -= timeToMixJuice(o.shift());
  }
  return o;
}
