//요소의 개별 변수에 분할 대입하기
// 배열의 요소를 변경하고싶을때

/* syntax 
[변수1,변수2,변수3,] = [값1,값2,값3] ->각변수에 값을 대입 */

// let a;
// let b;
// let c;
// [a,b,c] = [1,2,3];

// console.log(a,b,c);

const array  = ['곰','여우'];
[array[0], array[1]] = [array[1],array[0]];

console.log(array);