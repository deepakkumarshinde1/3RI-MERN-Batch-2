var date = new Date();
date.toDateString();
date.getDate();
date.getDay();
date.getMonth();
date.getFullYear();
date.getDay();

date.getHours();
date.getMinutes();
date.getSeconds();

//lower case
// upper case
// indexOf
// lastIndexOf
// split
// substring

var text = "0007070845";
// text = text.split(" ");
// console.log(text);

var search = text.match(/^[6-9][0-9]{9}$/g);
console.log(search);

var text = "aabaabccbddba";
console.log(text.split("b"));
