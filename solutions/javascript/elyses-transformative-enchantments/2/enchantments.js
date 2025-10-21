export const seeingDouble = d => d.map(i => i * 2);
export const threeOfEachThree = d => {
  for (let i = 0; i < d.length; i++){
    if (d[i] === 3) {
      d.splice(i,0,3,3)
      i+=2;
    }
  }
  return d;
}
export const middleTwo = d => d.slice(4,6);
export const sandwichTrick = d => d.slice(1,d.length/2).concat(d.slice(-1)).concat(d.slice(0,1)).concat(d.slice(d.length/2, -1));
export const twoIsSpecial = d => d.filter(i => i===2);
export const perfectlyOrdered = d => d.sort((i1,i2)=> {
    if (i1 < i2) {
      return -1;
    } 
    if (i1 > i2) {
      return 1;
    }
    return 0;

});
export const reorder = d => d.reverse();
