let CODES = ["wink", "double blink", "close your eyes", "jump", "reverse"]

export function commands(cmd:number):Array<string> {
    let result:Array<string> = []

    let cmdToBinary:Array<string> = cmd.toString(2).split("")
    console.log(cmdToBinary)
    let l = cmdToBinary.length - 1
    for (let i = l; i >= 0; i--){
        if (cmdToBinary[i] == "1"){
            result.push(CODES[l - i])
        }
    }
    if (result[result.length - 1] === "reverse"){
        result.pop()
        return result.reverse()
    }
    return result
}