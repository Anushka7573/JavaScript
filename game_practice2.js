// Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters the correct value.

// let gamenum=25;
// let username=prompt("Enter your guess number ");
// console.log(username);

let gamenum = 25;
let usernum = prompt("Guess the game number:");

while (usernum != gamenum) {
    usernum = prompt("You entered the wrong number. Guess again:");
}
console.log("Congratulations! You guessed the correct number.");