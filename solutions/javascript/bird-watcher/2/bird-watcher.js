export const totalBirdCount = (b) => {
  let t = 0;
  for (let i = 0; i < b.length; i++) {
    t += b[i];
  }
  return t;
}

export const birdsInWeek = (bpd, w) => {
  let t = 0;
  for (let i = (w-1)*7; i<w*7; i++) {
    t += bpd[i];
  }
  return t;
}

export const fixBirdCountLog = (birdsPerDay) => {
  for (let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i]++;
  }
}
