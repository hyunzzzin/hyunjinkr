//시간 다루기
/* syntax
getHours() -> 시간 가져오기
getMinutes() - > 분 가져오기
getSeconds() -> 초 가져오기
getMilliseconds() -> 밀리초 가져오기 */

// const date = new Date();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// const label = `${hour}시${minutes}분${seconds}초`;

// console.log(label);

const date = new Date();
const hour = date.getHours();
let meridiem;
let hour2;

if(hour < 12){
    meridiem = '오전';
    hour2= hour;
} else {
    meridiem = '오후';
    hour2 = hour -12;

}

const label = `${meridiem}${hour2}시`;

console.log(label);