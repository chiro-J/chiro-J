// 고차 배열 메서드
const nums = [1, 2, 3, 4, 5];

// map : 배열의 각 요소를 변형하여 새 배열 생성
const squares = nums.map((n) => n ** 2);

for (const val of squares) {
    console.log(`val => ${val}`);
}

for (let i = 0; i < nums.length; i++) {
    console.log(`nums[${i}] => ${nums[i]}, squares[${i}] => ${squares[i]}`);
}

// filter : 조건을 만족하는 요소만 필터링
const evens = nums.filter((n) => n % 2 === 0);

for (const val of evens) {
    console.log(`val => ${val}`);
}

// reduce : 누적 계산(합계, 곱 등)에 사용
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(`sum => ${sum}`);

// find : 조건을 만족하는 첫 번째 요소 반환
const found = nums.find((n) => n > 2);
console.log(`found => ${found}`);

// some : 하나라도 조건 만족하면 true (합집합)
const hasNegative = nums.some((n) => n < 2);
console.log(hasNegative);

// every : 모두 조건 만족해야 true (교집합)
const allPositive = nums.every((n) => n > 1);
console.log(allPositive);

// flatMap : 배열 펼치기 + 매핑 동시에 처리
const nested = [1, 2, 3];
const duplicated = nested.flatMap((n) => [n, n]);

for (let nest of duplicated) {
    console.log(`nest => ${nest}`);
}

console.log(duplicated);
