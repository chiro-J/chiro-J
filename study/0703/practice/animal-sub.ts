import { Animal, Doggo, Kitty } from "./animal";            // 원본 파일로부터 모듈화된 각 클래스 호출

// animals 변수에 Animal이라는 배열 만들어서 배열 안에 Doggo와 Kitty 클래스의 객체들 넣기
const animals: Animal[] = [new Doggo(), new Kitty()];       

// 반복문으로 각 동물의 소리 출력
// 같은 sound() 메소드를 호출하지만, 각 객체의 실제 타입에 따라 다른 소리가 출력됨
animals.forEach(animal => {
    animal.sound();  // 다형성! 같은 메소드명이지만 다른 결과
});