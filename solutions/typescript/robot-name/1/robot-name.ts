export class Robot {
  public alphabets:Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                                          'K', 'L', 'M', 'N', 'O', 'P' , 'Q', 'R', 'S', 'T', 
                                          'U', 'V', 'W', 'X', 'Y', 'Z']
  public numbers:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  public static allNames:Array<string> = []
  public firstName?:string = undefined

  constructor() {
    this.firstName = this.generateRandomName()
    while (Robot.allNames.indexOf(this.firstName) !== -1){
        this.firstName = this.generateRandomName()
    }
    Robot.allNames.push(this.firstName)
  }

  public getRandomNumberBetween(min:number, max:number): number{
    let result:number;
    result = Math.floor(Math.random()*(max-min+1)) + min
    return result
  }

  public generateRandomName():string{
    let result:string = ""
    let [a, b] = [this.alphabets[this.getRandomNumberBetween(0, 25)],
                  this.alphabets[this.getRandomNumberBetween(0, 25)]]
    let [c, d, e] = [this.numbers[this.getRandomNumberBetween(0, 9)],
                     this.numbers[this.getRandomNumberBetween(0, 9)],
                     this.numbers[this.getRandomNumberBetween(0, 9)]]
    result = `${a + b + c + d + e}`
    return result
  }

  public get name(): string|undefined {
    return this.firstName
  }

  public resetName(): void {
    this.firstName = this.generateRandomName()
    while (Robot.allNames.indexOf(this.firstName) !== -1){
        this.firstName = this.generateRandomName()
    }
    Robot.allNames.push(this.firstName)

  }

  public static releaseNames(): void {
    Robot.allNames = []
  }
}