function solution(num, total) {
    let sum = 0;
    let answer = [];
    
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    const startNum = (total - sum) / num;
    
    for (let i = startNum; i <+ startNum + num; i++) {
        answer.push(i);   
    }
    
    return answer;
}