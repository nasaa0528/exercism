export const squareRoot = (num) => {
  let lower = 0;
  let upper = num;
  while(true){
    let mid = (lower + upper)/2;
    let tmp = mid**2;
    if (tmp === num){
      return mid;
    }
    if(tmp < num){
      lower = mid;
    }
    else {
      upper = mid;
    }
  }
};
