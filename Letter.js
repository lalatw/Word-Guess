//Constructor for letter, depending on whether or not the user has guessed the letter
var Letter = function(underlying){
    //A string value to store the underlying character for the letter
    this.underlying = underlying;
    
    //A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    
    //A function that returns the underlying character if the letter has been guessed
    this.toDisplay = function() {
        if (this.guessed) {
            return this.underlying;
        }

        else {
            return " _ ";
        }
    };

    //A function that takes a character as an argument and checks it against the underlying character
    this.toVerify = function(character) {
        if (this.underlying === character) {
            this.guessed = true;
            return true;
        }

        else {
            return false;
        }

    };

};

module.exports = Letter;

