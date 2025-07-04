interface Moveable {            // 특정 클래스들에게 꼭 지켜야 하는 규약 설정, 타입 정리할 때 많이 씀
    move(): void;
}

// 클래스에 implements를 넣어 해당 인터페이스를 따름
class Car0 implements Moveable {
    move(): void {
        console.log("car");
    }
}


class Robot implements Moveable {
    move(): void {
        console.log("robot");
    }
}


