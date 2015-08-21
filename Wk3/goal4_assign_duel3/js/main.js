/**
 * Created by GrattisGray on 8/7/15.
 */

/*
Name: Michael Gray
Date: August 21, 2015
Assignment: Goal3: Assignment: The End Duel #3
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

    //var playerOneName = "Spiderman";
    //var playerTwoName = "Batman";

// players health

    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;

// players max damage

    //var playerOneDamage = 20;
    //var playerTwoDamage = 20;

// create an array for each players name, health, and damage

    //var playerOne = ["Spiderman", 100, 20];
    //var playerTwo = ["Batman", 100, 20];

// create objects for each players name, health, and damage (arrayed)

    var playerOne = {
        name:'Spiderman',
        health: 100,
        damage: 20
    };

    var playerTwo = {
        name: 'Batman',
        health: 100,
        damage: 20
    };

// create new variables with element id tags from HTML Document using document.getElementById

    var score = document.getElementById('scores');


// keeps track of the round for the fight

    var round = 0;

//Fight Function

    function fight(){
        ///Fight Function Code///
        //alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
        //alert using an the array variable //changed all info to use array indexes
        //alert(playerOne[0] + ":" + playerOne[1] + " *START* " + playerTwo[0] + ":" + playerTwo[1]);

        //for loop to determine damage inflicted against each fighter and winner of the fight
        //for (var i=0; i<10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min);
           //random damage variables and formulas for each fighter
            //var minDamageOne = playerOneDamage * .5;
            //var minDamageTwo = playerTwoDamage * .5;

        // Random damage formula using the correct array indexes for each fighter
            var minDamageOne = playerOne[2] * .5;
            var minDamageTwo = playerTwo[2] * .5;

            //var fighter1 = Math.floor(Math.random()*(playerOneDamage - minDamageOne) + minDamageOne);
            //var fighter2 = Math.floor(Math.random()*(playerTwoDamage - minDamageTwo) + minDamageTwo);


            var fighter1 = Math.floor(Math.random()*(playerOne[2] - minDamageOne) + minDamageOne);
            var fighter2 = Math.floor(Math.random()*(playerTwo[2] - minDamageTwo) + minDamageTwo);
            //console.log(fighter1);
            //console.log(fighter2);

            //players inflict damage each round
            //damage infliction formula

            //playerOneHealth -= fighter1;
            //playerTwoHealth -= fighter2;

            //damage infliction formula using array indexes
            playerOne[1] -= fighter1;
            playerTwo[1] -= fighter2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //variable for checking the winner
            var results = winnerCheck();
           // console.log(results);

            //alert the user of the winner or of a tie //amendment: changed variables to match the indexes for each fighter
            if(results === "no winner") {
                round++;
                //alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
                //alert(playerOne[0] + ":" + playerOne[1] + " *ROUND " + round + " OVER* " + playerTwo[0] + ":" + playerTwo[1]);
            }else{
                //alert the user with the results of the fight
                //alert(results);
                //break the loop if they die
                //break
            //}
        //};

    };

// Check the Winner of the Fight Function

    function winnerCheck(){
      //  console.log("In winnerCheck FN");
        ///Function Code///
        //Result for no winner
        var result = "no winner";

        //if loop to determine the result //amendment: changed if statement to use variables and indexes in the array.

        if(playerOne[1] <1 && playerTwo[1] <1){
            result = "You Both Die";
        }else if(playerOne[1]<1){
            result = playerTwo[0] + " WINS!!!"
        }else if(playerTwo[1]<1){
            result = playerOne[0] + " WINS!!!"
        };

        return result;
    };

    /***** The Program Starts *****/
   // console.log("programs starts here");
    fight();

})();