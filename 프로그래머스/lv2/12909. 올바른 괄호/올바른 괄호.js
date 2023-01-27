 const solution = (s) => {
     const OPENED_BRACKET = '(', CLOSED_BRACKET = ')';
     const bracketArr = [...s];
     const stack = [];
     
     bracketArr.forEach(bracket => {
         const lastItem = stack[stack.length - 1];
         if (stack.length > 0) {
             if (lastItem === OPENED_BRACKET && bracket === CLOSED_BRACKET) {
                 stack.pop();
             } else {
                 stack.push(bracket);
             }
         } else {
             stack.push(bracket);
         }
     });
     
     return stack.length === 0;     
 }





// function solution(s) {
//   let bracketArr = [...s];
//   let stack = [];

//   for (let i = 0; i < bracketArr.length; i++) {
//     if (stack.length === 0) {
//       stack.push(bracketArr[i]);
//     } else {
//       if (bracketArr[i] === '(') {
//         stack.push(bracketArr[i]);
//       } else {
//         stack.pop();
//       }
//     }
//   }

//   return stack.length === 0;
// }
