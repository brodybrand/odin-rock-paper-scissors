// initialize variables to default values
let userWins = 0;
let userLoses = 0;
let ties = 0;
let totalGames = 0;
let playerChoice = ''
let computerChoice = ''

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
    playerChoice= "rock";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateDisplays();
    checkTotal();
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
    playerChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);    
    updateDisplays();
    checkTotal();
});

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playerChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice); 
    updateDisplays();
    checkTotal();
});

const restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", () => {
    userWins = 0;
    userLoses = 0;
    ties = 0;
    totalGames = 0;
    userChoice = '';
    computerChoice = '';
    playerChoice =''
    let result = document.querySelector("#game-result");
    result.textContent = ''
    updateDisplays();
});

function checkTotal() {
    let result = document.querySelector("#game-result");
    if (totalGames === 5) {
        if (userWins > userLoses){
            result.textContent = "You won!"
        } if (userWins < userLoses){
            result.textContent = "You lost."
        } if (userWins === userLoses){
            result.textContent = "Its a tie."
        }
    } if (totalGames > 5) {
        result.textContent = "∞ To Infinity ∞"
    }

}

function updateDisplays() {
    userDisplay = document.querySelector("#user-choice")
    userDisplay.textContent = ("You: " + playerChoice)

    cpuDisplay = document.querySelector("#computer-choice");
    cpuDisplay.textContent = ("Computer: " + computerChoice);

    winsDisplay = document.querySelector("#wins");
    winsDisplay.textContent = ("Wins: " + userWins);

    losesDisplay = document.querySelector("#loses");
    losesDisplay.textContent = ("Loses: " + userLoses);

    tiesDisplay = document.querySelector("#ties");
    tiesDisplay.textContent = ("Ties: " + ties); 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    choice = options[getRandomInt(0, 2)];
    return computerChoice = choice;
}

function playRound(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        ties += 1;
        totalGames += 1;
    } else if (playerChoice == 'rock' && computerChoice == 'paper'
        || playerChoice === 'paper' && computerChoice == 'scissors'
        || playerChoice == 'scissors' && computerChoice == 'rock') {
            userLoses += 1;
            totalGames += 1;
    } else {
        userWins += 1;
        totalGames += 1;
    }
}