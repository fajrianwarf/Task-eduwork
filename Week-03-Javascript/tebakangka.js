//welvome alert and explaining the game rules
alert('Welcome ! This game is a guessing game with 2 player. You will have 3 round guesses with your friend, each game you have to guess a number between 1 to 3, and you can\'t have the same guess with your friend. Those who can get the highest guess will win the game. Enjoy !!');

//value to start, continouing, or end the game.
let end = true;

//initial score per player.
let scoreP1 = 0;
let scoreP2 = 0;
let round = 1;

//function rules inputing the guess number.
function rules(p1, p2) {
    if (p1 === p2) {
        alert('Guess number cannot be the same');
        return false;
    }

    if (p1 < 1 || p1 > 3 || p2 < 1 || p2 > 3) {
        alert('Guess number cannot be outside 1 to 3');
        return false;
    }

    if (isNaN(p1) || isNaN(p2)) {
        alert('Please only guess from 1 to 3');
        return false;
    }
    
    return true;
} 


while (end) {
    //variable for random number guess : 1 - 3
    let guess = Math.ceil(Math.random()*3);
    
    //each player input guess number.
    let p1 = parseInt(prompt("Player 1: place your guess number"));
    let p2 = parseInt(prompt("Player 2: place your guess number"));

    //inputing funcion rules to a variable so that can be inputted to if else
    let again = rules(p1, p2);

    if (!again){
        end = window.confirm('Try again ?');

    } else {
        //rules win/draw and scoring.
        if (p1 === guess) {
            alert('Round ' + round + '. Player 1 Win !!');
            scoreP1++;
        } else if (p2 === guess) {
            alert('Round ' + round + '. Player 2 Win !!');
            scoreP2++;
        } else if (p1 !== guess && p2 !== guess) {
            alert('No one get the right guess. Round ' + round + ' draw');
        }
    }

    //revealing the guess number
    alert('The right number is : ' + guess);
    alert('Provisional score : \nPlayer 1 : ' + scoreP1 + '\nPlayer 2 : ' + scoreP2);

    //adding 1 round per cycle
    round++;

    //ending round and determine the winner.
    if (round <= 3) {
        alert('Round ' + round);
    } else {
        if (scoreP1 > scoreP2) {
            alert('Good Job Player 1. You Win.');
            scoreP1 = 0;
            scoreP2 = 0;
            round = 1;
            end = confirm('Game over. Do you want to play again ??');

        } else if (scoreP1 < scoreP2) {
            alert('Good Job Player 2. You Win.');
            scoreP1 = 0;
            scoreP2 = 0;
            round = 1;
            end = confirm('Game over. Do you want to play again ??');

        } else {
            alert('Wow its a draw. Good job everyone.');
            scoreP1 = 0;
            scoreP2 = 0;
            round = 1;
            end = confirm('Game over. Do you want to play again ??');

        }
    }
}

//The end of the game and thanks message.
alert('Thank you for playing !!');





