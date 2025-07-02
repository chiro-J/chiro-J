class Person2 {
    // name: string;
    // age: number;
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

    constructor(public name: string, private age: number) {}
    introduce(): string {
        return `Hi, I'm ${this.name}. I'm ${this.age} years old.`;
    }
}


class Car implements Vehicle{
    carModel: string;
    owner: string;
    carWeight: number;
    buyYear: number;
    isSunk: boolean;
    distance: number;

    drive() {
        console.log("Go");
    }

    alarm() {
        console.log("Beep Beep");
    }

    back() {
        console.log("Back");
    }

    wipe() {
        console.log("Wipe");
    }

    break() {
        console.log("Break");
    }

    accelerate() {
        console.log("Accelerate");
    }

    trunk() {
        console.log("Trunk");
    }
}


class DumpTruck extends Car {
    storage: number;
    operate() {
        console.log("Operate");
    }
    spread() {
        console.log("Spread");
    }
}

class Bus extends Car {
    passenger: number;
    busNumber: number;

    constructor(passenger: number, busNumber: number) {
        super();
        console.log("Bus constructor")
    }

    openDoor() {
        console.log("Open Door");
    }
    trunk() {
        console.log("");
    }


}



interface Vehicle {
    break(): void;
    accelerate(): void; 
    trunk(): void;
}