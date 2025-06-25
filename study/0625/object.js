// 객체 만들기
const user = {
    name: "철수",
    age: 20,
    greet: function () {    // 객체 안에 함수도 들어갈 수 있음.
        alert("안녕하세요!");
    },
};

// 객체의 속성(key-value 쌍) 호출
console.log(user.name);
console.log(user.age);
user.greet();   // 객체 안에 있는 함수 호출



function Student(name, age, gender, grade) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.grade = grade;

    this.sayHi = function () {
        alert(`안녕하세요 저는 ${this.name}입니다.`)
        console.log(this.name);
        console.log(this.age);
    };
}

const student1 = new Student("철수", 20, "남자", 2);
const student2 = new Student("유리", 18, "여자", 3);
const student3 = new Student("짱구", 17, "남자", 1);
const student4 = new Student("맹구", 22, "남자", 2);
const student5 = new Student("훈이", 18, "남자", 1);

student1.sayHi();





const account = {
    userName: "홍길동",
    userAge: 30,
    userEmail: "hong@example.com"
}; 





const book = {};

book.title = "자바스크립트 입문";
book.author = "김작가";
book.year = 2025;

delete book.year;   // 속성값 제거

// 키:값 쌍에 각각 자동으로 지정
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}








const product = {
    id: 101,
    name: "노트북",
    price: 1200000,
}

console.log(product["name"]);

for (let key in product) {
    console.log(`key: ${key}, value: ${product[key]}`)
}




// 두 수를 입력받는 계산기
const calculator = {
    add : function (a, b) {
        return a + b;
    },
    subtract : function (a, b) {
        return a - b;
    },
    multiply : function (a, b) {
        return a * b;
    },
    divide : function (a, b) {
        return a / b;
    },
    remainder : function (a, b) {
        return a % b;
    }
}

console.log(calculator.add(3, 4))



// 태어난 날부터 오늘까지
const today = new Date();
const birthday = new Date("1995-02-22");

let diff = today.getTime() - birthday.getTime();
let days = Math.floor(diff / (1000 * 60 * 60 * 24));

alert(`태어난 지 ${days}일 째 되는 날입니다.`);



// 현재의 시간 정보 가져오기
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);    // 0이 1월이라 +1 해줘야 맞음.
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

const fromString = new Date("2024-12-25");
const fromNumbers = new Date(2024, 11, 25);
const fromTimestamp = new Date(170000000000);



const d = new Date();
d.setDate(d.getDate() + 7);
d.setMonth(d.getMonth() + 1);
d.setHours(d.getHours());
d.setMinutes(d.getMinutes());


// 날짜 차이 계산
const date1 = new Date("2025-06-01");
const date2 = new Date("2025-06-11");

const diffInMs = date2 - date1;
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays);




// 날짜 포맷팅
const fd = new Date()

const formatted = `${d.getFullYear()} - ${String(d.getMonth() + 1).padStart(2, "0")} - ${String(d.getDate()).padStart(2, "0")}`;
console.log(formatted);



// 요일 이름 출력
const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
const dd = new Date();
console.log(`오늘은 ${dayNames[d.getDay()]}요일 입니다.`)


// 오전/오후 표시
const ddd = new Date();
const hour = d.getHours();
const ampm = hour >= 12 ? "오후" : "오전";
console.log(`${ampm} ${hour % 12 || 12}시`);


// 지금 시각 정보 출력
const nowaday = new Date();
const monthh = nowaday.getMonth();
const datee = nowaday.getDate();
const hourr = nowaday.getHours();
const minutee = nowaday.getMinutes();
console.log(`지금은 ${monthh + 1}월 ${datee}일, ${hourr}시 ${minutee}분입니다.`);




const mySelf = {
    myName: "이재희",
    myAge: "100",
    introduce: function () {
        alert(`ㅎㅇ, 난 ${this.myName}이고, ${this.age}야.`)
    }
}

function boook(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book21 = new boook("책1", "저자1", 2025);
const book22 = new boook("책2", "저자2", 2025);
const book23 = new boook("책3", "저자3", 2025);




const noww = new Date();
const thatDay = new Date("2024-11-11");
const difff = now.getTime() - thatDay.getTime();
const dayys = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(`${dayys}일 째 되는 날입니다. `)
