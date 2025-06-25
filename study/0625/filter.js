// 일반적인 배열 (array)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 키-값 쌍의 딕셔너리 구조
const users = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 19},
    {name: "Charlie", age: 30},
]

const adults = users.filter(user => user.age >= 20);
console.log(adults);