//배열 요소 정렬 방법 지정
//배열 요소를 오름차순/내림차순으로 정렬하고싶을때

/*syntax
배열.sort(비교함수) -> 배열을 비교함수로 정렬하기
(비교함수)반환값 < 0 ->a,b의 순서대로 정렬
(비교함수)반환값 = 0 ->정렬 순서 변화 없음
(비교함수)반환값 >0 ->b,a의 순서대로 정렬 */
const array1 = [1,2,3,4,5];

array1.sort((a,b) => {
    if (a < b){
        return 1;
    }
    if (a === b){
        return 0;
    }
    if (a >b){
        return -1;
    }
});
console.log(array1);
