function solution(A,B){
    var answer = 0;


    let sum = 0;
    
    
    let sA = A.sort((a, b) => a - b);
    let sB = B.sort((a, b) => a - b).reverse();
    
    

    for (let i = 0; i < A.length; i++) {
        sum += sA[i] * sB[i];
    }
    

    
    return sum;
}



// A.length = B.length

// 최소값을 만드려면 큰 수끼리 곱하는 건 피해야 함. 

// A 혹은 B를 한 쪽은 내림차순으로 정렬해서 작은 수 * 큰 수로 곱하게 끔 만들자.



