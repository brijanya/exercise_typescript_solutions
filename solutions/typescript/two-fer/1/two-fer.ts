export function twoFer(name?:string): string {
  const another = name ?? "you"
  return `One for ${another}, one for me.`
}
