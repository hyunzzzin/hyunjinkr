//배열요소 다루기
//배열 요소의 데이터를 처리하고 싶을때
/*syntax
배열.forEach(콜백함수) - >배열의 요솔 데이터 콜백함수로 실행

콜백함수 = ([요소],[인덱스],[기존배열]) =>{}   ->요소,인덱스,기존 배열을 사용해 처리*/


// const array = ['딸기','귤','사과'];
// array.forEach((value, index) => {
//     console.log(index,value);
// })

[1,2,3,4,5,6,7,8]
.filter((value) =>  value % 2 === 0) // filter는 반환값을 가짐
//짝수 값을 반환
.forEach((value) => {
    console.log(value);
});

