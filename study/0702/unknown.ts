let value2: unknown = 10;   // value2 라는 변수를 unknown타입으로 지정하고 10 할당
value2 = "hello";           // 가능, 뭐든 할당 가능한 unknown이라서 덮어써짐



value2 = new Array();       // 배열을 새로 할당 (가능)

if (value2 instanceof Array) {      // value2가 Array야? 확인하고 
    value2.push(22);                // 맞으면 22라는 값 추가(push)
}

console.log(value2);



