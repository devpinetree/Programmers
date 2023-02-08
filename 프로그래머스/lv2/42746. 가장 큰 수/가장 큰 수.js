function solution(numbers) {
  if (numbers.reduce((a, b) => a + b) === 0) {
    return "0";
  } else {
    let answer = numbers.sort((i, j) => {
      return String(j).repeat(4).slice(0, 4) - String(i).repeat(4).slice(0, 4);
    });
    let result = answer.map((s) => String(s)).join("");
    return result;
  }
}