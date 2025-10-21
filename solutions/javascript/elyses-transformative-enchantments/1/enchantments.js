export function seeingDouble(deck) {
  return deck.map(it => it * 2);
}

export function threeOfEachThree(deck) {
  for (let i = 0; i < deck.length; i++){
    if (deck[i] === 3) {
      deck.splice(i, 0, 3, 3);
      i += 2;
    }
  }
  return deck;
}

export function middleTwo(deck) {
  return deck.slice(4, 6);
  
}

export function sandwichTrick(deck) {
  return deck.slice(1,deck.length/2).concat(deck.slice(-1)).concat(deck.slice(0,1)).concat(deck.slice(deck.length/2, -1));
}

export function twoIsSpecial(deck) {
  return deck.filter(it => it === 2);
}

export function perfectlyOrdered(deck) {
  return deck.sort((it1, it2) => {
    if (it1 < it2) {
      return -1;
    } 
    if (it1 > it2) {
      return 1;
    }
    return 0;
  })
}

export function reorder(deck) {
  return deck.reverse();
}
