function solution(absolutes, signs) {
    var answer = 123456789;
    
    
    let result = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        
        if (signs[i] == false) {
            let f_num = absolutes[i] - absolutes[i] * 2
            result += f_num
        } 
        
        else {
            result += absolutes[i]
        }
        
        
    }
    
    
    
    return result;
}



// 음수화 : n의 음수는 n - 2n으로 만듦

// 배열 각각의 원소들을 signs를 거침

// [제어문] signs 를 보고 t면 양수, f면 음수
// [반복문] absolutes의 원소 전체 처리 + 전부 다 더하기


