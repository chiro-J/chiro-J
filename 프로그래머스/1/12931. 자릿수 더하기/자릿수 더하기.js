function solution(n)
{
    var answer = 0;

    return numSum(n);
}

function numSum (n) {
    let strNum = String(n);
    let sum = 0;
    for (let i = 0; i <= strNum.length - 1; i++) {
        sum += parseInt(strNum[i]);
    }
    return sum;
}







// 주어진 수를 먼저 string 으로 변환
// string 으로 변환된 숫자들을 각각 인덱싱해서 쪼갬
// 쪼개진 숫자들을 다시 number 타입으로 변환해서 합산

// 인덱싱이랑 합산을 반복문, 쪼개는 거까지 해서 함수화









