// 유효성 검사 함수 (나이)
function printAge(age: number) {
    if (typeof age !== "number") {
        throw new Error("숫자만 허용됩니다.");
    }
    console.log(`${age}살`);
}

printAge(20);



// 커스텀 타입 검사 함수 만들기
type UserInput = string | number;
function isString(input: UserInput): input is string {
    return typeof input === "string"
}


// 반환 타입 유효성 검사
function getStatus(code: number): "success" | "error" {
    if (code === 200) return "success"
    return "error";
}


// 매개변수가 string 일 때만 길이 출력하는 함수
function showLength(input: string | number) {
    if (typeof input === "string") {
        console.log(`길이: ${input.length}`);
    }
    else {
        console.log("문자열이 아닙니다.");
    }
}