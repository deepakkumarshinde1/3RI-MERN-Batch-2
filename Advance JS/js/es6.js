// promise
// promise ==> async
// Promise ==> rejection ==> Promise.reject() (Create exception)
// Promise ==> resolve ==> Promise.resolve() (Create valid output)
async function div() {
  let a = 10;
  let b = 0;
  if (b === 0) {
    return Promise.reject("Cannot divide by zero");
  } else {
    let result = a / b;
    return Promise.resolve(result);
  }
} // promise definition

// run this promise
// then() ... catch()
// pending ==> fulfilled or rejected

div()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// multi promise --> fetch api
// Server <====> Client
// without refreshing page we connect with server (async way)
// with refreshing page we connect with server (sync way)

//  connect to server in async way ==> fetch or xhr
// fetch()
// XHR ==> XMLHttpRequest()
// REST => Representational State Transfer API Application Programming Interface
// REST API URL=> JSON / XML / PLAN / HTML
// URL ==> HTML/CSS/JS

// HTTP Methods ==> GET (default) , POST , PUT , DELETE , PATCH , COPY , HEAD
async function getData() {
  try {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
getData();
// await ==> wait till promise is executed, on success return a promise data
// get data from response ==> response.json() or response.text()

// DATATYPE
// ARRAY
// DOM
// Event Loop
// ES6
// Promise
// async / await
