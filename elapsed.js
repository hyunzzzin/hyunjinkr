//경과 시간확인하기
/* syntax
Date.now() -> 기준시에서 현재 시간을 밀리초로 가져오기*/

// const sec = math.floor(diff /1000);
// console.log(sec);

const oldTime = Date.now();

setInterval(() =>{
    const currentTime = Date.now();

    const diff = currentTime - oldTime;

    const sec = math.floor(diff /1000);

    console.log(`${sec}초 경과`);
});