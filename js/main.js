// array methods
// read data => forEach()
// add data in an array => push() , unshift()
// delete a data from array => pop() , shift() , splice()
// search a data in an array => find() , filter()
// recreate => map()
// convert array to string => join()

// sort() , includes(), reduce(), every(), some()

// when you run the method they want function as parameter
// when you run the method they want value as a parameter

var array = ["a", 1, true, null, [1, 2, 3]];
var student = {
  name: "Deepak",
  course: "React",
  duration: "30 days",
}; // JSON => Javascript Object Notation

var studentList = [
  { name: "Deepak", course: "React", duration: "30 days" },
  { name: "Suraj", course: "React", duration: "30 days" },
  { name: "Amit", course: "Angular", duration: "45 days" },
  { name: "Deepak", course: "Java FSD", duration: "60 days" },
]; // JSObject Array => JSON Array

//******** read data => forEach()
// function readData(value, index) {
//   console.log(value.name, index);
// }

// studentList.forEach(readData);

studentList.forEach(function (value, index) {
  // console.log(value.name, index);
  // if we call a function im other function call callback function
  // or inline function
});

//********* add data in an array => push() , unshift()
var newStudent = {
  name: "Shubham",
  course: "AWS",
  duration: "10 days",
};
//studentList.push(newStudent); // add from end
//studentList.unshift(newStudent); // add from start
console.log(studentList);

//********** delete a data from array => pop() , shift() , splice()
//studentList.pop(); // delete record from end
//studentList.shift(); // delete record from start
//studentList.splice(2, 1); // (startIndex,deleteCount)
//console.log(studentList);

//****** search a data in an array => find() , filter()
var studentList = [
  { name: "Deepak", course: "React", duration: "30 days" },
  { name: "Suraj", course: "React", duration: "30 days" },
  { name: "Amit", course: "Angular", duration: "45 days" },
  { name: "Deepak", course: "Java FSD", duration: "60 days" },
];

var sName = "Deepak1";
var searchResult = studentList.find(function (value, index) {
  return sName === value.name;
}); // find returns only one record or if not match return "undefined"

var searchResult = studentList.filter(function (value, index) {
  return sName === value.name;
}); // find returns all match record or if not match return []
console.log(searchResult);

// recreate => map() (React => loop logic)
var list = studentList.map(function (value, index) {
  return `<tr>
          <td>${value.name}</td>
          <td>${value.course}</td>
          <td>${value.duration}</td>
        </tr>`;
});
console.log(list);
// convert array to string => join()
list = list.join("");
console.log(list);

// sort , includes , every , some , reduce

// math, date , string
// reivers, copy --> do checked
