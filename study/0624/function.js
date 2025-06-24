function greet() {
    alert("반갑습니다!");
}

    greet();

 
function showName() {
    let name = "홍길동";
    name = "이순신";
        console.log(name);
}

    showName();

    console.log("outer" + name);


function add(a, b) {
    return a + b; 
}
let sum = add(3, 5);
document.write(sum)



function calcBMI(weight, height) {
    return weight / (height ** 2) * 100 ** 2;
}
let weight = prompt("체중 입력");
let height = prompt("키 입력");
let bmi = calcBMI(weight, height)
console.log(bmi)