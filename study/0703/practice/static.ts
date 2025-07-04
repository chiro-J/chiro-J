class Counter {
    static count: number = 0;

    static increment() {
        Counter.count++;
    }

    static getCount() {
        console.log(Counter.count);
    }
}


// 인스턴스(객체) 생성 없이 사용 가능
// 클래스 이름으로 직접 접근
// 모든 곳에서 같은 값 공유
Counter.increment();
Counter.increment();
Counter.increment();
Counter.getCount();