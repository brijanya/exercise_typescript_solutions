export class GradeSchool {
  private allRoster:{[grade:number]: string[]};

  constructor() {
    this.allRoster = {};
  }

  sortRoster(){
    for (let key of Object.keys(this.allRoster)){
      this.allRoster[Number(key)].sort()
    }
  }

  roster() {
    return structuredClone(this.allRoster)
  }

  add(name:string, grade:number):{[grade:number]:string[]} {
    for (let key of Object.keys(this.allRoster)){
      if (this.allRoster[Number(key)].includes(name)){
        let x = this.allRoster[Number(key)].indexOf(name);
        this.allRoster[Number(key)].splice(x, 1);
        break
      }
    }
    if (!Object.keys(this.allRoster).includes(grade.toString())){
      this.allRoster[grade] = [];
    }
    this.allRoster[grade].push(name);
    this.sortRoster();
    return structuredClone(this.allRoster);
  }

  grade(grade:number):[] | string [] {
    if (!Object.keys(this.allRoster).includes(grade.toString())){
      return []
    } else{
      return structuredClone(this.allRoster[grade])
    }
  }
}