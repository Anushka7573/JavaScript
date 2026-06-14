let a = 5;
let b = 2;

let cond1 = a>b; // true
let cond2 = a<b; // false
let cond3 = a===5; // true

console.log("cond1 && cond2=",a < b && a === 5); // False
console.log("cond1 && cond3=",a > b || a === 5); // True
//console.log("cond1 || cond2",cond1 || cond2); // true
console.log("!(5>2)=", !(a === 5)); // False