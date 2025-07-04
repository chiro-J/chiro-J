class Car {        // Car 클래스 생성

    drive(driver: Driver) {     // driver 변수는 Driver 클래스로부터 받음
        console.log(`${driver.name}님, 운전을 시작합니다.`);    // driver 변수에서 name 호출
    }
    
}

class Driver {      // Driver 클래스 생성
    name: String;   // 운전자의 name 을 받음
}


let car = new Car();        // Car 클래스의 객체 생성
let driver = new Driver();  // Driver 클래스의 객체 생성
driver.name = "홍길동";     // driver 변수에서 name을 호출해서 "홍길동" 이라는 값을 넣음

car.drive(driver);      // car 객체에서 drive 메서드를 호출. 이때 driver 변수를 넣음