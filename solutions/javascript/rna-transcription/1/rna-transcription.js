const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };

export const toRna = (dna) => {
  return dna.split("").map(ch => map[ch]).join("");
};
