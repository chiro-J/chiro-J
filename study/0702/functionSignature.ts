type Run = (miles: number) => boolean;

let runner2: Run = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    }
    return false;
};

type Greet = (name: string) => string;
const greet2: Greet = (name) => `Hello, ${name}`;
console.log(runner2(9));



// ? : 있어도 되고 없어도 되고, 있으면 :타입
function log(message: string, user?: string) {
    console.log(`${user ?? "system"}: ${message}`);
}

log("Hello", "John");