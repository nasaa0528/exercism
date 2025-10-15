export const score = (word) => {
  word = word.toLowerCase();
  word = word.replace(/[aeioulnrst]/g, '1 ');
  word = word.replace(/[dg]/g, '2 ');
  word = word.replace(/[bcmp]/g, '3 ');
  word = word.replace(/[fhvwy]/g, '4 ');
  word = word.replace(/[k]/g, '5 ');
  word = word.replace(/[jx]/g, '8 ');
  word = word.replace(/[qz]/g, '10 ');
  return word.split(" ").reduce((a,c) => Number(a) + Number(c)) || 0;
};
