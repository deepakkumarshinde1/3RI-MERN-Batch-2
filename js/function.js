// functions
// we write a code
// use it again and again
// control the flow

// add
// default data type => undefined
var a1 = 10;
var b1 = 20; // global variables

// () => arguments / parameters
// default parameters
function add(a = 0, b = 0) {
  //  undefined

  // our logic
  var result = a + b; // local variables
  // var , let , const  local
  // let const => block scope
  return result;
} // function definition

// run the function
add(a1, b1); // function call

add(100, 60);

add();

var data = add();
console.log(data);
