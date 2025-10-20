export const getCardPosition = (s, c) => s.findIndex(i => i === c);
export const doesStackIncludeCard = (s, c) => s.includes(c);
export const isEachCardEven = s => s.every(i => i % 2 === 0);
export const doesStackIncludeOddCard = s => s.some(i => i % 2 === 1);
export const getFirstOddCard = s => s.find(i => i % 2 === 1);
export const getFirstEvenCardPosition = s => s.findIndex(i => i % 2 === 0);
