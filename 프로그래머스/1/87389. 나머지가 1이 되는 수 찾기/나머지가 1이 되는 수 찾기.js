function solution(n) {
    var answer = 0;
    return dividor(n);
}

function dividor (n) {
    for (let i = 1; i < n; i++) {
        if (n % i == 1) {
            return i;
        }
    }
}

// n을 x로 나눈 나머지가 1
// (n - 1) % x = 0
// 1부터 n - 1 까지 나눗셈 반복문