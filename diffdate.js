//날짜 차이 구하기

// const dateA = new Date('2020/06/01 10:00:00');

// const dateB = new Date('2020/06/01 07:00:00');

// const diffMSec = dateA.getTime() - dateB.getTime();

// const diffHour = diffMSec / ( 60*60*1000);
// console.log(`${dateA} \n${dateB}\n시간의 차이는 ${diffHour}입니다.`);

const dateA = new Date('2021/06/02 01:10:00');

const dateB = new Date('2021/06/02 00:50:00');

const diffMSec = dateA.getTime() - dateB.getTime();
const diffMin = diffMSec / (60 * 1000);
console.log(`시간의 차이는 ${diffMin}분 입니다`);