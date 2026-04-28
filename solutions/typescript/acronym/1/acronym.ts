export function parse(phrase: string) {
    const clean = phrase
                    .replace(/-/g, ' ')
                    .replace(/[^\w\s]|_/g, '');

    const regex = /(^\w|(?<=\s)\w|(?<=[a-z])[A-Z])/g;
    const matches = clean.match(regex)
    
    if (!matches) return ""

    return matches ? matches.join('').toUpperCase() : "";
}