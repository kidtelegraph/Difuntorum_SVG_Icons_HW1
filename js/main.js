//We are checking to make sure our file is connected.
console.log("JS file connected");

/* This is a block comment in JS, this akllows us to write 
multiple lines of comments */


//check value of 
console.log(playerGenre);

const buy = document.querySelector("#playerGenre");

document.querySelector('.section').addEventListener('click' ,clickEvent);

const audioButtons = document.querySelectorAll("#player button");
console.log(audioButtons);

const playerName = "Marley";
//playerName = "Marley";
//playerName = "Mercury";
//playerName = "Lennon";
//playerName = "Hendrix";
//playerName = "Cobain";
//playerName = "Smith";

const playerGenre = "Grunge";
//playerGenre = "Alternative Rock"
//playerGenre = "Pop"
//playerGenre = "Rock"
//playerGenre = "Reggae"


// function declaration
function showPlayerGenre() {
    console.log("Marley" + playerName + "Genre" + playerGenre);
}

function clickEvent(e) {
    var value = e;
    console.log(value);
}

//Calling Function
showPlayerGenre();

//a function that takes parameters and returns a value

function addNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}

console.log(addNumbers(25,45));