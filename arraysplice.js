//배열 내 요소를 다른 요소로 변환하고 싶을때
//배열.splice(위치,추출개수,요소1,요소2,...) ->지정위치 요소추출,요소추가

const array3 = ['사과','귤'];
array3.splice(1,0,'바나나'); // 인덱스 1의 위치에 0개 추출하고 바나나 입력
console.log(array3);

const array4 = ['apple','귤'];
array4.splice(1,1,'바나나','딸기');//인덱스 1번 위치에 1개 추출 바나나딸기입력
console.log(array4);
