function solution(array, n) {
    const arr = [...array, n];
    arr.sort((a, b) => a - b);
    
    const nIndex = arr.indexOf(n);
    const leftNum = arr[nIndex -1], rightNum = arr[nIndex + 1];
    
    if (!leftNum) return rightNum;
    if (!rightNum) return leftNum;
    
    if ((n - leftNum) <= (rightNum - n)) return leftNum;
    else return rightNum;
}