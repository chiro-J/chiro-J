let display = document.getElementById("display");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let percent = document.getElementById("percent");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiply = document.getElementById("multiply");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let subtract = document.getElementById("subtract");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let add = document.getElementById("add");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let eqaul = document.getElementById("eqaul");

function appendToDisplay(value) {
    if (display.textContent === "0") {
        display.textContent = value;
    }   
    else {
        display.textContent += value;
    }
    
}

let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
    if (e.target.id === "equal") {
        console.log(e.target.innerText); 
        let result = eval(e.target.textContent);
        appendToDisplay(e.target.innerText + result);
    }   

    else if (e.target.id === "clear") {
        console.log(e.target.innerText);
        appendToDisplay(e.target.innertext);

    }

    else if (e.target.id === "backspace") {
        console.log(e.target.innerText);
        appendToDisplay(e.target.innertext);
    }

    else if (e.target.id === "percent") {
        console.log(e.target.innerText);
        appendToDisplay(e.target.innertext);
    }

    else {
        console.log(e.target.innerText);
        appendToDisplay(e.target.innerText);
    }   
})