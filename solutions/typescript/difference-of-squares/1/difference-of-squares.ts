export class Squares {
  private n:number;
  
  constructor(count: number) {
    this.n = count
  }

  get sumOfSquares(): number {
    let x:number = 0;
    let sum:number = 0;
    while (x <= this.n){
        sum += x**2;
        x += 1
    }
    return sum
  }

  get squareOfSum(): number {
    let x:number = 0;
    let sum:number = 0;
    while (x <= this.n){
        sum += x;
        x += 1
    }
    return sum**2
  }

  get difference(): unknown {
    return Math.abs(this.sumOfSquares - this.squareOfSum)
  }
}