class User2 {
    userName: string;
}

class Product {
    productName: string;
}

class Order {
    user: User2;
    product: Product;

    summary() {
        console.log(`사용자 ${this.user.userName}가 상품 ${this.product.productName}을 주문했습니다.`)
    }
}


let user1 = new User2();
user1.userName = "홍길동"

let product1 = new Product();
product1.productName = "책"

let order1 = new Order();
order1.user = user1;
order1.product = product1;

order1.summary();