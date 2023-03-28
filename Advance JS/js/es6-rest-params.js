// rest params ==> (...varOne) ==> [1,2,3]
console.log(10);

function add(...varOne) {
  let result = varOne.reduce(function (pV, cV) {
    return pV + cV;
  }, 0);
  console.log(result);
}

add(10, 10, 20, 30);
