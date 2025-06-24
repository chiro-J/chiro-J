// // 구구단 출력
// console.log("구구단")
// console.log('**********************************')
// for (let i = 2; i < 10; i++) {
//     console.log(`${i}단`)
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
//     console.log('-----------------------------------')
// }


// 별 트리
for (let i = 0; i <= 10; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
    star += "*";
    }
    console.log(star);
}
// repeat 함수 
for (let i = 0; i <= 10; i++) {
    console.log("*".repeat(i + 1));
}


