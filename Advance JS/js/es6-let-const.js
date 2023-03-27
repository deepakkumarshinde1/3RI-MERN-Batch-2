// const let var
var text = "deepak";
var text = 1234;

// let text1 = "deepak";
// let text1 = 1234
let text1 = "deepak";
text1 = 1234;

const pie = 3.14;
// pie = 123;
console.log(text);

// let const => block-scope variable
// var ==> function scope

function funOne() {
  var text = "deepak";
  let text1 = "deepak";
  const text2 = "deepak";

  for (let index = 0; index < 10; index++) {
    var a = 10;
    console.log("hello");
  }
  console.log(a); // 10 , 9 , null , undefined , error
}

funOne();

// let  ==> global declaration
