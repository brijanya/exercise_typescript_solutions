export function count(sentence:string) {
    let result: Map<string, number> = new Map()
    sentence.toLowerCase().split(/[^a-z0-9']+/).filter((word) => word.length > 0).forEach((word) => {
        word = word.replace(/^'+/, "").replace(/'+$/, "")
        let currentCount = result.get(word) ?? 0;
        result.set(word, currentCount + 1)
    });
    result.delete("")
    return result
}