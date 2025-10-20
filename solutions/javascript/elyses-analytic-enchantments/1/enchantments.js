export function getCardPosition(stack, card) {
  return stack.findIndex(s => s === card);
}

export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
  
}

export function isEachCardEven(stack) {
  return stack.every( it => it % 2 === 0);
}

export function doesStackIncludeOddCard(stack) {
  return stack.some(it => it % 2 === 1);
}

export function getFirstOddCard(stack) {
  return stack.find(it => it % 2 === 1);
}

export function getFirstEvenCardPosition(stack) {
  return stack.findIndex(it => it % 2 === 0);
}
