var h1 = document.querySelector("h1"); // ingle element
var btn = document.querySelector("#btn");
var textInput = document.querySelector("#text-input");
// element => h1
// class => .className
// id => #id
// group => item-1,item-2
// descendant => parent child{}
// child => parent > child{}
// attribute => input[type=valueS]

// if we want to set a text from js to html => innerHTML
// if we want to get a text from html to JS => innerHTML

// how to add a click
// what is a js event => user action
// if we want to add a event => addEventListener()

// how to get a value of input => .value
// if we want  to set a value to input => .value

btn.addEventListener("click", function () {
  console.log(h1.innerHTML); // reading
  h1.innerHTML = textInput.value; // set a value
  // console.log(h1.innerHTML); // reading
  //console.log(textInput.value);

  // reset input
  textInput.value = "";
});

// click, keypress, keyup, keydown
// load , unload , darg, drop. change

// create a array having quote & author name => 20
// [{name:"deeepak", quote:"all good"}]

// onclick => gen random id <= 20
// print it on html page
