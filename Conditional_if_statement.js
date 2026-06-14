// first conditional check for voting eligibility

let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
if (age < 18) {
    console.log("You are not eligible to vote.");
}


// second conditional check for light system
let mode = "dark";
let color; 

if (mode === "dark"){
    color = "black";
}
if(mode === "light" ){
    color = "white";
}

console.log(color);