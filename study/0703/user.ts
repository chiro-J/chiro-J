class User {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // constructor(public name: string) {}

    greeting() {
        console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`)
    }
}







let user = new User("홍길동");

user.greeting();