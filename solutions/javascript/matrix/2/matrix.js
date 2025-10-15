export class Matrix {
  constructor(input) {
    this.matrix = input.split("\n").map(row => row.split(" ").map(item => parseInt(item)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.transpose(this.matrix);
  }

  transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }
}

