export const classify = (num) => {
  if ( num === 1 ) { return "deficient" } else {
    if (num <= 0)
      throw new Error('Classification is only possible for natural numbers.');
    let sum = [...Array(Math.floor(num/2)).keys()].map(item => item + 1).filter(item => num % item === 0).reduce((acc, cur) => acc + cur);
    return (sum === num) ? "perfect" : (sum > num) ? "abundant" : "deficient";
    }
};
