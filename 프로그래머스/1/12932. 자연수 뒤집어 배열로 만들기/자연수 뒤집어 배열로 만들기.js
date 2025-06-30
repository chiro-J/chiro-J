function solution(n) {
    var answer = [];

    let stNum = String(n);
    
    for (let i = 0; i < stNum.length; i++) {
        answer.unshift(parseInt(stNum[i]));
    }

    return answer;
}




// n은 자연수, n을 string으로 바꿈
// 인덱싱해서 일의 자리부터 배열 시작에 추가 (5, 4, 3, 2, 1) -> 반복문
