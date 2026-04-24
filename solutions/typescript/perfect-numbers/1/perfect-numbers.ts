export function classify(n:number) {
    if (n <= 0){
        throw new Error("Classification is only possible for natural numbers.")
    }
    let sq:number = Math.sqrt(n)
    let factors:number[] = []
    for (let i = 1; i <= sq; i++){
        if (n%i==0){
            factors.push(i !== n ? i : 0)
            factors.push(n/i !== n && n/i !== i ? n/i : 0)
        }
    }
    let s = factors.reduce((a, b) => a + b, 0)
    if (s === n){
        return "perfect"
    } else if ( s < n){
        return "deficient"
    } else {
        return "abundant"
    }
}