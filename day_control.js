//요일 다루기
/* syntax
getDay() - > 요일 가져요기 */

const date = new Date();
const day = date.getDay();
const dayList = ['일','월','화','수','목','금','토'];

const label = dayList[day];

console.log(label);