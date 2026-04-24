export function convert(n:number):string {
    let d:string[] = [n%3===0 ? "Pling" : "", n%5===0 ? "Plang" : "", n%7===0 ? "Plong" : ""]
    let result = d.join("") === "" ? n.toString() : d.join("")
    return result
}