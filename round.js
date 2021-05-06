//어림 계산하기
//소수점을 버리는 계산을 할때
//화면크기를 정수로 조절할때
/*math.round(값) ->반올림하기 ->숫자
math.floor(값) ->버림하기(값보다 작고 제일 가까운 정수 반환)->숫자
math.cell(값) =>올림하기(값보다 크고 제일 가까운 정수반환) => 숫자
math.trunc(값)->값의정수부분만을 반환 ->숫자*/

// const a = Math.round(6.24) //6
// console.log(a);
// const b = Math.floor(6.24) //6
// console.log(b);
// const c = Math.ceil(6.24); //7
// console.log(c);
// const d=Math.trunc(6.24); //6
// console.log(d);

//음수
const a = Math.round(-2.2) //-2
console.log(a);
const b = Math.floor(-2.2) //-3
console.log(b);
const c = Math.ceil(-2.2); //-2
console.log(c);
const d=Math.trunc(-2.2); //-2
console.log(d);