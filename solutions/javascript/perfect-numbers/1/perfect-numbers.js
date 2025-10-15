export const classify = (num) => {
  if (num <= 0)
    throw new Error('Classification is only possible for natural numbers.');
  let sum = 0;
  for (let i = 1; i <= Math.floor(num/2); i++) {
    if ( num % i === 0 )
      sum += i;
  }
  if( sum === num )
    return "perfect";
  else if (sum > num)
    return "abundant";
  else
    return "deficient";
};
