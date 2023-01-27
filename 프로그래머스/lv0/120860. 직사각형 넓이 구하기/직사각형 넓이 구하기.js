function solution(dots) {
    const xArr = [], yArr = [];
    dots.forEach((dot, idx) => {
        if (!xArr.includes(dot[0])) xArr.push(dot[0]);
        if (!yArr.includes(dot[1])) yArr.push(dot[1]);
    })
    return Math.abs(xArr[0] - xArr[1]) * Math.abs(yArr[0] - yArr[1]);
}