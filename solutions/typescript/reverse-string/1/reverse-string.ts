export function reverse(s:string) {
    let sa: Array<string> = s.split("")
    return sa.reverse().join("")
}