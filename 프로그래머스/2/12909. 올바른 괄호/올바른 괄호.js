function solution(s){
    var answer = true;

    
    const op = '(';
    
    const cl = ')';
    
    let sum = 0;
    
    
    if (s.split("")[0]== cl || s.split("").pop()== op) {
        return false
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == op) {
            sum++;
        }
        else if (s[i] == cl) {
            sum--;
            
            if (sum < 0) {
                return false;
            }
        }
    }
    return sum === 0;
    
    

    return answer;
}



// 처음에 뽑았을 때 '(' 가 나오는 개수만큼, ')'가 나와줘야 함.

// 짝수면 true, 홀수면 false

// .pop()



