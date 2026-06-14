// first odd or even number check using if else statement

let num =7;

if(num % 2 === 0){
    console.log(num,"is even number");
}
else{
    console.log(num,"is odd number");
}

// second light system check using if else statement 

let mode = "silver";
let color; 

if (mode === "dark"){
    color = "black";
}
else if(mode === "silver" ){
    color = "blue";
}
else if(mode === "light" ){
    color = "white";
}
else{
    color = "gray";
}
console.log(color);