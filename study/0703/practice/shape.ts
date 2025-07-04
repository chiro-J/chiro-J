abstract class Shape {          // abstract로 추상 클래스 생성
    size: number;
    // calculateArea() {
    //     return 1;
    // }

    // 추상 클래스 안에 있는 메서드도 무조건 추상 abstract 붙여야 함
    // 이 클래스를 상속 받는 자식 클래스에서 "필수로 설정"해야할 메서드를 선언
    abstract getAreaRectangle(width: number, height: number): number;
    abstract getAreaCircle(radius: number): number;
}


// 부모 클래스를 상속 받는 자식 클래스에서 추상 메서드를 구체적으로 설계
class Rectangle extends Shape {
    getAreaRectangle(width: number, height: number): number {
        return width * height;
    }
    // 다른 추상 클래스에 대해서는 예외처리 해야함. 에러 출력
    getAreaCircle(radius: number): number {
        throw Error("Unimplemented method")
    } 
}


class Circle extends Shape {
    getAreaCircle(radius: number): number {
        return radius ** 2 * Math.PI
    }
    getAreaRectangle(width: number, height: number): number {
        throw Error("Unimplemented method")
    }
}

// 각 클래스에 맞게 객체 생성
let rectangle = new Rectangle();
let circle = new Circle();

// 각 객체들에서 오류를 출력하지 않는 메서드 호출
rectangle.getAreaRectangle(4, 3);
circle.getAreaCircle(5);

// // 오류를 출력하는 메서드를 호출할 경우.
// rectangle.getAreaCircle(3);