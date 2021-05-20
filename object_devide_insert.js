//객체 요소 분할 대입
//객체의 데이터를 정리하여 대입하고 싶을때
//객체 일부 데이터를 추출하여 사용하고싶을때
/* syntax
{변수1, 변수2,... } = 객체 -> 객체의 데이터를 각 변수에 대입 */

// const userdata1 = {
//     id :1 , name:'사자', age : 26
// };
// const { id, name, age} = userdata1;

// console.log(id);
// console.log(name);
// console.log(age);

const userdata2 = {
    id :1, name: '사자', age : 26
};
const {age, id, address} = userdata2;
console.log(id);
console.log(age);
console.log(address);
const { age : myage} = userdata2;
console.log(myage);