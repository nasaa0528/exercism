export const cardTypeCheck = (s, c) => {
  let t = 0;
  s.forEach(i => { if (i === c) t++; });
  return t;
}

export const determineOddEvenCards = (s, t) => {
  let r = 0;
  for (const i of s) {
    r += (t && i % 2 === 0) ? 1 : (!t && i % 2  !== 0) ? 1 : 0;
  }
  return r;
}
