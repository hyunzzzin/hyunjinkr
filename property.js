//개체 속성 확인하기
// api response의 특정 데이터를 확인하고 싶을때
// 지정한ㄷ ㅔ이터가 객체에 존재하지 않아서 처리 작업을 취소하고싶을때

/*syntax
객체.hasOwnProperty(키) -> 데이터 유무확인

syntax 
키 in 객체 ->데이터 유무 여부 확인 */

const userdata = {
    id :1,
    name : '사자',
    age : 26
};

// console.log(userdata.hasOwnProperty('id'));
// console.log(userdata.hasOwnProperty('address'));
// console.log('id' in userdata);

console.log(userdata.id != null);
console.log(userdata.address != null);
console.log(userdata['id'] =! null);