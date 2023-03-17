// array
// store multiple data
// collection of data having same or different data type
// var number = new Array() / []
// we can add multiple data in array by comma(,)
// array = key (system defined) :value (user defined)
// key / index ==> auto gen , and start with 0
function fun() {}
var number = [10, 20, 3, 1, 2, 3, 4, 5];
var array = [1, "a", true, null, [9, 8, 7], fun];
// add in array
array.push(10);
console.log(array);

var student = [30, 25, 60];

// JS Object ==> collection data
// key/ index/ property are user defined
// var student = new Object()

var student = { age: 30, roll: 25, marks: 60 };
student.name = "deepak";
console.log(student);

var array = [1, "a", true, null, [9, 8, 7], fun];
// READ DATA FORM array
// loop , array.method() , index

// single data => array[index]
console.log(array[4].length);
