function solution(n) {
    var answer = 0;
    
    
    let x = Math.sqrt(n);
    
    
    function sqrer (x) {
        if (x % 1 == 0) {
            return (x + 1) ** 2;
        }
        else {
            return -1;
        }
    }
    

    
    
    
    return sqrer (x);
}



// n이 x**2 의 형태로 들어옴.
// Math 메소드 중 sqrt() 메소드라는 게 있다더라.
// x는 정수여야 함. 아닐 경우에는 -1을 리턴하자. --> 조건문

