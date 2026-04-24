export function transform(d:{[key:number]:string[]}): {[key:string]:number}{
    let e = Object.entries(d)
    let result:{[key:string]:number} = {}
    e.forEach(([score, alphabets]) => {
        for (let i of alphabets){
            result[i.toLowerCase()] = Number(score);
        }
    });
    return result
}