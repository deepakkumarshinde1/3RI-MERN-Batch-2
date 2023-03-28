// primitive type => value
// non-primitive => reference (memory location)

// spread operator

let a = ["its a"]; // 0x111
let c = [10, 20, 30, 40, 50]; // 0x333
let b = [...a, ...c]; // 0x222
a[0] = "it was a";
c[0] = 1000;

console.log(a); // it was a
console.log(b); // it was a

let product = {
  name: "Lenovo 123",
  price: 40000,
};
let locality = {
  city: "Nashik",
  location: "Dwarka Circle",
};
let p = { ...product, ...locality };

console.log(p);
