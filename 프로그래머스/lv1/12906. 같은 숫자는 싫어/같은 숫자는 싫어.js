const solution = (arr) => {
    const stack = [];
    arr.forEach(item => {
        if ((stack.length > 0 && item !== stack[stack.length - 1]) || stack.length === 0) {
            stack.push(item);
        }
    });
    return stack;
}