// async await
// synchronous ==> execution program line by line
// block resource ==>

// asynchronous ==> execution of program as per the method response
// Event Loop
// async Web API => DOM , setTimeout , setInterval, Promise (async) , fetch

// all sync work 1st
// then async words

console.log("hello");
setInterval(() => {
  console.log("its awesome");
}, 1000);
console.log("react");
// default js => synchronous

// musicale app
// searching

document.querySelector("button").addEventListener("click", () => {
  console.log("click");
});
