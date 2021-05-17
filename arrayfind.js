//유저정보가 담긴 배열에서 ID를 기준으로 정보를 가져오고싶을때
/* syntax
배열.find(콜백함수) -> 콜백함수 조건에 맞는 첫 요소
배열.findindex(테스트함수)->콜백함수 조건에 맞는 첫 요소의 인덱스 */

//([요소],[인덱스],[기존배열]) =>진랏값  -->요소를 확인하고 진릿값을 반환

// const myArray = ['곰','사자','여우','원숭이'];

// // const targetUser = myArray.find((element) => element === '사자');
// const targetUser = myArray.find(element => {
//     return element === '사자'
// });
// console.log(targetUser);

const myArray = ['사자','곰','여우','양'];

const targetindex = myArray.findIndex((element) => element ==='곰');
console.log(targetindex);