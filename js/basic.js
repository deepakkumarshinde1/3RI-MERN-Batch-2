// string or number
//alert("deepak"); // function in-build
console.log("deepak"); // method in-build

// store temp => variables
var text = "deepak";
console.log(text);

// types of data
// number , string , boolean , undefined , null , object , array , big-init ,symbols
var name = "Deepak"; // string
var mobile = 9876567898; // number
var isAbsent = true; // boolean
var parentMobile = null; // object
var email; // undefined

console.log(typeof parentMobile);
/*
    string,number,boolean,object, undefined
*/

// operators => Assignment , Arithmetic , Logical , Compare
// statement => if ... else , switch ,
// ternary op => () ? :

// Assignment
var a = 10;
a += 10; // a = a + 10;
a -= 10; // a = a - 10;
a /= 10; // a = a / 10;
a *= 10; // a = a * 10;
a %= 10; // a = a % 10;

a++; // post
++a; // pre //a += 1;// inc a number by one

--a; // pre dec
a--; // post dec //a -= 1;// dec a number by one

// Arithmetic
var result = 1 + 1;
var result = 1 - 1;
var result = 1 * 1;
var result = 1 / 1;
var result = 1 % 1;

var a = Number("10"); // explicit type casting
var b = 5;
var result = a + b; // * , - , / , % (implicit type casting )  // NaN , 50
console.log(result);

// Compare
// a == b , a != b, a > b , a < b , a >= b , a <= b
// a === b , !== b

// conditional statement
// if .. else
// 2 == "2" ===> data
// 2 === "2" ==> date + type
if (2 === "2") {
  // true code block
  console.log("Yes");
} else {
  // false code block
  console.log("No");
}

// logical
// and ==> &&
// or ==> ||
// not ==> !

if (2 === 3 || 3 === 4) {
  console.log("Yes");
} else {
  console.log("No");
}

var isAbsent = true;
isAbsent = !isAbsent;
isAbsent = !isAbsent;

console.log(isAbsent);

// statement => if ... else , switch
// Assignment 10
var totalAssignment = 10;
var studentAssignment = 7;

if (totalAssignment === studentAssignment) {
  console.log("Excellent");
} else if (studentAssignment < totalAssignment && studentAssignment >= 5) {
  console.log("good");
} else {
  console.log("bad");
}

// if , if ... else , if ... else if ... else
// 10 ==> Excellent
// 10 < and > 5 ==> good
// 5 < ==> bad

// Assignment-1, Assignment-2, Assignment-3 ===>
var studentSubmittedAssignment = null;
// choose value from any one a it ==> switch
switch (studentSubmittedAssignment) {
  case 1:
    // case code
    console.log("Assignment No One is completed");
    break;
  case 2:
    // case code
    console.log("Assignment No Two is completed");
    break;
  case 3:
    // case code
    console.log("Assignment No Three is completed");
    break;
  default:
    console.log("No Assignment is completed");
}
