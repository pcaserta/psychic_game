 // Variable for the computers choices //
 
 var computerchoice = ['a','b','c','d','e','f','g','h','i','j','k','l',
 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

 // variables for wins, losses, guesses left//
var wins = 0;
var losses = 0;
var guesses_left = 9;
var yourguesses = []

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("Wins-text");
var lossestext = document.getElementById("losses-text");
var guesseslefttext = document.getElementById("guesses-left");
var yourguessestext = document.getElementById("user-guesses")

//computer guess//

var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
console.log(computerguess)


//function is run  when user presses key//
document.onkeyup = function(event) {


 //determines which key was pressed//

var userGuess = event.key;




//this if statment determines what happens if we guess the computer choice or not//
                             { 
if(userGuess === computerguess){
    wins++ 
    reset()
    
    
}
else if (guesses_left === 0) {
losses++
reset()



} else  {
 guesses_left--
 yourguesses.push(userGuess)
}

function reset() {
	computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
console.log(computerguess);
guesses_left = 9
yourguesses = []
	
}
//display wins, losses, guesses, and guesses left//

winsText.textContent = "Wins: " + wins;
lossestext.textContent = "Losses: " + losses;
guesseslefttext.textContent = "Guesses left: " + guesses_left;
yourguessestext.textContent = "Your Guesses so far: " + yourguesses;
}

}