// DOM Elements loads before executing the script
document.addEventListener('DOMContentLoaded', function () {
let currentSum = 0;

// Function to roll the dice and update the UI
function rollDice() {
    const die1 = document.getElementById('dice-1');
    const die2 = document.getElementById('dice-2');

    const roll1 = Math.floor(Math.random() * 6) + 1; // this generates random dice number
    const roll2 = Math.floor(Math.random() * 6) + 1;

    const diceFaces = [
        'fas fa-dice-one',
        'fas fa-dice-two',
        'fas fa-dice-three',
        'fas fa-dice-four',
        'fas fa-dice-five',
        'fas fa-dice-six'
    ];

    // className property will display different number dice faces.
    die1.className = diceFaces[roll1 - 1];
    die2.className = diceFaces[roll2 - 1];

    //Add click event listener for dice sound

    const dice = document.querySelectorAll('.single-dice');
    for (let i = 0; i < dice.length; i++) {
        dice[i].addEventListener('click', playDiceSound);
    }

    playDiceSound();

    currentSum = roll1 + roll2;
    updateFlaps();

    return { roll1, roll2, currentSum };
}

// Function to play the dice sound
// code is from (https://www.w3schools.com/jsref/met_audio_play.asp)
function playDiceSound() {
    const diceSound = document.getElementById('dice-sound');
    diceSound.play();
}

document.getElementById('roll-btn').addEventListener('click', rollDice);

});