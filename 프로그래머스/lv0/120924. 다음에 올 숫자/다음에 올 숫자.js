function solution(common) {
    const first = common[0];
    const second = common[1];
    const third = common[2];
    
    if (second - first === third - second) {
        // 등차
        const addRule = second - first;
        return common[common.length - 1] + addRule; 
    } else {
        // 등비
        const mulRule = second / first;
        return common[common.length - 1] * mulRule; 
    }
}