class Person {
    name: string;
    age: Number;

    introduce() {
        console.log(`안녕하세요, ${this.age}살의 ${this.name}입니다.`)
    }
}

let person = new Person();
person.age = 22;
person.name = "Alice";


person.introduce();