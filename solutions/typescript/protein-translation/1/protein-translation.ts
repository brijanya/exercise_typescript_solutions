export function translate(seq:string):string[] {

    const t:{[key:string]:string[]} = {
        "Methionine" : ["AUG"],
        "Phenylalanine" : ["UUU", "UUC"],
        "Leucine" : ["UUA", "UUG"],
        "Serine" : ["UCU", "UCC", "UCA", "UCG"],
        "Tyrosine" : ["UAU", "UAC"],
        "Cysteine" : ["UGU", "UGC"],
        "Tryptophan" : ["UGG"],
        "STOP" : ["UAA", "UAG", "UGA"]
    }

    let sb:string[] = [];
    let atleastSomewhere = false;
    for (let i = 0; i < seq.length; i += 3){
        let ss = seq.slice(i, i+3)
        if (t["STOP"].includes(ss)){
            atleastSomewhere = true;
            break
        } else {
            if (ss.length === 3){
                for (let j of Object.keys(t)){
                    if (t[j].includes(ss)){
                        atleastSomewhere = true
                        sb.push(j)
                    }
                }
            } else {
                atleastSomewhere = false
            }
        }
    }
    if (!atleastSomewhere){
        throw new Error("Invalid codon")
    }
    return sb
}