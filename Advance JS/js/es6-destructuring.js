// destructuring --> React , Node JS
// extracting data from array or jsObject
let array = [10, 20, 30, 40, 50];

// let numberOne = array[0];
// let numberTwo = array[1];
// let numberThree = array[2];

let [numberOne, numberTwo] = array;
console.log(numberOne, numberTwo);

let product = {
  name: "Mi Note 11",
  brand: "MI",
  prices: 12000,
  stock: 10,
  locality: {
    city: "pune",
  },
};

let { city } = product.locality;
let { name: pName, stock, prices, locality } = product;

console.log(pName);
console.log(stock);
console.log(prices);
