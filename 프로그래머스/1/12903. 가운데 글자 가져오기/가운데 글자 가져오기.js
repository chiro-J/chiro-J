function solution(s) {
    var answer = '';
    
    
    const len = s.length
    
    let result = ""
    
    if (len % 2 == 0) {
        result += s.at(len/2-1);
        result += s.at(len/2);
    }
    
    else {
        result += s.at((len-1)/2)
    }
    
    
    
    
    return result;
}


// 홀수일 때 1개, 짝수일 때 2개

