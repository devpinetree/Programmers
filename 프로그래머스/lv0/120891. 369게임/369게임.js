function solution(order) {
    const orderArr = [...String(order)].map(n => +n);
    return orderArr.filter(item => item !== 0 && item % 3 === 0).length;
}