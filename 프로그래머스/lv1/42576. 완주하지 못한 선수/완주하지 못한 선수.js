function solution(participant, completion) {
    let answer = '';
    
    completion[completion.length] = '';

    const arr1 = participant.sort();
    const arr2 = completion.sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) answer = arr1[i];
    }

    return answer;
}