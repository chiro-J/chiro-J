// // 구구단
// let i = 2;
// let j = 1;
// console.log(`구구단 출력`);
// console.log(`${i}단`);
// while (j < 10) {
//     console.log(`${i} x ${j} = ${i*j}`)
//     j++;
// }



// 팩토리얼 계산기
let num = prompt("숫자 입력");
let result = 1;
while (num > 0) {
    result *= num;
    num--;
}
console.log(result);
