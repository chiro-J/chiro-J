class User {            // User 라는 클래스 생성

    name: string;

    constructor(name: string) {         // 생성자 생성 (초기화 담당)
        this.name = name;               // name 이라는 변수를 생성자에서 쓰겠다고 지정 (this)
    }

    // constructor(public name: string) {}          // 요즘 쓰는 방식

    greeting() {
        console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`)
    }
}



let user = new User("홍길동");

user.greeting();