// 1. 숫자 두 개를 변수로 저장하고 더한 결과를 출력해보세요.
let m = 2;
let n = 3;
c = m + n;
alert(c);


// 2. 이름과 나이를 저장하고 다음과 같은 문장을 출력해보세요. "홍길동님은 20살입니다."
let yourName = prompt("이름을 입력하세요.");
let yourAge = Number(prompt("나이를 입력하세요."));
alert(`${yourName}님은 ${yourAge}살입니다.`);


// 3. 정사각형의 한 변 길이를 변수로 저장하고 넓이를 출력해보세요.
let side = 10;
alert(a**2);


// 4. 숫자 하나가 짝수인지 홀수인지 출력해보세요.
let num = Number(prompt("숫자를 입력하세요."));
if (num % 2 == 0) {
    alert("짝수");
}   else {
    alert("홀수");
}

// 5. 나이에 따라 아래 문장을 출력해보세요.
let age = Number(prompt("나이를 입력하세요."));
if (age >= 19) {
    alert("성인입니다.");
}   else {
    alert("미성년자입니다.");
}


// 6. 비밀번호가 맞는지 확인하는 코드를 작성해보세요.
let password = 1234;
let input = prompt("비밀번호를 입력하세요.");
if (input === password) {
    alert("로그인 성공");
}   else; {
    alert("로그인 실패");
}