export const seeingDouble = d => d.map(i => i * 2);
export const threeOfEachThree = d => d.flatMap((it) => (it === 3 ? [3,3,3]: it));
export const middleTwo = d => d.slice(4,6);
export const sandwichTrick = d => d.slice(1,d.length/2).concat(d.slice(-1)).concat(d.slice(0,1)).concat(d.slice(d.length/2, -1));
export const twoIsSpecial = d => d.filter(i => i===2);
export const perfectlyOrdered = d => d.sort((i1,i2)=> i1 - i2);
export const reorder = d => d.reverse();
