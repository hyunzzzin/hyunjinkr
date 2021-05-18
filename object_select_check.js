//객체 선언,수정,확인
// 객체의 속성을 변경하고싶을때
/* syntax
{} -> 객체를 초기화
{키 :값 ,키:값 ..} -> 객체를 초기화
객체[] -> 값을 가져오기
객체.키 -> 값을 가져오기
객체[키] = 값 -> 값을 변경하기
객체.키 = 값 -> 값을 변경하기 */

// const object = {};

// const person = {
//     id :1,
//     name : '거북이',
//     age : 28
// };

// console.log(person.id);
// console.log(person['name']);

// person.id = 2;
// person['name'] = '안현진';
// console.log(person.id);
// console.log(person['name']);

// const object2 = {};
// object2.foo;

// const response = {
//     result : true,
//     list : [{id:1,name:'tiger',age:26},
//             {id:2,name:'lion',age:32}]
// };

// console.log(response.list[0].name);

// response.list[1].age = 51;
// console.log(response.list[1].age);

//함수 타입도 가능
// const myclass = {
//     method1: function(){
//         console.log('1번 메소드 실행');

//     },
//     method2: function(){
//         console.log('2번 메소드 실행');
//     }
// };
// myclass.method2();