//function 함수명(파라미터){처리내용}
//return 값
//함수명 ();
// function myfunction(a){  //myfunction이란 함수명 a라는 파라미터
//     const result = a + 2; // myfunction은 a+2라는 함수를 적용
//     return result; // 반환값이 없는경우 반환값을 생략할수있다.
// }
// console.log(myfunction(2)); // 인수가 2인 myfunction 출력
// function myfunction(a, b, c){
//     const result = a + b+ c;
//     return result;
// }
// console.log(myfunction(2,2,2));
// function myfunction(){ //인수가 없어도 된다
//     console.log('안녕하세요.');
//     return 100; // 반환값을 100으로 출력 , return구문으로 함수가 종료되기때문에 
//return아랫부분의 코드는 아무리 입력해도 실행되지않음.
// }
// console.log(myfunction());
// function myfunction(a,b){
//     //a가 100 이상이라면 a를 반환
//     if (a >= 100){
//         return a; // a의 값이 100 이상이라면 a를 반환
//     }
//     return b; // a의 값이 100 미만이라면 b를 반환 함수종료.
// }
// console.log(myfunction(100,2)); // 정의한 파라미터가 2개면 출력 인수로도 2개 입력

// function calcfunction(price,tax){
//     const result = price + price * tax; // result 값으로 price + (price *tax) 
//     return result; // 반환값으로 price + (price *tax) 의 값을 다시 result에 저장
// }
// const myresult = calcfunction(100 , 0.1); 
// console.log(myresult); // 결과 110

function myfunction(){
    console.log('안녕하세요');
}
myfunction();