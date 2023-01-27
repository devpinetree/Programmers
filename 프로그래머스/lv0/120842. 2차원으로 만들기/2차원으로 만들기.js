function solution(num_list, n) {
    let tmpNum = n;
    let answer = [];
    let arr = [];
    
    for (let i = 0; i < num_list.length; i++) {
        arr.push(num_list[i]);
        tmpNum--;
        
        if (tmpNum === 0) {
            answer.push(arr);
            tmpNum = n;
            arr = [];
        }
    }
    
    return answer;
}