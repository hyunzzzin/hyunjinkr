//배열의 각 요소 데이터를 처리하고 싶을때
//배열의 루프처리 중 요소의 인덱스가 불필요할때
/*syntax
for(const 요소 of 배열){}  -> for of 루프처리
*/

const array = ['딸기','귤','사과'];

for(const value of array){
    console.log(value);
}