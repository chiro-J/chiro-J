let literalObj: "tom" | "linda" | "jeff" | "sue" | 50 | { name: string };
// 변수에 직접 타입을 직접 박아 넣음 - | - | - | - 이 값들 아니면 에러 발생
literalObj = { name: "linda" }; 