//카운트다운
/* syntax
setInterval(함수,밀리초) - > 밀리초 후 함수 실행 */

const totalTime = 10000;
const oldTime = Date.now();

const timerId = setInterval (() => {
    const currenTime = Date.now();
    
    const diff = currenTime - oldTime;

    const remainMSec = totalTime - diff;

    const remainSec = Math.ceil(remainMSec / 1000);

    let label = `남은 시간 ${remainSec}초`;

    if (remainMSec <= 0){
        clearInterval(timerId);

        label = '종료';
    }
    console.log(label,1000);
);

