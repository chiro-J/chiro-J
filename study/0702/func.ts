// 인자 각각에 타입, 리턴 값에 타입
function addNum(a: number, b: number): number {
    return a + b;
}

// 화살표 함수, 변수 greet에 할당 받는 name 값에 타입, 변수 greet 에 타입
const greet: (name: string) => string = (name) => `Hello, ${name}`;







// 예제
function runMore(distance: number): number {
    return distance + 10;
}

console.log(runMore(10));


function eat(calories: number) {
    console.log("I ate " + calories + " calories");
}

// void : return 하지 않음
function sleepIn(hours: number): void {
    console.log("I slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);