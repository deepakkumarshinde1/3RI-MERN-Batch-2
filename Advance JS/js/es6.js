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
popUp.alert();

//run a code after 1 sec === 1000 ms

// this ==> window ==> Window

// global variables & function are attached to window object

// when we use "function" key word function, scope of "this" will be current function call object
// when we use "=>" i.e arrow function, scope of "this" will be nearest function definition object
