class Book {            // Book 클래스 생성
    title: string;      // title과 author를 받을 속성으로 지정
    author: string;
}

// 객체 생성, 각 객체들의 속성 설정
let book = new Book();
book.title = "책1";
book.author = "저자1"
let book2 = new Book();
book2.title = "책2";
book2.author = "저자2"
let book3 = new Book();
book3.title = "책3";
book3.author = "저자3"


// 배열을 만들어서 배열 안에 저장
let books = [book, book2, book3];
let books2 = Array<Book>();

books2.push(book);
books2.push(book2);
books2.push(book3);


// 반복문 : 배열 안에 있는 각 객체들이 가진 속성 호출
for (let i = 0; i < books.length; i++) {
    console.log(`책 이름: ${books[i].title}, 저자: ${books[i].author}`);
}
