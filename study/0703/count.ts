class Counter {         // Counter 클래스 생성
    count: number = 0;      // count를 0으로 변수 지정

    increase () {           // ++ : 호출할 때마다 1씩 증가하는 메소드 
        this.count++;       // 클래스에서 지정한 count 변수를 쓰기 위해 this 사용 
    }

    show () {               // count 변수의 값을 확인하기 위한 메소드
        console.log(this.count);
    }

}


let counter = new Counter();        // Counter 클래스의 인스턴스(객체) 생성

// counter 객체에서 증가하는 메소드를 호출
counter.increase();
counter.increase();
counter.increase();

// count 변수의 값을 확인하는 메소드를 호출
counter.show();