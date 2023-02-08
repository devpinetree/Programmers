function solution(citations) {
    citations.sort((a, b) => a - b);
    
    const n = citations.length;
    const arr = [];
    const maxH = Math.max(...citations);
    
    for (let h = 0; h <= maxH; h++) {
        const more = citations.filter((v) => v >= h).length;

        if (h <= more) {
            arr.push(h);
        }
    }
    
    return Math.max(...arr);
}