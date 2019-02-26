// Variable for the computers choices //
var computerchoice = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // variables for wins, losses, guesses left//
var wins = 0;
var losses = 0;
var guesses_left = 10;

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("Wins-text");
var lossestext = document.getElementById("losses-text");
var guessestext = document.getElementById("user-guesses");

//function is run when user presses key//

document.onkeyup = function(event) {

    //determines which key was pressed//

var userGuess = event.key;

//randomly chooses a letter of the alphabet from array//

var computerguess = computerchoice[Math.floor](math.random() * computerchoice.length)];

//this if statment determines what happens if we guess the computer choice or not//
                                {
if (userGuess = computerguess) {
    wins++ 
    guesses_left--
  
} else {
    losses++
}

//display wins, losses, guesses, and guesses left//

winsText.textContent = "Wins: " + wins;
lossestext.textContent = "Losses: " + losses;
guessestext.textContent = "Guesses left: " + guesses_left
}

}



    
