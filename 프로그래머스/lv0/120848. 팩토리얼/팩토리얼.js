function solution(n) {
    let curFactorial = 1;
    
    for (let i = 1; i <= 10; i++) {
        curFactorial *= i;
        
        if (n < curFactorial) {
            return i - 1;
        } else if (n === curFactorial) {
            return i;
        }
    }
}