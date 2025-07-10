function solution(numbers) {
    var answer = -1;
    
    
    let sum = 0;
    
    let soNums = numbers.sort()
    
    for (let i = 0; i < 10; i++) {
        if (!soNums.includes(i)) {
            sum += i;
        }
    }
    
    
    
    return sum;
}


// 없는 값 찾기 : .includes(i) 메서드, 반복문

// !배열 : '!'는 반대되는 값, 없는 값(null)을 확인할 때 씀.
