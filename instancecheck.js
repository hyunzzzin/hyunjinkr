//객체 인스턴스 확인하기
//syntax
/*syntax 
 데이터 instanceof 객체 -> 데이터가 객체의 인스턴스인지 확인 */

// const today = new Date();

// console.log(today instanceof Date);
// console.log(today instanceof Array);

function showCurrentDate(argument){
    if(argument instanceof Date){
        console.log(`현재는 ${argument.toLocaleDateString()}입니다.`);

    } else{
        console.log('적절한 데이터 타입이 아닙니다.');
    }
}
const today = new Date();
const myArray = [1,2,3];

showCurrentDate(today);
showCurrentDate(myArray);