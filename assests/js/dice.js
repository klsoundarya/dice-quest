// JavaScript code to create the dice game with sound effects
document.addEventListener('DOMContentLoaded', function () {
    // Player names

    let player1 = "Player 1";
    let player2 = "Player 2";

    // Player scores
    let player1Score = 0;
    let player2Score = 0;
    let rounds = 0;
    const maxRounds = 10;

    // Function to change the player name

    function changeNames() {
        player1 = prompt("Change Player1 name");
        player2 = prompt("Change Player2 name");

        document.querySelector("p#Player1").innerHTML = player1;
        document.querySelector("p#Player2").innerHTML = player2;
    }

    // Function to roll the dice
    // Took reference from (https://www.w3schools.com/jsref/met_win_settimeout.asp)

    function rollDice() {
        setTimeout(function () {
            const die1 = document.getElementById('dice-1');
            const die2 = document.getElementById('dice-2');

            const roll1 = Math.floor(Math.random() * 6) + 1;
            const roll2 = Math.floor(Math.random() * 6) + 1;

            const diceFaces = [
                'fas fa-dice-one',
                'fas fa-dice-two',
                'fas fa-dice-three',
                'fas fa-dice-four',
                'fas fa-dice-five',
                'fas fa-dice-six'
            ];

            // Update dice faces
            die1.className = diceFaces[roll1 - 1];
            die2.className = diceFaces[roll2 - 1];

            //Add click event listener for dice sound

            playDiceSound();
        }