//빈 데이터 이해하기
/* syntax
null -> 데이터가 존재하지않음 */

// function searchUser(targetId){
//     const userList = [
//         {id :1, name : '사자'},
//         {id :2, name : '곰'},
//         {id :3, name : '여우'}
//     ];

//     const targetUser = userList.find((user) => user.id === targetId);
//     return targetUser.name;

// }

// searchUser(1);
// searchUser(4);


function searchUser(targetId) {
    const userList =[
        {id:1, name:'사자'},
        {id:2, name:'곰'},
        {id:3, name:'여우'}
    ];

    const targetUser = userList.find((user) => user.id === targetId);

    if (targetUser === undefined) {
        return null;
    }
    return targetUser.name;

}
console.log(searchUser(1));
console.log(searchUser(4));