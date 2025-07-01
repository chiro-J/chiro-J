function solution(x, n) {
    var answer = [];
    
    
    for (let i = 1; i <= n; i++) {
        let m = x * i;
        answer.push(m);
    }
    
    return answer;
}



// 입력 받은 정수 x를 n만큼 반복해서 더한 합계 만큼 배열에 담음 --> 반복문