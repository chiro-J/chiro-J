function solution(a, b) {
    var answer = 0;
    
    
    let sum = 0;
    
    if (a > b) {
        for (let i = a; i >= b; i--) {
            sum += i;
        }
        return sum;
    }
    
    else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    }
        
    
    else {
        return a;
    }
    
    
    return answer;
}


// a > b, a < b : 조건문
// a ~ b : 반복문


