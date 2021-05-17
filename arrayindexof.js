//배열 데이터의 특정 요소를 확인하고 싶을때
/*syntax
배열.indexOf(검색데이터.[시작위치]) -> 요소의 인덱스 위치 검색
배열.lastindexOf(검색데이터,[시작위치]) -> 끝에서부터 요소 위치 검색
배열.includes(검색데이터,[시작위치]) -> 요소의 포함여부확인 */

console.log(['사과','바나나','귤'].indexOf('바나나'));
console.log([0,2,4,5,4,2,0].indexOf(4));
console.log([0,2,4,6,4,2,0].lastIndexOf(4)); //제일 끝 인덱스를 반환

console.log(['사과','바나나','귤'].includes('바나나'));
console.log([0,2,4,6,4,2,0].includes(3));