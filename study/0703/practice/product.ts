class Product {
    
    constructor(public name: string, public price: number) {}
    
    display() {
        console.log(`제품명: ${this.name}, 가격: ${this.price/10000}만원`)
    }
}

let product = new Product("MacBook", 1500000);

product.display();