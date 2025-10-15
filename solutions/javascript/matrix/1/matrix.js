export class Matrix {
  constructor(input) {
    this.matrix = input.split("\n").map(row => row.split(" ").map(item => parseInt(item)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, colIndex) => this.matrix.map(row => row[colIndex]));
  }
}
