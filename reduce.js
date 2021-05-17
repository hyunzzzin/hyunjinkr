//배열 요소 하나로 정리
//배열의 요소를 계산하여 하나의 값으로 만들고 싶을때

/* syntax
배열.reduce(콜백함수,[초기화]) - > 요소(좌->우)를 처리하여 하나의 값생성
배열.reduceRight(콜백함수,[초기화]) -> 요소(우 ->좌)를 처리하여 하나의 값 생성 

syntax -콜백함수
((이전요소,현재요소,인덱스,기존배열) => {/처리내용/}) -> 임의의 처리 */

// const pricelist = [ 100, 500, 900];

// const sum= pricelist.reduce((previous,current) => {
//     return previous + current;
// });

// console.log(sum);

//for 문을 사용한 sum
// const pricelist = [100,500,900];

// let sum = 0;

// for(const price of pricelist) {
//     sum += price;
// }
// console.log(sum);

//플래트닝
// const array = [['banana','apple','딸기'],['귤','포도']];

// const flattenedarray = array.reduce((previousValue, currentValue) => {
//     return previousValue.concat(currentValue);
// });
// console.log(flattenedarray);

const array = ['사자','여우','호랑이'];

const members1 = array.reduce((previous,current) => {
    return `${previous}와 ${current}`;
});
console.log(members1);

const members2 = array.reduceRight((previous, current) => {
    return `${previous}와 ${current}`;
});
console.log(members2);