const solution = (str1, str2) => {
    const Z_NUM = 65536;
    
    // 소문자로 변환
    const s1 = str1.toLowerCase(), s2 = str2.toLowerCase();
    
    // 두 글자씩 분리
    const arr1 = [], arr2 = [];
    const regEx = /^[a-z]+$/;
    
    [...s1].forEach((s, i) => {
        if (s1[i + 1]) {
            const text = s1[i] + s1[i+1];
            if (regEx.test(text)) {
                arr1.push(s1[i] + s1[i+1]);
            }
        }
    });
    [...s2].forEach((s, i) => {
        if (s2[i + 1]) {
            const text = s2[i] + s2[i+1];
            if (regEx.test(text)) {
                arr2.push(s2[i] + s2[i+1]);
            }
        }
    });

    const union = [] // 합집합
    const intersect = [] // 교집합
    
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {
            intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1)[0]);
        }
        union.push(arr2[i]);
    }

    for (var i = 0; i < arr1.length; i++) {
        union.push(arr1[i])
    }

    return union.length === 0 ? Z_NUM : Math.floor((intersect.length / union.length) * Z_NUM);
}