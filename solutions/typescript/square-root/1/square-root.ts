export function squareRoot(n: number, tol:number = 1e-10): number{
    if (n === 0 || n === 1){
        return n;
    } else if (n <= 0){
        throw new Error("Negative numbers not allowed.")
    } else {
        let x:number = n;
        let y:number = 1;
        while (x-y > tol){
            x = (x + y)/2;
            y = n/x
        }
        return Math.floor(x);
    }
}
