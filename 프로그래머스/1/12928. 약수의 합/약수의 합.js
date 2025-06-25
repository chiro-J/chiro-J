function solution(n) {
    var answer = 0;
    return divisorsSum(n);
}

function divisorsSum(n) {
    let sum = 0;
    let i = 1; 
    
    while (i <= n) {    
        if (n % i === 0) {
            sum += i;
        }
        i++
    }
    return sum;
}


// n : 정수
// n % x = 0
// x = {a, b, c, ...}
// sum(x)

// 약수를 "찾는" 거니까 1부터 n까지 하나하나 넣어본다 -> 반복문
// i는 반복 카운터, 1부터 시작, n % i === 0 이면 sum 에 누적시키기 -> if문
// 나머지가 남는 경우에는 더하지 않고 다음 순번으로 패스