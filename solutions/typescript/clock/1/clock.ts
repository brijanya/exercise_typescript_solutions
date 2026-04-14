export class Clock {
  public hour:number = 0;
  public minute:number = 0;
  
  constructor(hour: number = 0, minute: number = 0) { 
    [this.hour, this.minute] = this.calculateTime(hour, minute)
  }

  private calculateTime(hour: number, minute: number): number[]{
    let totalHours = hour + Math.floor(minute/60)
    let m = minute % 60
    m = m < 0 ? m + 60 : m
    let h = totalHours % 24
    h = h < 0 ? h + 24 : h
    return [h, m]
  }

  public toString(): string {
    let m:number = this.minute === undefined ? 0 : this.minute;
    return (`${this.hour < 10 ? `0${this.hour}` : this.hour.toString()}:${m < 10 ? `0${m}` : m.toString()}`);
  }

  public plus(minutes: number): Clock {
    let c = new Clock(this.hour, this.minute + minutes)
    return c
  }

  public minus(minutes: number): Clock {
    let c = new Clock(this.hour, this.minute - minutes)
    return c
  }

  public equals(clock: Clock): boolean {
    let [h2, m2] = clock.calculateTime(clock.hour, clock.minute)
    let result = false;
    if (this.hour === h2 && this.minute === m2){
      result = true
    }
    return result
  }
}


let x = new Clock(14, 37)
console.log(x.equals(new Clock(15, 37)))
