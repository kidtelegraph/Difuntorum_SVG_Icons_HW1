//We are checking to make sure our file is connected.
console.log("JS file connected");

/* This is a block comment in JS, this akllows us to write 
multiple lines of comments */

//the value of score can change, because we use let
let score = 0;
score = 200;

//check value of score
console.log(score);

const playerName = "Marley";
//playerName = "Marley";
//playerName = "Mercury";
//playerName = "Lennon";
//playerName = "Hendrix";
//playerName = "Cobain";
//playerName = "Smith";

// function declaration
function showPlayerScore() {
    console.log("Name: " + playerName + ", Score: " + score);
}

//Calling Function
showPlayerScore();

//a function that takes parameters and returns a value

function addNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}

console.log(addNumbers(25,45));