class Person {          // Person 클래스 생성 : name 속성, age 속성
    name: string;
    age: Number;

    introduce() {           // 클래스 안에서 지정한 속성 사용 - this.속성
        console.log(`안녕하세요, ${this.age}살의 ${this.name}입니다.`)
    }
}

// Person 클래스의 객체(인스턴스) 생성
let person = new Person();
person.age = 22;
person.name = "Alice";


// 생성된 객체에서 클래스 내 메소드 호출
person.introduce();