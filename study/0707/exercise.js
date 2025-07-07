// 연습문제 1: Map과 Set 활용하기
// 문제:
// 1~5 숫자가 포함된 배열 [1, 2, 2, 3, 4, 5, 5]에서 중복을 제거한 후,
// 모든 숫자에 5를 더한 값을 순서대로 출력하세요.
// 그리고 "total"이라는 키에 중복을 제거한 숫자들의 합을 저장한 Map을 만들어 출력하세요.

const arr = [1, 2, 2, 3, 4, 5, 5];
const set = new Set(arr);

let i = 0;
for (let num of set) {
    console.log(Number(num) + 5);
    i = i + Number(num);
}

const map = new Map();
map.set("total", i);

console.log(map.get("total"));


// 연습문제 2: filter, map, reduce 활용하기
// 문제:
// 다음 배열에서 짝수만 골라 제곱한 후,
// 그 합계를 구해 출력하세요.
// const numbers = [3, 4, 7, 8, 10, 13];

const numbers = [3, 4, 7, 8, 10, 13];
const evens = numbers.filter((num) => num % 2 === 0);
const squared = evens.map((num) => num * num);
const sum = squared.reduce((acc, cur) => acc + cur, 0);
console.log(sum);


// 연습문제 3: 비동기 함수 실습
// 문제:
// 2초 후 "✅ 데이터 준비 완료"를 출력하는 비동기 함수를 만들어보세요.

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ 데이터 준비 완료");
        }, 2000);
    });
}

async function loadData() {
    const data = await fetchData();
    console.log(data);
}

loadData();
