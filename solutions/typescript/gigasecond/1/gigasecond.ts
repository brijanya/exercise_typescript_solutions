export class Gigasecond {
  private d: Date;
  private jump:number = 1e12
  constructor(date:Date){
    this.d = date
  }
  public date() {
    return new Date(Date.parse(this.d.toString()) + this.jump)
  }
}