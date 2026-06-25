//for-of loop

let str = "Hello World";
let size = 0;
for (let char of str) {  //iterator over each character in the string
    console.log("char=", char);
    size++;
}
console.log("size=", size); // 11
