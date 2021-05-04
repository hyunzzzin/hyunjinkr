//임의의 파라미터를 가지는 함수를 정의하고 싶을때
/*syntax
function 함수명(파라미터){] ->파라미터의 개수가 미정인 함수를 정의
(파라미터 ---) => {} ->파라미터의 개수가 미정인 함수를 정의
파라미터[인덱스] ->인덱스를 지정해서 파라미터를 사용 */
// ...파라미터 형식으로 정의한다.
function calcsum(...prices){
    let result = 0; // result 0으로 초기화
    for( const value of prices){
        result += value; //result = result + value
    }
    return result; //calcsum함수는 result를 반환값으로 보냄
}
const result1 = calcsum(10,20);
console.log(result1);

const result2 = calcsum(5,10,15);
console.log(result2);