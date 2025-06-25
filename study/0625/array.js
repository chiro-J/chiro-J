let fruits = ["사과", "바나나", "딸기"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);     // fruits 배열의 개수 

fruits.push("포도");    // fruits 배열 끝에 요소 추가
console.log(fruits.length);

fruits[fruits.length] = "키위";     // n개는 배열의 n-1번째 까지, n번은 n+1개 -> 요소 추가
console.log(fruits.length);

fruits[5] = "레몬"
console.log(fruits.length);

console.log(fruits)





let items = ["여권", "칫솔", "수건"];

items.push("충전기");
items.splice(1, 0, "세면도구");

console.log(items);
// alert("여행 준비물 목록: " + items.join(", "));

console.log(items.pop());       // 요소 추출 (실행하면 본래의 배열에선 삭제)
console.log(items);





let animals = ["강아지", "고양이", "토끼"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// for ~ of
for (let animal of animals) {
    console.log(animal);
}

// for Each
animals.forEach(function (animal) {
    console.log(animal);
})




// do while
let i = 0; 
do {
    console.log(i); 
    i++;
} while (i < 5);



// 복습/심화 - 별 찍기 (미완)
function printStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
printStars(3);



function printRightStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i).padStart(" "));
    }
}
printRightStars(5);



function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
printPyramid(4)