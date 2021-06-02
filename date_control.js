//날짜 다루기
/* syntax
getMonth() -> 월 가져오기
getDate() - > 일 가져오기 */

const date = new Date();
const month =date.getMonth() +1;
const day = date.getDate();
const label = `오늘은 ${month}월 ${day}일`;

console.log(label);