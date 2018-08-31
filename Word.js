//constructor for Word that depends on the Letter constructor.
var Letter = require("./Letter.js");

var Word = function(theWord){
    //An array of new Letter objects representing the letters of the underlying word
    this.newArray = [];
    for(var i=0; i<theWord.length; i++) {
        this.newArray.push(new Letter(theWord.charAt(i)));
    }

    //A function that returns a string representing the word. 
    this.newString = function () {
        var displayString = "";
        for (var i=0; i<this.newArray.length; i++) {
            //console.log ("NOW adding:"+this.newArray[i].toDisplay());
            displayString += this.newArray[i].toDisplay();
        }    
        //console.log("display="+displayString);
        return displayString;
    };

    //A function that takes a character as an argument and calls the guess function on each letter object.
    this.wordGuess = function(character) {
        var anyOneCorrect = false;
        for (var i=0; i<this.newArray.length; i++) {
            if(this.newArray[i].toVerify(character)) {
                anyOneCorrect=true;
            }
        }  
        return anyOneCorrect;  
    }

};

module.exports = Word;
