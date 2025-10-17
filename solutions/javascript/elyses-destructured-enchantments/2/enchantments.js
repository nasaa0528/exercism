export const getFirstCard = ([c]) => c;
export const getSecondCard = ([,c]) => c;
export const swapTwoCards = ([c1,c2]) => [c2,c1];
export const shiftThreeCardsAround = ([a,b,c]) => [b,c,a];
export const pickNamedPile = ({chosen, disregarded}) => chosen;
export const swapNamedPile = ({chosen, disregarded}) => ([chosen, disregarded] = [disregarded, chosen], {chosen, disregarded});

