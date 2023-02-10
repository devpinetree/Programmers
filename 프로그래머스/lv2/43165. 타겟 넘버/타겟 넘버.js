const solution = (numbers, target) => {
    let answer = 0;
    
    const dfs = (idx, value) => {
        if (idx < numbers.length) {
            dfs(idx + 1, value + numbers[idx]);
            dfs(idx + 1, value - numbers[idx]);
        } else if (target === value) answer++;
    }
    
    dfs(0, 0);

    return answer;
}