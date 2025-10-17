
export function getFirstCard(deck) {
  const [card,] = deck;
  return card;
}

export function getSecondCard(deck) {
  const [,card,] = deck;
  return card;
}

export function swapTwoCards(deck) {
  const [a,b] = deck;
  return [b,a];
}

export function shiftThreeCardsAround(deck) {
  const [a,b,c] = deck;
  return [b,c,a];
}

export function pickNamedPile(piles) {
  const { chosen, disregarded } = piles;
  return chosen;
}

export function swapNamedPile(piles) {
  let {disregarded, chosen} = piles;
  [chosen, disregarded] = [disregarded, chosen];
  return { chosen, disregarded };
}
