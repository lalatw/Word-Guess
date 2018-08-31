console.log("o    o      .oo o    o .oPYo. o     o      .oo o    o "); 
console.log("8    8     .P 8 8b   8 8    8 8b   d8     .P 8 8b   8 ");  
console.log("o8oooo8    .P  8 8`b  8 8      8`b d'8    .P  8 8`b  8 ");  
console.log("8    8   oPooo8 8 `b 8 8   oo 8 `o' 8   oPooo8 8 `b 8 ");  
console.log("8    8  .P    8 8  `b8 8    8 8     8  .P    8 8  `b8 ");  
console.log("8    8 .P     8 8   `8 `YooP8 8     8 .P     8 8   `8 ");  
console.log(":..:::....:::::....:::..:....8 ..::::....:::::....:::.. "); 
console.log(":::::::::::::::::::::::::::::8 :::::::::::::::::::::::: "); 
console.log(":::::::::::::::::::::::::::::..:::::::::::::::::::::::: "); 



var inquirer = require("inquirer");
var Word = require("./Word.js");


//question pool
var qPool = [
    "arkansas", "california", "colorado", "arizona", "florida", "kansas", "texas", "iowa" , "hawaii" , "idaho", "illinois", "pennsylvania", "utah", "oregon", "oklahoma", "washington"];

//initial remaining guess is 15
var guessLeft = 15;

//pick a random word from the question pool
var question = qPool[Math.floor(Math.random()* qPool.length)];    
console.log("Can you guess a State in the U.S? Choose a letter!")
//console.log(question);

//Uses the Word constructor to store the question
var wordObj = new Word(question);
var wordDisplayed = "";

start();

//Prompts the user for each guess
function start() {

    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter!",
            type: "input",
            validate: function(letter) {
                if (letter.length === 1 && letter.toLowerCase()>="a") {
                    return true;
                }
                console.log("Please enter a letter.");
                return false;
            }
        },
    
        ]).then(function(answer){
            var value = answer.letter.toLowerCase();
            play(value);
        })

};


//the function to check user's input letter
function play(val) {
    var correct = false;
    var repeat = false;

    //if the letter entered has been guessed already, throw error message"
    if (wordDisplayed.indexOf(val)>=0) {
        repeat = true;
        console.log("The letter has been guessed. Please pick another one.");
    }

    else {
        correct = wordObj.wordGuess(val);
        wordDisplayed = wordObj.newString();
    }


    //check if the entered letter matches anyone, and throw message of correct or incorrect.
    if (wordDisplayed != question && guessLeft>=1) {
        if (!repeat) {
            if (correct) {
                console.log("Correct!!!");
            }
    
            else {
                console.log("Incorrect!!!");
                guessLeft--;
            }
        }


        //if run out of guess remaining    
        if(guessLeft === 0) {
            console.log("Sorry! Run out of chances. Take on the next challenge!")
            guessLeft = 15;
            question = qPool[Math.floor(Math.random()* qPool.length)];    
            //console.log(question);
            wordObj = new Word(question);
            wordDisplayed="";
            console.log("Can you guess a State in the U.S? Choose a letter!")
            start();
        }

        
        else {
            console.log("Your Remaining Guesses: " + guessLeft);
            console.log("U.S. State: "+ wordDisplayed);  
            start();
        }
    }
    
    //when all the letters are correct
    else if (wordDisplayed === question) {
    console.log("Excellent! ALL Correct!!!");
    console.log("U.S. State: "+ question);
    console.log("Take on the next challenge!");
    guessLeft = 15;
    question = qPool[Math.floor(Math.random()* qPool.length)];    
    //console.log(question);
    wordObj = new Word(question);
    wordDisplayed="";
    console.log("Can you guess a State in the U.S? Choose a letter!")
    start();
    }
}



