export class Matrix {
  private matrix:Array<Array<number>>
  private allRows:Array<Array<number>>; 
  private allColumns:Array<Array<number>>
  
  constructor(matrixStr:string) {
    this.matrix = this.strToMatrix(matrixStr);
    this.allRows = this.matrix.map((row) => row);
    this.allColumns = [];
    
    for (let i = 0; i < this.matrix[0].length; i++){
      let temp: number[] = []
        for (let j = 0; j < this.matrix.length; j++) {
          temp.push(this.matrix[j][i]);
        }
      this.allColumns.push(temp);
    }
  
  }

  private strToMatrix(matrixStr:string):Array<Array<number>>{
    let result:Array<Array<number>> = [];
    let x:Array<string> = matrixStr.split("\n");
    for (let row of x){
        let temp:Array<number> = [];
        row.split(" ").forEach((item) => {
            temp.push(Number(item));
        });
        result.push(temp);
    }
    return result;
  }
  
  get rows(): Array<Array<number>> {
    return this.allRows;
  }

  get columns(): Array<Array<number>> {
    return this.allColumns;
  }
}
