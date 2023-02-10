const checked = (s1, s2) => {
    let check = 0;
    
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) check++;
    }
    
    return check === 1;
}

function solution(begin, target, words) {
    const visited = [];
    const queue = [[begin, 0]];
    
    while (queue.length) {
        let [w, c] = queue.shift();
        
        if (w === target) return c;
        
        words.forEach(word => {
            if (checked(w, word) && !visited.includes(word)) {
                queue.push([word, ++c]);
                visited.push(word);
            }
        })
    }
    
    return 0;
}