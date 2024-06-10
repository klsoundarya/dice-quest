// Took reference from(https://www.w3schools.com/tags/av_prop_muted.asp) & (https://www.w3schools.com/jsref/prop_element_classlist.asp)
//DOM Elements
const muteIcon = document.getElementById('mute-audio');
muteIcon.muted = true;
const unmuteIcon = document.getElementById('unmute-audio');
unmuteIcon.unmute = false;

// Function to mute audio
function muteAudio() {
    const diceSound = document.getElementById('dice-sound');
    diceSound.muted = true;
    muteIcon.classList.add('hidden');
    unmuteIcon.classList.remove('hidden');
}

// Function to unmute audio
function unmuteAudio() {
    const diceSound = document.getElementById('dice-sound');
    diceSound.muted = false;
    muteIcon.classList.remove('hidden');
    unmuteIcon.classList.add('hidden');
}

// Add event listeners to mute and unmute icons from (https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/) & (https://www.w3schools.com/jsref/event_preventdefault.asp)
muteIcon.addEventListener('click', function (event) {
    event.preventDefault();
    muteAudio();
});

unmuteIcon.addEventListener('click', function (event) {
    event.preventDefault();
    unmuteAudio();
});


