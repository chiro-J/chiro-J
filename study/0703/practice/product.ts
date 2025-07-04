class Product {         // Product 클래스 생성
    
    // 생성자에서 클래스 name, price 속성 설정
    constructor(public name: string, public price: number) {}
    
    // 클래스 내의 속성들을 이용한 display 메소드 생성
    display(): void {       // 
        console.log(`제품명: ${this.name}, 가격: ${this.price/10000}만원`)
    }
}

// Product 클래스의 객체 생성, 속성값 import
let product = new Product("MacBook", 1500000);

// 생성된 객체에서 display 메소드 호출
product.display();