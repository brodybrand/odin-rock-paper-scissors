// Create array with viable options for game
let options = ['rock', 'paper', 'scissors'];
// Create variable, playerSelection, for user input
let playerSelection = '';
// Create variable, computerSelection, for computer input
let computerSelection = '';
// Initialize counter for userWins
let userWins = 0;
// Initialize counter for userLoses
let userLoses = 0;

let ties = 0

let totalGames = userWins + userLoses + ties;


// User option is saved to playerSelection
function getPlayerChoice (choice) {
    return playerSelection = prompt("Rock, Paper, or, Scissors?").toLowerCase();
}

// Create function for computer generated random throw, getComputerChoice
//	return choice to computerSelection variable
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    choice = options[getRandomInt(0, 2)];
    return computerSelection = choice;
}

// Logic handles outcomes as gameResult (userWin, userLose)
function play() {
    getPlayerChoice();
    getComputerChoice();
    console.log('playerSelection: ' + playerSelection);
    console.log('computerSelection: ' + computerSelection);
    
    if (playerSelection == computerSelection) {
        ties += 1;
        return console.log('Its a tie.');
    } else if (playerSelection == 'rock' && computerSelection == 'paper'
        || playerSelection === 'paper' && computerSelection == 'scissors'
        || playerSelection == 'scissors' && computerSelection == 'rock') {
            userLoses += 1;
            return console.log('You lose');
    } else {
        userWins += 1;
        return console.log('You win.');
    }
}
// 	IF playerSelection beats computerSelection THEN counter userWins gets plus one
//	IF computerSelection beats playerSelection THEN counter userLosses gets plus one

// Output gameResult to console.


play()