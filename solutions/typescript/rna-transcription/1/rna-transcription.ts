export function toRna(dna:string):string {
  const complementryPair: Record<string, string>= {
        "G" : "C",
        "C" : "G",
        "T" : "A",
        "A" : "U",
    }
    let dna_array: Array<string> = [...dna]
    let rna = ""
    for (let a of dna_array){
        if (complementryPair[a] === undefined){
            throw ("Invalid input DNA.")
        }
        rna += complementryPair[a]
    }
    return rna
}
