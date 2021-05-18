//배열 섞기
//게임에서 요소의 값을 섞을때

const array = [1,2,3,4,5];

const arraylength = array.length;

//피셔 에이츠 알고리즘
for (let i = arraylength -1; i>=0; i--){
    const randomindex = Math.floor(Math.random() * (i+1));
    [array[i],array[randomindex]] = [array[randomindex], array[i]];
}

console.log(array);

const array1 = [1,2,3,4,5,6,7,8,9,10];
const shuffled1 = shuffleArray(array1);
console.log(shuffled1);