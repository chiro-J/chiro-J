function solution(s) {
    var answer = '';
    


    let numArray = s.split(" ").map(Number);

    numArray.sort(function(a, b) {
        return a - b;
    });
    
    
    const maxStr = numArray.pop().toString();
    
    const minStr = numArray[0].toString();
    
    
    
    
    return minStr + " " + maxStr;
}



// 받은 문자열을 split 함수를 거쳐 띄어쓰기 단위로 각각 쪼갬

// 쪼갠 문자열들을 숫자 형식으로 만들어서 새 배열로 넣음

// 배열에 넣고 sort 한 다음 min max 각각 뽑아서 toString() + toString() 으로 출력

// 맨 처음 껀 [0]으로, 맨 마지막은 pop()으로 꺼내기
