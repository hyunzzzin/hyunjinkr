//flagA가 참이자 for문의 index가 홀수인 경우만 싱행되는 코드
// function myfunction(flagA){
//     for(let index = 0; index < 10; index ++){
//         if (flagA === true){
//             if(index % 2 !== 0){
//                 console.log(index);
//             }
//         }
//     }
// }
//위에처럼 continue가 없으면 if가 중첩되서 가독성이 떨어진다
// 그래서 아래 방법처럼

function myfunction(flagA){
    for(let index =0 ; index <10 ; index ++){
        if (flagA === false){
            continue;
        }
        if (index % 2 === 0){
            continue;
        }
        console.log(index);
    }
}