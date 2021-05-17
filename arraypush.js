//배열에 요소를 추가하고싶을때
//요소를 배열의 처음 혹은 마지막 부분에 추가하고 싶을때
/* syntax
배열.unshift(요소1,요소2) -> 배열 첫 위치에 요소를 추가
배열.push(요소1,요소2) -> 배열 마지막 위치에 요소를 추가 */
 
const array1 = ['사과','귤'];
array1.unshift('바나나');
console.log(array1);

const array2 = ['사과','귤'];
array2.push('바나나','딸기');
console.log(array2);

