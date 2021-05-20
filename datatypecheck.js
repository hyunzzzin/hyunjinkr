//데이터 타입 확인하기
//데이터 타입을 확인하고 싶을때
//데이터 타입에 따라 처리 작업을 지정하고 싶을때
/*syntax 
typeof 데이터 ->데이터 타입을 확인 
undefined ->undefined
null -> null
boolean - > true,false
string - > '사자'
symbol ->symbol()
number - >1 ,30
object -> [1,2,3]  , {id:200, name:안현진}
함수 -> function(), class myclass{} */

console.log(typeof true);

console.log(typeof 10);

console.log(
    typeof function(){
        console.log('test');
    }
);
console.log(typeof class myclass {});