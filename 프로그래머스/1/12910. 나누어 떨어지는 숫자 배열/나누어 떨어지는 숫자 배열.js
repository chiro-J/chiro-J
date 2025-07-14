function solution(arr, divisor) {
    var answer = [];
    
    
    let _return = [];
    
    let numArr = arr.sort((a, b) => a - b)
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % divisor == 0) {
            _return.push(numArr[i]);
        }
    }
    
    if (_return.length == 0) {
        _return.push(-1);
    }
    
    
    return _return;
}


// 자바스크립트에서 배열을 정렬하는 함수는 sort()뿐 이며, 문자열 기준으로만 정렬된다.

// 숫자로 된 배열은 sort() 메서드 안에 함수를 넣어야 함. (a - b : 오름차순, b - a : 내림차순)




