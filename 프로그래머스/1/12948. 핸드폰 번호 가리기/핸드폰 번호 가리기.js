function solution(phone_number) {
    var answer = '';
    
    const len = phone_number.length;
    
    let result = "";
    
    for (let i = 0; i < len; i++) {
        if (i <= len - 5) {
            result += "*";
        }
        else {
            result += phone_number.at(i);
        }
    }
    
    return result;
}




// 뒤에서 5번째부터 마스킹 --> 앞에서부터 len-5까지 마스킹

// 파이썬에선 [-1] 이런 식으로 인덱싱 했었지만, JS에선 .at(-1) 이런 식으로 인덱싱한다.
