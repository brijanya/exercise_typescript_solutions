interface Cc{
  [key: string] : number
}
export function decodedValue(color:string): number {
  const colorCodes: Cc = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9,
  }
  let result = ""
  for (let x = 0; x<2; x++){
    result += colorCodes[color[x]]
  }
  return parseInt(result)
}