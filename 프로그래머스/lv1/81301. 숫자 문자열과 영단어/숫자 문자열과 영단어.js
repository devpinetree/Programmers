const solution = s => {
    let str = s;
    const letters = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
    ];
    
     for (let i = 0; i < letters.length; i++) {
         let arr = str.split(letters[i]);
         str = arr.join(i);
     }
    
    return Number(str);
}