abstract class Shape {
    size: number;
    // calculateArea() {
    //     return 1;
    // }
    abstract getAreaRectangle(width: number, height: number): number;
    abstract getAreaCircle(radius: number): number;
}


class Rectangle extends Shape {
    getAreaRectangle(width: number, height: number): number {
        return width * height;
    }
    getAreaCircle(radius: number): number {
        throw Error("Unimplemented method")
    } 
}


class Circle extends Shape {
    getAreaCircle(radius: number): number {
        return radius ** 2 * Math.PI
    }
    getAreaRectangle(width: number, height: number): number {
        throw Error("Unimplemented method")
    }
}