//배열 요소 알파벳순 정렬하기
//대소문자 구분없이 알파벳순으로 정렬하고싶을때
/*syntax
문자열1.localcompare(문자열2) ->문자열1과 문자열 2비교 */

const arr1 = ['grape','Orange','apple'];
arr1.sort(); // 비교함수없이 쓸경우 대소문자 구분
console.log(arr1);

const arr2 = ['grape','Orange','apple'];
arr2.sort((a,b) => a.localeCompare(b)); // 대소문자 구분없이 알파벳 정렬
console.log(arr2);