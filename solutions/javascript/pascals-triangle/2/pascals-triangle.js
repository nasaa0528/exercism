const factorial = n => n <= 1 ? 1 : n * factorial(n-1);
const binomial = (n, k) => factorial(n) / (factorial(k) * factorial(n-k));
export const rows = s => Array.from({length: s}, (_, i) => Array.from({length: i + 1}, (_, j) => binomial(i,j)));
