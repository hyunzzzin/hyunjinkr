//배열 요소 추출하여 새 배열 만들기
//요소를 추출하여 새로운 배열 만들고 싶을때
//배열 요서 전체에 대한 처리 작업을 하고 싶을때
//ID와 이름을 가지는 객체 배열에서 ID만 가지는 배열을 새로 만들고 싶을때
/*
syntax
배열.map(콜백함수) -> 콜백함수로 새로운 배열 생성
syntax -콜백함수
([요소],[인덱스][기존배열])=>변경후요소 -> 요소를 받아 변경후 반환 */

// const idlist = [4,10,20];

// const useridlist = idlist.map((value) => `userid_${value}`); //idlist의 값에 userid_
// //를 추가해서 새로운 배열을 만든다
// console.log(idlist);
// console.log(useridlist);


// const idlist = [3,8,12];

// const useridlist = idlist.map((value,index) => `userid_${index + 1}_${value}`);
// console.log(idlist);
// console.log(useridlist);

const apiresponsedata = [
    {id : 10, name : 'bare'},
    {id : 21, name : 'lion'},
    {id : 31, name : 'fox'}
];

const idlist = apiresponsedata.map((value) => value.id );

console.log(idlist);
