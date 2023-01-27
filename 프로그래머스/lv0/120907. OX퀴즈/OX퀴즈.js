function solution(quiz) {
    const arr = quiz.map(q => q.split(' '));
    let answer = [];
    
    arr.forEach(item => {
        const operator = item[1];
        // console.log(parseInt(item[0]) , parseInt(item[2]) , parseInt(item[4]))
        
        switch (operator) {
            case '+':
                if (parseInt(item[0]) + parseInt(item[2]) === parseInt(item[4])) {
                    answer.push('O');
                } else {
                    answer.push('X');
                }
                break;
            case '-':
                if (parseInt(item[0]) - parseInt(item[2]) === parseInt(item[4])) {
                    answer.push('O');
                } else {
                    answer.push('X');
                }
                break;
            default: 
                break;
        }
    })
    
    return answer;
}