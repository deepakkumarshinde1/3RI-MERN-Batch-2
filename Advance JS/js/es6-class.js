// oop
// alert();

/// core logic of alert is been overridden
// js don't have methods over loading

// class a blue print object
// class is collection props & methods
// props => variable
// method ==> function
// this ==> current instance of a class
class PopUp {
  text = "Welcome to 3ri technology";
  alert() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}
// use class methods and property we need object of class
// PopUp() => constructors
let popUp = new PopUp();
//popUp.alert();

//run a code after 1 sec === 1000 ms

// this ==> window ==> Window

// global variables & function are attached to window object

// when we use "function" key word function, scope of "this" will be current function call object
// when we use "=>" i.e arrow function, scope of "this" will be nearest function definition object

class Shape {
  width = 0;
  height = 0;
  type = null;
  length = 0;

  constructor(type, valueOne, valueTwo, valueThree) {
    this.type = type;
    switch (type) {
      case "square":
        this.width = valueOne;
        this.height = valueOne;
        break;
      case "rectangle":
        this.width = valueOne;
        this.height = valueTwo;
        this.length = valueThree;
        break;
    }
  }

  draw() {
    if (this.type === "square")
      console.log("square of wxh=", this.width * this.height);

    if (this.type === "rectangle")
      console.log(
        "rectangle of wxhxl=",
        this.width * this.height * this.length
      );
  }
}

class Square extends Shape {
  constructor(value) {
    super("square", value);
  }
  draw() {
    super.draw();
    console.log("draw");
  }
}

let square = new Square(5);
square.draw();

class Rectangle extends Shape {
  constructor(w, h, l) {
    super("rectangle", w, h, l);
  }

  static drawDesign(value) {
    console.log(value);
    console.log("drawDesign");
  }
}

let rectangle = new Rectangle(5, 10, 4);
rectangle.draw();
Rectangle.drawDesign(100);

//let date = new Date();
//date.getTime();

//Date.now(); // static method => methods called with class Name

class Circle {
  radius = 0;

  draw() {
    console.log("radius");
  }
}

// getters & setters
