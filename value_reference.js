//값 전달과 참조 전달 이해하기
//원시 타입과 객체 타입의 처리를 이해하고싶을때
/* syntax 
원시타입 -> 값의 전달
객체타입 -> 참조의 전달 */

// let a = 100;
// let b = a;
// a = 500;
// console.log(b);

let a = [1,2,3];
let b = a;
a[0] = 100;
console.log(b);