//가변성과 불가변성 이해하기
// 데이터의 속성을 이해하고 싶을때
/* syntax
원시타입 -> 불가변성
객체타입 -> 가변성 */

const myarr = [1,2,3];

myarr[0] = 100; // 가변
console.log(myarr);

let mynumber = 10; //불가변
mynumber = 20;
console.log(mynumber);
