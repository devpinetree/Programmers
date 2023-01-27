function solution(before, after) {
    const beforeArr = [...before].sort();
    const afterArr = [...after].sort();
    let check = false;
    
    beforeArr.forEach((item, idx) => {
        console.log(item!== afterArr[idx])
        if (item !== afterArr[idx]) check = true;
    })
    
    return check ? 0 : 1;
}