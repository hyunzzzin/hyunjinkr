//수학 계산 함수 사용하기
/* 절대값을 구하고 싶을때
제곱을 구하고 싶을때
대수를 구하고 싶을때 */
/* abs 절대값
pow(1,2) 1의 2승을 계산
sign 음수는 -1 양수는 1 0은 0
sqrt 제곱근을 계산
log 자연로그 계산
exp 지수함수 계산
E는 자연로그 e를 반환*/

// const a = math.abs(-10);
// console.log(a);
// math.pow(2,10);
// math.sign(2);
// math.sign(-2);
// math.sqrt(16); // 루트 16
// math.log(math.E);

var a = Math;

console.log(a.abs(10));
console.log(a.pow(2,10));
console.log(a.sign(2));
console.log(a.sign(-2));
console.log(a.sqrt(16));
console.log(a.E);
