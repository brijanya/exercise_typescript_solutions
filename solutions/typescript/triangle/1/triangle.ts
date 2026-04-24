export class Triangle {
  private a:number;
  private b:number;
  private c:number;
  private isTriangle: boolean;

  constructor(a:number, b:number, c:number) {
    this.a = a
    this.b = b
    this.c = c
    this.isTriangle = (this.a + this.b > this.c) && 
      (this.b + this.c > this.a) && 
      (this.c + this.a > this.b)
  }

  get isEquilateral():boolean {
    if (this.a === this.b && this.b === this.c && this.isTriangle){
        return true
    }else{
        return false
    }
  }

  get isIsosceles():boolean {
    if ((this.a === this.b || this.b === this.c || this.a === this.c) && this.isTriangle){
        return true
    } else {
        return false
    }
  }

  get isScalene():boolean {
    if ((this.a !== this.b && this.b !== this.c && this.a !== this.c) && this.isTriangle){
        return true
    } else {
        return false
    }
  }
}