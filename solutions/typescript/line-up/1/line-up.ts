export function format(name: string, number: number): string {
  let last_two_digit = number % 100;
  let suffix = "";
  if (last_two_digit % 10 === 1 && last_two_digit !== 11){
    suffix = "st"
  } else if (last_two_digit % 10 === 2 && last_two_digit !== 12) {
    suffix = "nd"
  } else if (last_two_digit % 10 === 3 && last_two_digit !== 13) {
    suffix = "rd"
  }
  else {
    suffix = "th"
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
}
