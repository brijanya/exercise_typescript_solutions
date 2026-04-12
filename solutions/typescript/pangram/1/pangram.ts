export function isPangram(x: string):boolean {
  let y:Set<string> = new Set(x.toLowerCase().replace(/[^a-z]/g, ""));
  if (y.size === 26){
    return true
  } else {
    return false
  }
}
