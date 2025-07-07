function solution(x) {
    var answer = true;
    


    let stNum = x.toString()

    let sum = 0;

    for (let i = 0; i < x.toString().length; i++) {
        sum += parseInt(stNum[i]);
    }
    
    
    if (x % sum == 0) {
        return true;
    }
    
    else {
        return false;
    }
    
    
    
    return sum;
}



// 일단 스트링으로 바꿔서 각 인덱스 별로 정수화하고 더하기 (반복문)

// return 값은 T/F (제어문)

