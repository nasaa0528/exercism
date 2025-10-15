export const convert = (num, from, to) => {
  if (from <= 1)  throw new Error("Wrong input base");

  if (to <= 1) throw new Error("Wrong output base");

  if (  num.length === 0 ||
        (num.length > 1 && num[0] === 0) ||
        (num.length > 1 && Number(num.join("") === 0)) ||
        num.some(item => (item < 0 || item >= from)))
    throw new Error("Input has wrong format");

  if (!num[0]) return num;
  
  let inDecimal = 0;
  if (from === 10) inDecimal = Number(num.join(""));
  if (!inDecimal){
    let power = 0;
    while(num.length){
      inDecimal += num.pop() * (from ** power);
      power++;
    }
  }
  if (to === 10) return inDecimal.toString().split("").map(Number);
  
  let toArray = [];
  while (inDecimal){
    toArray.push(inDecimal % to);
    inDecimal = Math.floor(inDecimal / to);
  }
  return toArray.reverse();
};

