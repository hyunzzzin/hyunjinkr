//날짜 계산하기

const date= new Date('2020/06/01');
date.setMonth(date.getMonth() -1);
console.log(date.toLocaleDateString());

date.setDate(date.getDate() + 60);
console.log(date.toLocaleDateString());