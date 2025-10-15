export const squareRoot = (num) => {
  let root = num/2;
  let prev = Math.round(root);
  while(1){
    if ( (root = (root + num / root) >> 1) && Math.round(root) === prev)
      break;
    prev = Math.round(root);
  }
  return Math.round(root);
};
