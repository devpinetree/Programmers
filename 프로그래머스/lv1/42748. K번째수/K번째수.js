
const calcK = (array, command) => {
    const [i, j, k] = command;
    
    // i ~ j 자르고 정렬한 뒤 k번째 수 구하기
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
}

function solution(array, commands) {
    const answer = [];
    commands.forEach(command => {
        answer.push(calcK(array, command));
    });
    return answer;
}