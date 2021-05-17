//여러개의 배열을 하나로 결합하고 싶을때
//배열1.concat(배열2,배열3) ->배열1에 배열2, 배열3 결합
//[..배열1, 배열 2, 배열3] -> 배열 1엘 배열 2, 배열3을 결합

// const array1 = ['곰','사자'];
// const array2 = ['여우'];
// const array3 = array1.concat(array2);
// console.log(array3);

// const array4 = ['곰','사자'];
// console.log([...array4]);

const array5 = ['곰','사자'];
const array6 = ['여우'];
const array7 = [...array5, ...array6];
console.log(array7);