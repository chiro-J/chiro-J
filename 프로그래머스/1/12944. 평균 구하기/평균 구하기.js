function solution(arr) {
    var answer = 0;
    
    
    let len = arr.length
    
    let sum = 0
    
    for (let i = len; i >= 1 ; i--) {
        let popie = arr.pop();
        sum += popie;
    }
    
    return sum/len;
     

}



// 배열의 평균 값 

// 배열의 각 원소들을 추출해서 전부 더하고 각 원소 개수 만큼 나눈다...? --> 반복문