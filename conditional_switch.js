//조건을 만족하는 다수의 데이터를 처리하고싶을때
/*syntax
switch(식) ->식에 따라 처리를 분기
case 값 :처리내용 -> 해당 조건 만족 시 처리
default :처리내용 -> 만족하는 조건이 하나도 없는 경우의 처리
*/

// const myfruit = '사과';
// switch (myfruit) {
//     case '사과':
//         console.log('사과입니다');
//         break;
//     case '귤':
//         console.log('귤입니다');
//         break;
//     default:
//         console.log('기타입니다');
//         break;
// }
// const myfruit = '사과';
// switch (myfruit) {
//     case '사과':
//     case '귤':
//         console.log('사과 혹은 귤입니다');
//         break;
//     default: //default문은 생략 가능하다.
//         console.log('기타입니다');
// }
//switch는 ===비교를 한다.
//switch식은 값과 타입의 비교가 모두 이루어진다.(===비교) 
//다음의 샘플을 통해 첫번째가 아닌 두번째 구가 실행되는 것을 확인
const myvalue = 100;

switch(myvalue){
    case 100:
        //숫자 타입일 경우 실행
        console.log('숫자 타입의 100입니다.');
        break;
    default:
        console.log('숫자 타입이 100이 아닙니다.');
        break;
}