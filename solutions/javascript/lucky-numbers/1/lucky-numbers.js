export const twoSum = (a1, a2) => Number(a1.reduce((a,n) => a + n, '')) + Number(a2.reduce((a,n) => a + n, ''));


export function luckyNumber(value) {
  return String(value) === String(value).split('').reverse().join('');
}

export function errorMessage(input) {
  if (['', undefined, null].includes(input)) return 'Required field';
  if (isNaN(Number(input)) || !Number(input)) return 'Must be a number besides 0';
  return '';
}
