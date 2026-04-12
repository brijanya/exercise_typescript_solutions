export function hey(m: string): string {
  let message:string = m.trim()
  let l:number = message.length
  let last_char = message[message.length - 1]
  let c1:boolean = last_char === "?"
  let c2:boolean = message.toUpperCase() === message && /[a-zA-Z]/.test(message)
  if (c1 && !c2){
    return ("Sure.")
  } else if (c2 && !c1){
    return ("Whoa, chill out!")
  } else if (c1 && c2){
    return ("Calm down, I know what I'm doing!")
  } else if (message === ""){
    return ("Fine. Be that way!")
  } else {
    return ("Whatever.")
  }
}
