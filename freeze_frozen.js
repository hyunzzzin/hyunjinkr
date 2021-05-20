//객체 수정 제안하기
// 객체의 깊은 계층 까지 수정을 제한하고 싶을때
/* syntax
Object.freeze(객체) -> 객체의 수정을 제한 -> 객체
Object.isFrozen(객체) -> 객체의 수정제한 확인 - >진릿값 */

// const object1 = { id:10, name:'사자'};
// object1.id = 12;
// object1.address = '서울';
// console.log(object1);

// 'use strict';

// const object2 = {id:10 , name: '사자'};
// Object.freeze(object2);

// object2.id = 12;
// object2.address = '서울';

// console.log(object2);
'use stirct';

const object2 = {id:2, name:'사자'};
Object.freeze(object2);

console.log(Object.isFrozen(object2));