// 주문 시스템은 그림을 그리든 ERD를 그리든 그려서 이해하는 게 더 빠르다.
class User0 {           // 이용자, 고객 클래스
    userName: string;
}

class Product {         // 제품, 상품 클래스
    productName: string;
}

class Order {           // 주문 클래스 (고객과 상품을 받음)
    user: User0;
    product: Product;

    summary() {         // 다른 클래스에서 받은 속성들을 이용하여 로그 출력
        console.log(`사용자 ${this.user.userName}이(가) 상품 ${this.product.productName}을 주문했습니다.`)
    }
}


// 각 클래스의 객체 생성

let user1 = new User0();
user1.userName = "홍길동"

let product1 = new Product();
product1.productName = "책"


// 주문 클래스의 객체는 생성할 때 다른 클래스의 속성을 호출

let order1 = new Order();
order1.user = user1;
order1.product = product1;


// 주문 객체에서의 메서드 호출

order1.summary();