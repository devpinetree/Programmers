function solution(answers) {
    let result = [];
    const personInfoList = [
        { id: 1, pattern: [1,2,3,4,5], score: 0 },  
        { id: 2, pattern: [2,1,2,3,2,4,2,5], score: 0 },
        { id: 3, pattern: [3,3,1,1,2,2,4,4,5,5], score: 0 }
    ];
    
    for (let i = 0; i < answers.length; i++) {
        personInfoList.forEach((personInfo, idx) => {
            if (answers[i] === personInfo.pattern[i % personInfo.pattern.length]) {
                personInfo.score += 1;
            }
        });
    }
    
    let maxScore = 0;
    personInfoList.forEach(personInfo => {
        if (maxScore < personInfo.score) maxScore = personInfo.score;
    });
    
    personInfoList.forEach(personInfo => {
        if (personInfo.score === maxScore) {
            result.push(personInfo.id);
        }
    });

    return result;
}