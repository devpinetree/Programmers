function solution(i, j, k) {
    let count = 0;
    for (let x = i; x <= j; x++) {
        count += String(x).split('').filter(n => n === String(k)).length;
    }
    return count;
}