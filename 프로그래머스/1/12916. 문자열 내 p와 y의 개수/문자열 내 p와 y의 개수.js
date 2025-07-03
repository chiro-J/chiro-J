function solution(s){
    var answer = 0;
    
    const lower = s.toLowerCase()
    const sLen = s.length;
    
    let pSum = 0;
    let ySum = 0;

    for (let i = 0; i < sLen; i++) {

        if (lower[i] == "p") {
            pSum += 1;
        }

        else if (lower[i] == "y") {
            ySum += 1;
        }
        
    }
    if (pSum == ySum) {
        return true;
    }
    else {
        return false;
    }
    
}

 


// 문자열 처음부터 끝까지 탐색 --> 반복문
// 같으면 T / 다르면 F --> 조건문
// 대소문자 구별 x : 싹다 소문자로 통일시키고 비교할까?