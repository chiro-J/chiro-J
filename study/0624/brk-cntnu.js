// let num = 0;
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     num += i;
//     console.log(`${i} 더하기 2`)
// }


let i = 1;
while (i <= 10) {
    if (i === 5) break;
    if (i === 3) {
        i++;
        continue;
    }
    console.log(`>>>${i}`);
    i++;
}