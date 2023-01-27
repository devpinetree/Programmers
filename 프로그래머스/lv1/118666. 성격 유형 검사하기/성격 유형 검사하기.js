function solution(survey, choices) {
    const score = [-3, -2, -1, 0, 1, 2, 3];
    const personality = [
        { R: 0, T: 0 }, 
        { C: 0, F: 0 }, 
        { J: 0, M: 0 }, 
        { A: 0, N: 0 }
    ];
    
    [...survey].forEach((item, idx) => {
        const [first, second] = item.split('');
        const curChoice = choices[idx];
        const personalityIdx = personality.findIndex(type => Object.keys(type).includes(first));
        
        if (curChoice > 4) {
            personality[personalityIdx][second] += Math.abs(score[curChoice - 1]);
        } else if (curChoice < 4) {
            personality[personalityIdx][first] += Math.abs(score[curChoice - 1]);
        }
    });
    
    return personality.map(type => {
        const values = Object.values(type);
        const keys = Object.keys(type);
        
        return values[0] < values[1] ? keys[1] : keys[0];
    }).join('');
}