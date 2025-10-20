export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach(it => {
    if (it === card) count++;
  });
  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;
  for (let s of stack) {
    if (type && s % 2 === 0) {
      count++;
    } else if(!type && s % 2 !== 0) {
      count++;
    }
  }
  return count;
}
