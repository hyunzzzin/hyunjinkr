//객체 복사
// 데이터를 복사하고싶을때

/* syntax
{...복사 대상객체} -> 대상 객체의 각 요소를 분할 대입(복사)

Object.assign({},복사대상객체) -> 객체를 복사 */

const object1 = {
    result : true,
    member:[
        {id:1,name:'여우'},
        {id:2,name:'lion'},
        {id:3,name:'tiger'}
    ]
};
console.log(object1);

const copiedobject1 = Object.assign({}, object1);

console.log(copiedobject1);

const copiedobject2 = {...object1};

 
console.log(copiedobject2);