// 문제 1. 문자열 변수 선언
// 설명: 이름을 저장하는 name이라는 변수를 선언하고, 타입을 지정하세요. 값은 "Alice"로 지정하세요.
let username: string = "Alice"


// 문제 2. 숫자와 boolean 타입
// 나이를 나타내는 age 변수는 숫자 타입
// 학생 여부를 나타내는 isStudent는 boolean 타입 타입을 지정하고 값을 각각 21, true로 설정하세요.
let age: number = 21
let isStudent: boolean = true;


// 문제 3. 함수 매개변수와 반환 타입
// 두 숫자를 받아서 더한 값을 반환하는 함수 add를 작성하세요. 매개변수와 반환값에 모두 타입을 지정하세요.
function addNumber (num1: number, num2: number): number {
    return num1 + num2;
}


// 문제 4. 배열 타입
// 숫자로 구성된 점수 배열 scores를 선언하고 [80, 90, 100]을 넣으세요. 배열의 타입을 명확히 지정하세요.
let scores: number[] = [80, 90, 100];


// 문제 5. 객체 타입 정의
// 사람을 나타내는 객체 person을 선언하세요. - 이름: 문자열 / 나이: 숫자 객체 리터럴에 타입을 직접 지정
let personID: { name: string, age: number } = {
    name: "Alice",
    age: 22,
}


// 문제 6. 유니언 타입
// id라는 변수는 숫자이거나 문자열 / 적절한 타입으로 선언하고, "user123"을 할당
let id: number | string = "user123"; 
