export class Matrix {
  constructor(input) {
    this.matrix = this.createMatrix(input);
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.transpose(this.matrix);
  }

  createMatrix(input) {
    return input.split("\n").map(row => row.split(" ").map(item => parseInt(item)));
  }

  transpose(rows) {
    return rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));
  }
}
