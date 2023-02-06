const solution = (nums) => {
    const monCount = nums.length / 2; // 선택 가능한 폰켓몬 수
    const numSet = new Set(nums); // 중복 제거
    const numCount = [...numSet].length; // 중복되지 않는 폰켓몬 수
    
    if (numCount < monCount) return numCount;
    else return monCount;
}
