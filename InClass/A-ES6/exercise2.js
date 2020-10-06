class Polygon {
    constructor(height, width) {
        this.name = "Polygon";
        this.height = height;
        this.width = width;
        this.area = this.height * this.width;
    }
    sayName() {
        console.log('Hi, I am a ' + this.name);
    }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);

class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = "Rectangle";
        this.sides = 4;
        //this.area = this.height * this.width;
    }
    get area() { return this.width * this.height; }
    sayName() {
        console.log('Hi I am a polygon and my name is ' + this.name + '.');
    }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = "Triangle";
        this.sides = 3;
    }
    get area() {
        return (this.height * this.width) / 2;
    }
}
let triangulo = new Triangle(10, 5);
triangulo.sayName();
console.log(triangulo.area);

class Circle extends Polygon {
    constructor(radio) {
        super(radio, radio);
        this.name = "Circle";
        this.sides = 0;
    }
    get area() {
        return Math.PI * Math.pow(this.width, 2);
    }
}
let circulo = new Circle(5);
circulo.sayName();
console.log(circulo.area);