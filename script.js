// initialize score and choice variable
let userWins = 0;
let userLosses = 0;
let ties = 0;
let totalGames = 0;
let playerChoice = ''
let computerChoice = ''

// initialize displays
const userDisplay = document.querySelector("#user-choice")
const cpuDisplay = document.querySelector("#computer-choice");
const winsDisplay = document.querySelector("#wins");
const lossesDisplay = document.querySelector("#losses");
const tiesDisplay = document.querySelector("#ties");

// initialize game option buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Loop through result of button clicks (play game)
buttons = [rockBtn, paperBtn, scissorsBtn]
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        updateDisplays();
        checkTotal();
    });
})

// revert variables and display back to 0 or empty
const restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", () => {
    userWins = 0;
    userLosses = 0;
    ties = 0;
    totalGames = 0;
    userChoice = '';
    computerChoice = '';
    playerChoice =''
    let result = document.querySelector("#game-result");
    result.textContent = ''
    updateDisplays();
});

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    choice = options[getRandomInt(0, 2)];
    return computerChoice = choice;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        ties += 1;
        totalGames += 1;
    } else if (playerChoice == 'rock' && computerChoice == 'paper'
        || playerChoice === 'paper' && computerChoice == 'scissors'
        || playerChoice == 'scissors' && computerChoice == 'rock') {
            userLosses += 1;
            totalGames += 1;
    } else {
        userWins += 1;
        totalGames += 1;
    }
}

function updateDisplays() {
    userDisplay.textContent = ("You: " + playerChoice)
    cpuDisplay.textContent = ("Computer: " + computerChoice);
    winsDisplay.textContent = ("Wins: " + userWins);
    lossesDisplay.textContent = ("Losses: " + userLosses);
    tiesDisplay.textContent = ("Ties: " + ties); 
}

function checkTotal() {
    let result = document.querySelector("#game-result");
    if (totalGames === 5) {
        if (userWins > userLosses){
            result.textContent = "You won!"
        } if (userWins < userLosses){
            result.textContent = "You lost."
        } if (userWins === userLosses){
            result.textContent = "Its a tie."
        }
    } if (totalGames > 5) {
        result.textContent = "∞ To Infinity ∞"
    }

}