//함수 파라미터의 초깃값을 설정하고 싶을때
//함수 파라미터를 생략 가능하도록 설정하고 싶을때
//syntax
// function 함수명(파라미터1, 파라미터 2=초깃값){} ->함수에 값 전달
//(파라미터1, 파라미터 2=초깃값){} ->함수에 값 전달

/* 세금이 포함된 가격을 반환하는 함수 */
function calcfunction(price, tax = 0.08){
    const result = price +price *tax;
    return result;
}

const result1 = calcfunction(100);
console.log(result1); //price만 입력하고 tax를 생략할경우 위에서 정의된 0.08을 적용해 108이 출력

const result2 = calcfunction(100, 0.1);
console.log(result2); // 여기선 tax를 정의했기 때문에 0.1를 적용 110이된다.