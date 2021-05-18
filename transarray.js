//유사 배열 객체를 배열로 변환하기
// 문자열과 유사 배열을 배열로 변환하고 싶을때
//반복 가능한 객체를 배열로 변환하고 싶을때

/* syntax 
[..변환대상] -> 배열로 변환 */

// const alldivelementlist = document.querySelectorAll('div');

// console.log(alldivelementlist.length);

// console.log(alldivelementlist[2]);

// const mystring = '안녕하세요';

// console.log(mystring.length);

// console.log(mystring[2]);

// console.log([...mystring]);o


//array.from()
/* syntax
Array.from(변환대상, [콜백함수]) -> 배열로 변환

syntax - 콜백함수

([요소],[인덱스],[기존배열]) =>{} -> 요소,인덱스, 기존배열을 불러와 작업 */

// const mystring = '안녕하세요';

// console.log(Array.from(mystring));

// const newarray = Array.from(mystring,(character)=>`${character}!`);

// console.log(newarray);

const mystring = '안녕하세요';

const newarray = [...mystring].map((character) => `${character}!`);

console.log(newarray);