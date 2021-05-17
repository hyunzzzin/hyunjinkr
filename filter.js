//조건을 만족하는 배열 요소 추출하여 새 배열 만들기
//유저 정보 배열에서 18세 이상인 유저의 정보만을 가져와 배열을 생성하고싶을때

/* syntax
배열.filter(콜백함수) -> 콜백 함수 조건을 만족하는 데이터의 배열 생성

syntax
([요소],[인덱스],[기존배열]) => 진릿값 -> 요소를 받아 진위 반환 */

// const newarray = [10,20,30,40].filter((value) => value >= 30);
// console.log(newarray);

// const newarray = [10,20,30,40].filter((value) => {
//     return value >= 30;
// })
// console.log(newarray);

const newarray = [10,20,30,40].filter(function(value){
    return value >= 30;
}) ;
console.log(newarray);