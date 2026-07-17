export class Matrix {
  public matrix : string ;
  constructor(input:string) {
    this.matrix = input;
  }

  get rows(): number[][] {
    return this.matrix
            .split("\n")
            .map(row => row.split(" ").map(Number));
  }

  get columns(): number [][] {
    let rows = this.rows;
    let cols : number [][] = [];
    for (let i = 0; i < rows[0].length ; i++) {
      const column: number[] = [];
      for (let j = 0; j < rows.length; j++) {
        column.push(rows[j][i]);
      }
      cols.push(column);
    }
    return cols;
  }
}
