//We are checking to make sure our file is connected.
console.log("JS file connected");

/* This is a block comment in JS, this akllows us to write 
multiple lines of comments */


//check value of 
console.log(playerGenre);

<<<<<<< Updated upstream
const buy = document.querySelector("#playerGenre");
=======
const buy = document.querySelector("#playerGenre").addEventListener('click' , clickEvent);
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
function showPlayerName() {
    console.log(playerName);
}

>>>>>>> Stashed changes
function clickEvent(e) {
    var value = e;
    console.log(value);
}

//Calling Function
<<<<<<< Updated upstream
showPlayerGenre();
=======
>>>>>>> Stashed changes

//a function that takes parameters and returns a value

function declaration(playerName, showPlayerGenre) {
    let total = playerName + playerGenre;
    return total;
}

console.log(declaration("bob marley",reggae));
console.log(declaration("freddie mercury",alternative));
console.log(declaration("john lennon", pop));
console.log(declaration("jimi hendrix",rock));
console.log(declaration("kurt cobain", grunge));
console.log(declaration("robert smith",rock));
