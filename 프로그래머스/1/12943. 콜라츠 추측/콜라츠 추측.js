function solution(num) {
    var answer = 0;
    
    let result = 0;
    
    for (result = 0; result <= 500; result++) {
        
        
        if (num == 1) {
            return result;
        }
        
        if (num % 2 == 0) {
            num /= 2;
            
        }    
        else {
            num = num * 3 + 1;
        }
        
    }
    
    
    
    return -1;
}



