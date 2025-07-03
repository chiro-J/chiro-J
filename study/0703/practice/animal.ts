class Animal {

    animal: string;

    sound() {
        console.log("!!!")
    }
}

class Doggo extends Animal {
    bark () {
        console.log("멍멍!")
    }
}


class Kitty extends Animal {
    meow () {
        console.log("야옹!")
    }
}


let doggo = new Doggo();
let kitty = new Kitty();

doggo.bark();
kitty.meow();