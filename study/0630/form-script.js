// 주문인과 수령인이 같을 때 체크해서 수령인 칸에 clone
function copyName() {
    if (document.getElementById("same").checked) {
        document.getElementById("shipName").value =
            document.getElementById("orderName").value;
    } 
    
    else {
        document.getElementById("shipName").value = "";
    }
}


// 이름과 나이를 입력하지 않았을 때의 유효성 검사, false를 return 해서 제출을 막음
function validateForm() {
    let name = document.getElementById("userName").value;
    let age = document.getElementById("userAge").value;

    if (name === "") {
        alert("이름을 입력하세요.");
        return false;
    }

    if (isNaN(age) || age < 1) {
        alert("나이를 올바르게 입력하세요.");
        return false;
    }

    alert("폼이 정상적으로 제출됩니다.");
    return true;
}


// 성별에 대해 유효성 검사, [name이 "gender"]인 input 항목에 대해 :checked된 경우의 value를 가져옴
function validateGender() {
    // alert(document.querySelector('input[name="gender"]:checked').value);
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;

    if (male) {
        return document.getElementById("male").value;
    }
    console.log(male, female);
}


// 드롭다운 타입의 국가 항목에 대해서 value 를 가져옴
function validateCountry() {
    let country = document.getElementById("country").value;
    console.log(country);
}


// 폼 전체에 대해 각 항목에 대한 유효성 검사를 통과하지 않으면 제출을 막음
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
        e.preventDefault(); // 유효성 통과 못하면 제출 막기
        alert("필드를 올바르게 입력하세요.");
    }
});


// 폼 제출 전 미리보기 기능
function preview() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let preview_username = document.getElementById("preview_username");
    let preview_email = document.getElementById("preview_email");
    let preview_password = document.getElementById("preview_password");
    console.log(username, email, password);
    preview_username.innerText = username;
    preview_email.innerText = email;
    preview_password.innerText = password;
}


// 실습 + 정규 표현식을 이용한 이메일 유효성 검사

document
    .getElementById("signupForm")
    .addEventListener("submit", function (e) {
        e.preventDefault(); // 폼 제출 막기

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (!username) {
            alert("이름을 입력하세요.");
            return;
        }

        // 정규 표현식
        // [앞에 영어 소문자와 '-' 포함 최소 1자 이상]@(@ 필수).(.필수)[대소문자 무관 2글자 이상]
        const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("올바른 이메일을 입력하세요.");
            return;
        }

        if (password.length < 8) {
            alert("비밀번호는 8자 이상이어야 합니다.");
            return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        alert("회원가입 성공!");
        // 이곳에 실제 서버 전송 코드를 추가
        preview();
    });