/**
 * Created by GrattisGray on 8/7/15.
 */

/*
Name: Michael Gray
Date: August 8, 2015
Assignment: Goal1: Assignment: Analyze Duel #1
 */


(function() {

    console.log("Fight!");

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

    var round = 1;

//Fight Function

    function fight(){
        ///Fight Function Code///
        alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);

        for (var i=0; i<10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min);
           //random damage variables and formulas for each fighter
            var minDamageOne = playerOneDamage * .5;
            var minDamageTwo = playerTwoDamage * .5;
            var fighter1 = Math.floor(Math.random()*(playerOneDamage - minDamageOne) + minDamageOne);
            var fighter2 = Math.floor(Math.random()*(playerTwoDamage - minDamageTwo) + minDamageTwo);

            //console.log(fighter1);
            //console.log(fighter2);

        };
        winnerCheck()
    };

// Check the Winner of the Fight Function

    function winnerCheck(){
        ///Function Code///

    };

    /***** The Program Starts *****/
    console.log("programs starts here");
    fight();

})();