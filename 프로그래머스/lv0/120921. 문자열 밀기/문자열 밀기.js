function solution(A, B) {
    const aArr = [...A];
    const bArr = [...B];
    let result = -1;
    
    aArr.forEach((item, idx) => {
        if (result === -1 && aArr.join('') === B) result = idx;
        const popItem = aArr.pop();
        aArr.unshift(popItem);
    })
    
    return result;
}