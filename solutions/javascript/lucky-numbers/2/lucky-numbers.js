export const twoSum = (a1, a2) => Number(a1.reduce((a,n) => a + n, '')) + Number(a2.reduce((a,n) => a + n, ''));
export const luckyNumber = v => String(v) === String(v).split('').reverse().join('');
export const errorMessage = i => ['', undefined, null].includes(i) ? 'Required field' : (isNaN(Number(i)) || !Number(i) ? 'Must be a number besides 0': '');
