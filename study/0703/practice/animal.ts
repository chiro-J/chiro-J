// ※ animal-sub 를 위한 모듈화 진행 (export)

export class Animal {          // Animal 클래스 생성 (부모 클래스)

    animal: string;     // 클래스에서 받을 animal 속성 설정

    sound() {           // 동물이 짖는 메소드 생성
        console.log("!!!")
    }
}


// Animal 클래스에게 상속 받는 Doggo 클래스 생성 (자식 클래스, extends 사용)
export class Doggo extends Animal {        
    sound() {           // bark 메소드 생성 (오버라이딩)
        console.log("멍멍!")
    }
}


// Animal 클래스에게 상속 받는 Kitty 클래스 생성 (자식 클래스, extends 사용)
export class Kitty extends Animal {
    sound() {           // meow 메소드 생성 (오버라이딩)
        console.log("야옹!")
    }
}


// 각각의 자식 클래스로부터의 객체 생성
let doggo = new Doggo();
let kitty = new Kitty();

// 생성된 각각의 객체에서 메소드 호출
// doggo.sound();
// kitty.sound();




