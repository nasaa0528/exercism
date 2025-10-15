export const totalBirdCount = (b) => {
  let total = 0;
  for (let i = 0; i < b.length; i++) {
    total += b[i];
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  for (let i = (week - 1) * 7; i < week * 7; i++){
    total += birdsPerDay[i];
  }
  return total;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
