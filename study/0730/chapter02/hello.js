const http = require("http");       // http 모듈을 불러와서 변수에 할당
let count = 0;          

// createServer() : 서버 인스턴스 생성 함수(요청과 응답을 인수로 받음)
const server = http.createServer((req, res) => {        
    log(count);         // 요청에 대한 로그 남기기
    res.statusCode =200;        // 요청에 대한 상태 코드 (200 : OK, 성공)
    res.setHeader("Content-Type", "text/plain");        // 헤더 설정 : req/res에 대한 부가 정보 설정 (plain : 평문)
    res.write("hello\n");       // 응답으로 "hello\n" 작성

    setTimeout(() => {          // 해당 시간이 지나고 취할 액션 {함수}, 동작 시간 (ms)
        res.end("Node.js");
    }, 2000)

});

function log(count) {
    console.log((count += 1));
}

// 포트 번호 (8000) 지정 후 서버 실행
server.listen(8000, () => console.log("Hello Node.js"));