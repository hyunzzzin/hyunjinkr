//브라우저 버전에 따라 알림창을 뛰우고 싶을때
//입력 항목에 따라 확인 버튼을 무효화하고 싶을때
//boolean 은 참과 거짓의 진위 여부 판별을 위한 데이터타입
// const a =10;
// const b = 20;
// console.log( a<b);
// console.log(a>b);

// const username = '제이펍';
// if(username){
//     console.log('안녕하세요. ${username}');

// }

//address가 ''이므로 알림창을 표시하지 않음
// const address = '';
// if(address){
//     console.log('당신은 ${address}에 살고 계시네요');
// }

//js 문자열의 'a'문자 포함여부

//진릿값에 !를 붙히면 반대의 값을 가진다(논리 부정 연산자)
// const flg = 'JavaScript'.includes('a');
// console.log(!flg);

//다른타입의 값에 붙이면 값이 참 혹은 거짓으로 변환된다.
// console.log(!'제이펍');
// console.log(!24);

//! 를 두번 사용하면 데이터의 타임이 boolean으로 바뀐다.
console.log(!!'제이펍');
console.log(!!24);