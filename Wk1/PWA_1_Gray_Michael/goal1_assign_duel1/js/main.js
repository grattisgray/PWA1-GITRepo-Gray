/**
 * Created by GrattisGray on 8/7/15.
 */

/*
Name: Michael Gray
Date: August 8, 2015
Assignment: Goal1: Assignment: Analyze Duel #1
 */


//Pseudocode for Fight Function

/*alert user of the fight between Spider-man and Batman

    set each fighters health to 100
    damage is determine by a random number no greater than 20

    after each round alert the use with

        the health of each fighter
        the round of the fight

    after each round each fighter inflicts damage upon the other

        set at a random number

    alert the user of the winner of the fight

        if both reach 0 health they both die
        else which ever fight has health greater than zero wins the fight.
 */

//****** self executing function ******//
(function() {

    //console.log("Fight!");

// player names

    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

// players health

    var playerOneHealth = 100;
    var playerTwoHealth = 100;

// players max damage

    var playerOneDamage = 20;
    var playerTwoDamage = 20;

// keeps track of the round for the fight

    var round = 0;

//Fight Function

    function fight(){
        ///Fight Function Code///
        alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);

        //for loop to determine damage inflicted against each fighter and winner of the fight
        for (var i=0; i<10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min);
           //random damage variables and formulas for each fighter
            var minDamageOne = playerOneDamage * .5;
            var minDamageTwo = playerTwoDamage * .5;
            var fighter1 = Math.floor(Math.random()*(playerOneDamage - minDamageOne) + minDamageOne);
            var fighter2 = Math.floor(Math.random()*(playerTwoDamage - minDamageTwo) + minDamageTwo);

            //console.log(fighter1);
            //console.log(fighter2);

            //players inflict damage each round
            //damage infliction formula

            playerOneHealth -= fighter1;
            playerTwoHealth -= fighter2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //variable for checking the winner
            var results = winnerCheck();
           // console.log(results);

            //alert the user of the winner or of a tie
            if(results === "no winner") {
                round++;
                alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
            }else{
                //alert the user with the results of the fight
                alert(results);
                //break the loop if they die
                break
            }
        };

    };

// Check the Winner of the Fight Function

    function winnerCheck(){
      //  console.log("In winnerCheck FN");
        ///Function Code///
        //Result for no winner
        var result = "no winner";

        //if loop to determine the result

        if(playerOneHealth <1 && playerTwoHealth <1){
            result = "You Both Die";
        }else if(playerOneHealth<1){
            result = playerTwoName + " WINS!!!"
        }else if(playerTwoHealth<1){
            result = playerOneName + " WINS!!!"
        };

        return result;
    };

    /***** The Program Starts *****/
   // console.log("programs starts here");
    fight();

})();