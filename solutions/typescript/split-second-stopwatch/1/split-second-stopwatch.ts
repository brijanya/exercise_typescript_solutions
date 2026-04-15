type ClockState = 'ready' | 'running' | 'stopped';

export class SplitSecondStopwatch {
  
  private clockState:ClockState;
  private totalLaps:Array<string>;
  private currentLapDurataion:Array<string>;
  private hour = 0;
  private minute = 0;
  private second = 0;

  constructor() {
    this.clockState = 'ready';
    this.totalLaps = []
    this.currentLapDurataion = []
  }

  private toString(hour:number, minute:number, second:number):string{
    let h = hour < 10 ? `0${hour}` : hour.toString()
    let m = minute < 10 ? `0${minute}` : minute.toString()
    let s = second < 10 ? `0${second}` : second.toString()
    return `${h}:${m}:${s}`
  }

  private toTime(timeString:string):Array<number>{
    let [h, m, s] = timeString.split(":").map((e) => Number(e))
    return [h, m, s];
  }

  public get state(): ClockState {
    return this.clockState
  }

  public get currentLap(): string {
    if (this.currentLapDurataion.length == 0){
      return "00:00:00"
    } else {
      let [th, tm, ts] = [0, 0, 0];
      for (let duration of this.currentLapDurataion){
        let [h, m, s] = this.toTime(duration)
        th += h
        tm += m
        ts += s
      }
      let ls = ts > 59 ? ts % 60 : ts;
      let lm = tm + Math.floor(ls/60);
      lm = lm > 59 ? lm % 60 : lm;
      let lh = th + Math.floor(lm/60)
      return this.toString(lh, lm, ls)
    }
    
  }

  public get total(): string {
    return this.toString(this.hour, this.minute, this.second)
  }

  public get previousLaps():string[] {
    return structuredClone(this.totalLaps)
  }
 
  public start(): void {
    if (this.clockState === 'ready' || this.clockState === 'stopped'){
      this.clockState = "running";
    } else {
      throw new Error('cannot start an already running stopwatch')
    }
  }

  public stop(): void {
    if (this.clockState === 'running') {
      this.clockState = 'stopped'
    } else {
      throw new Error('cannot stop a stopwatch that is not running')
    }
  }

  public lap(): void {
    if (this.clockState === 'running'){
      let [th, tm, ts] = [0, 0, 0];
      for (let duration of this.currentLapDurataion){
        let [h, m, s] = this.toTime(duration)
        th += h
        tm += m
        ts += s
      }
      let ls = ts > 59 ? ts % 60 : ts;
      let lm = tm + Math.floor(ls/60);
      lm = lm > 59 ? lm % 60 : lm;
      let lh = th + Math.floor(lm/60)
      this.totalLaps.push(this.toString(lh, lm, ls))
      this.currentLapDurataion = []
    } else{
      throw new Error('cannot lap a stopwatch that is not running')
    }
  }

  public reset(): void {
    if (this.clockState === 'stopped'){
      this.currentLapDurataion = []
      this.totalLaps = []
      this.clockState = 'ready';
    } else {
      throw new Error('cannot reset a stopwatch that is not stopped')
    }
  }

  public advanceTime(duration: string): void {
    if (this.clockState === 'running'){
      this.currentLapDurataion.push(duration)
      let [dh, dm, ds]:number[] = this.toTime(duration)
      let [ch, cm, cs]:number[] = [this.hour, this.minute, this.second]
      let [th, tm, ts]:number[] = [ch+dh, cm+dm, cs+ds]
      this.second = ts > 59 ? ts % 60 : ts;
      tm += Math.floor(ts/60);
      this.minute = tm > 59 ? tm % 60 : tm;
      this.hour = th + Math.floor(tm/60) 
    } else {
    }
  }
}