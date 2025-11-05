export const rows = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }
    if (i === 1) {
      result.push([1,1]);
      continue;
    }
    result.push([]);
    for (let k = 0; k <= i; k++){
      result[i].push(((result[i-1][k-1] ?? 0) + (result[i-1][k] ?? 0)));
    }
  }
  return result;
};
