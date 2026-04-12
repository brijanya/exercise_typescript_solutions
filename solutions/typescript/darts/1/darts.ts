export function score(x: number, y: number): number {
  let score:number = 0;
  let distance:number = Math.sqrt((x**2) + (y**2))
  if (distance <= 1){
    score = 10;
  } else if (distance <= 5){
    score = 5;
  } else if (distance <= 10){
    score = 1
  } else {
    score = 0
  }
  return score
}
