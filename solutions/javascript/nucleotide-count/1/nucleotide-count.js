export class NucleotideCounts {
  static parse(dna) {
    if ((dna.match(/[^AGCT]/g) || []).length)
      throw new Error('Invalid nucleotide in strand');
    let result = "";
    result += (dna.match(/A/g) || []).length + " ";
    result += (dna.match(/C/g) || []).length + " ";
    result += (dna.match(/G/g) || []).length + " ";
    result += (dna.match(/T/g) || []).length;
    return result;
  }
}
