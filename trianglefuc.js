//삼각함수 계싼을 사용하고 싶을때
//좌표에서 각도를 구하고 싶을때
//호를 그리는 애니메이션 효과를 주고싶을때
/* syntax
math.pi 원주율
math.cos 코사인
math.sin 사인
math.tan 탄젠트
math.acos 코사인 역함수
math.asin 사인 역함수
math.atan 탄젠트 역함수
math.atan2(y좌표,x좌표) (x,y)가 이루는 각도*/

var a = Math;
console.log(a.PI); //원주율
console.log(a.cos((90*a.PI)/180)); // cos90도 6.12323
console.log(a.sin((90*a.PI)/180)); //sin 90도 1
console.log(a.tan((45*a.PI)/180)); //tan 45도 0.99999
console.log(a.acos(1)); // 역함수 사인 1 = 0
console.log((a.atan2(1,1)*180)/a.PI); //(1,1)의 좌표가 이루는 각도 