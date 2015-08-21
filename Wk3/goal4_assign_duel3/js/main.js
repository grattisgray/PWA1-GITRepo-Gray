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

    console.log("Fight!");

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
        name: 'Spiderman',
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

// create a variable for each fighter using the HTML id tags
    var f1 = document.getElementById('kabal');
    var f2 = document.getElementById('kratos');

// create a variable for the fight buttom using HTML id tag
    var fightButton = document.getElementById('fight_btn');

// create a variable using firstElementChild (first element in the div) (used to change the round number)
    var rd = fightButton.firstElementChild;

// create a variable using lastElementChild (last element in div) (used to interact with the button)
    var button = fightButton.lastElementChild;

// Use innerHTML to display players names and health on the page.
    f1.innerHTML = playerOne.name + ':' + playerOne.health;
    f2.innerHTML = playerTwo.name + ':' + playerTwo.health;

// keeps track of the round for the fight

    var round = 0;

//Fight Function
// create new function using .onclick (need to use (e), e.preventDefault, and return false)
    // fight function starts after clicking the "Fight!" button
    button.onclick = function (e) {
        //testing function
        //console.log("Hello does this work?");
        //Use random damage formula from previous code - Amendment: Change arrays to objects using dot notation.
        var minDamageOne = playerOne.damage * .5;
        var minDamageTwo = playerTwo.damage * .5;

        var fighter1 = Math.floor(Math.random() * (playerOne.damage - minDamageOne) + minDamageOne);
        var fighter2 = Math.floor(Math.random() * (playerTwo.damage - minDamageTwo) + minDamageTwo);

        playerOne.health -= fighter1;
        playerTwo.health -= fighter2;

        //console.log(playerOne.health);
        //console.log(playerTwo.health);

        //Variable to check the winner
        var results = winnerCheck();

        //Use if loop to check results
        if(results === 'no winner') {
            round++;

            //use the innerHTML selector to update each players health throughout the fight
            f1.innnerHTML = playerOne.name + ':' + playerOne.health;
            f2.innerHTML = playerTwo.name + ':' + playerTwo.health;

            //use innerHTML selector to update the round number after each click
            rd.innerHTML = ' *ROUND' + round + ' OVER*';

        } else {
            // display the health of each fighter using innerHTML selector and display the results
            score.innerHTML = results;
            // display "FINISHED" after the fight is complete using innerHTML selector
            button.innerHTML = 'FINISHED!';
        };
        //required e.preventDefault() to complete onclick function
            e.preventDefault();
            return false;
    };

    //Check the Winner of the Fight Function

    function winnerCheck() {
        //console.log('Hello does this work?');
        //Result for no winner


        //if loop determines the result or winner of the fight whether Spiderman Wins, Batman Wins, or No Winner
        if (playerOne.health < 1 && playerTwo.health < 1) {
            result = 'You Both Die';
        }else if(playerOne.health < 1) {
            result = playerTwo.name + 'WINS!!!';
        }else if(playerTwo.health < 1) {
            result = playerOne.name + ' WINS!!!';
        }else{
            result = 'NO WINNER!';
        };

        return result;
    };

})();

/*
    //function fight(){
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
            //var minDamageOne = playerOne[2] * .5;
            //var minDamageTwo = playerTwo[2] * .5;

            //var fighter1 = Math.floor(Math.random()*(playerOneDamage - minDamageOne) + minDamageOne);
            //var fighter2 = Math.floor(Math.random()*(playerTwoDamage - minDamageTwo) + minDamageTwo);


            //var fighter1 = Math.floor(Math.random()*(playerOne[2] - minDamageOne) + minDamageOne);
            //var fighter2 = Math.floor(Math.random()*(playerTwo[2] - minDamageTwo) + minDamageTwo);
            //console.log(fighter1);
            //console.log(fighter2);

            //players inflict damage each round
            //damage infliction formula

            //playerOneHealth -= fighter1;
            //playerTwoHealth -= fighter2;

            //damage infliction formula using array indexes
            //playerOne[1] -= fighter1;
            //playerTwo[1] -= fighter2;

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
   // fight();


