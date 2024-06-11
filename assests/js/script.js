document.addEventListener('DOMContentLoaded', function () {
    // Player names
    let player1 = "";
    let player2 = "";

    // Player scores
    let player1Score = 0;
    let player2Score = 0;
    let rounds = 0;
    const maxRounds = 10;

    // Function to change the player name

    function changeNames() {
        player1 = prompt("Enter Player1 name");
        player2 = prompt("Enter Player2 name");

        if (player1 && player2) {
            document.querySelector("p#Player1").innerHTML = player1;
            document.querySelector("p#Player2").innerHTML = player2;
            document.querySelector("h2#welcome").innerHTML = "Welcome to Dice Quest!";
        } else {
            alert("Both players must enter their names to start the game.");
        }
    }

    // Prompt for player names when the page loads
    changeNames();

    // Function to roll the dice
    // Took reference from (https://www.w3schools.com/jsref/met_win_settimeout.asp)

    function rollTheDice() {
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

            die1.className = diceFaces[roll1 - 1];
            die2.className = diceFaces[roll2 - 1];

            playDiceSound();

            if (roll1 === roll2) {
                document.querySelector("h2#welcome").innerHTML = "Match is Draw!";
            } else if (roll1 < roll2) {
                document.querySelector("h2#welcome").innerHTML = "Welcome to Dice Quest!"; player2Score++;
            } else {
                document.querySelector("h2#welcome").innerHTML = "Welcome to Dice Quest!"; player1Score++;
            }
            rounds++;

            // Update scores
            document.querySelector("p#Player1Score").innerHTML = player1 + ": " + player1Score;
            document.querySelector("p#Player2Score").innerHTML = player2 + ": " + player2Score;

            // Check if the game is over
            if (rounds >= maxRounds) {
                let winner;
                if (player1Score > player2Score) {
                    winner = player1 + " is the overall winner! Click 'Start New Game' to play again.";
                } else if (player1Score < player2Score) {
                    winner = player2 + " is the overall winner! Click 'Start New Game' to play again.";
                } else {
                    winner = "It's a draw! Click 'Start New Game' to play again.";
                }

                document.querySelector("h2#welcome").innerHTML = winner;

                // Reset scores and rounds for a new game
                player1Score = 0;
                player2Score = 0;
                rounds = 0;

                // Disable the roll button
                document.getElementById('roll-btn').disabled = true;

                // Enable the roll button after the user starts a new game
                document.getElementById('start-new-game-btn').addEventListener('click', function () {
                    document.querySelector("h2#welcome").innerHTML = "Welcome to Dice Quest!";
                    document.getElementById('roll-btn').disabled = false;
                    document.querySelector("p#Player1Score").innerHTML = player1 + ": " + player1Score;
                    document.querySelector("p#Player2Score").innerHTML = player2 + ": " + player2Score;
                });
            }

        }, 700);
    }

    // Function to play dice roll sound sound and currentTime is from w3 schools (https://www.w3schools.com/tags/av_prop_currenttime.asp)
    function playDiceSound() {
        const diceSound = document.getElementById("dice-sound");
        diceSound.currentTime = 0;
        diceSound.play();
    }

    document.getElementById('roll-btn').addEventListener('click', rollTheDice);
    document.getElementById('edit-btn').addEventListener('click', changeNames);

});


