function echo<T>(input: T): T {         // 함수에도 <T>, 입력값에도 T, 결과값에도 T
    // console.log(typeof input, input);   // 출력값이랑 출력값의 타입을 알고 싶다
    return input;
}

echo<string>("Hello"); // string "Hello"
echo<number>(123);     // number 123




// 제네릭에서의 extends는 클래스 상속이 아니라 타입 제약로 쓰임.
// K는 string(혹은 string 하위, 문자열 리터럴 타입)으로 타입을 제한하고, V는 제한하지 않음.
// Record<K, V>는 TypeScript의 유틸리티 타입 (= "키가 K 타입이고, 값이 V 타입인 객체")
function getValue<K extends string, V>(obj: Record<K, V>, key: K): V {
    return obj[key];
}

// 상위 객체 생성 (name: string, age: <T>)
const objects = { name: "john", age: 20 };

// 객체 생성 - getValue 함수에 obj인자(위에서 만든 객체인 objects)랑 key인자(객체의 속성) 넣음.
let result1 = getValue(objects, "name");
let result2 = getValue(objects, "age");

console.log(`${result1}, ${result2}세`);



// interface도 제네릭 타입으로 받을 수 있음.
interface Box<T> {
    value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };


// // 키인 'value'에 직접 접근
// console.log(`${stringBox.value}, No.${numberBox.value}`);




// 클래스에도 제네릭 타입
class Stack<T> {
    private items: T[] = [];

    // push로 밀어 넣을 값의 타입도 제네릭
    push(item: T) {
        this.items.push(item);
    }

    // pop으로 꺼내 먹을 값의 타입도 제네릭, 없으면 undefined로 예외 처리
    pop(): T | undefined {
        return this.items.pop();
    }
}

// 객체 생성할 때 클래스<타입>을 써서 생성. <타입>은 뭐든 바꿀 수 있음.
const numberStack = new Stack<number>();

// 메서드를 실행할 때에도 위 클래스에서 정의했듯, ()안에 들어갈 값의 타입은 바꿀 수 있음.
// 하지만 바로 위에서 객체를 생성할 때의 타입과 같아야 함.
numberStack.push(1);
numberStack.push(2);

// console.log(numberStack);




// ApiResponse에 대해서 data 속성만 제네릭 타입으로 받는 interface 설정
interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}

// userResponse라는 객체 생성 - 위 interface 에서 제네릭 타입으로 받은 걸
// 객체에서도 당연히 interface를 따를 거니까, stat이랑 mesg는 정해진 타입대로 받을거고, data도 받을건데,
// 위에서 제네릭 타입으로 설정했던 data 속성에서 name은 string타입으로, age는 number타입으로 해서 {키 : 밸류} 형태로 받겠다
const userResponse: ApiResponse<{ name: string; age: number }> = {
    status: 200,
    message: "Success",
    data: {
        name: "Alice",
        age: 25,
    },
};

// console.log(userResponse);