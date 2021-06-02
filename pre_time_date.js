//현재 시간과 날짜 가죠오기
/* syntax
toLocaleDateString() -> 현재 날짜를 문자열로 가져오기
toLocaleTimeString() - > 현재 시각을 문자열로 가져오기 */ 

const date = new Date();

const locale = date.toLocaleString();
const localeDate = date. toLocaleDateString();
const localeTime = date.toLocaleTimeString();

console.log(`${locale} \n ${localeDate} \n ${localeTime}`)