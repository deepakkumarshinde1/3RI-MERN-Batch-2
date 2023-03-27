// DOM ==> Document Object Model
// we can access elements/tag for html to javascript
// DOM tree
// logical tree of web page
// What is a attributes ?
// <input type="text" /> ==>  input.type
// all attributes are props in javascript for DOM

// call a element
// var h1Id = document.getElementById('h1-id'); // ==> single element
// document.getElementsByClassName('h1-class'); // ==> [] htmlCollection
// document.getElementsByTagName('h1'); // ==>

// document.querySelector('h1');// single elements
// document.querySelectorAll();// [] multi elements

// var script = document.createElement('script');
// script.src = "";
// document.getElementsByTagName('body')[0].appendChild(script)
var number = [10, 20, 30, 40, 50, 60];
var sum = number.reduce(function (pValue, cValue) {
  console.log(pValue, cValue);
  return pValue + cValue;
}, 0);
console.log(sum);
