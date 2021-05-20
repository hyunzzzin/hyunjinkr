//객체 요소 값 확인하기
//API response 데이터를 확인하고 싶을때

/* syntax
object.keys(객체) -> 객체 각 키의 배열
object.values(객체) -> 객체 각 데이터의 배열
object.entires -> 객체 각 속성의 배열 */

const userdata = {
    id :1 , name: '사자',age :26
};
const {id, name, age } = userdata;

console.log(id);
console.log(name);
console.log(age);