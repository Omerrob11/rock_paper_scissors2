
// global variables

const rock = "rock";
const paper = "paper";
const scissors = 'scissors';
let computerScore = 0;
let playerScore = 0;


// Computer Selection functions

function getComputerChoice(){
    let numBetween1To3 = randomNum();

    if (numBetween1To3 == 3) {
        return rock;
    } else if (numBetween1To3 == 2) {
        return paper;
    } else {
        return scissors
    }
}

function randomNum() {
    return Math.floor(Math.random() * 3) + 1;
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection !== computerSelection) {
        if (playerSelection == rock && computerSelection == scissors) {
            scoreCalc("player");
            return `You won! ${rock} beats ${scissors}`;
        } else if(playerSelection === rock && computerSelection === paper) {
            scoreCalc("computer");
            return`You lose! ${rock} lose to ${paper}`;
        } else if(playerSelection === paper && computerSelection === scissors) {
            scoreCalc("computer");
            return `You lose! ${paper} lose to ${scissors}`;
        } else if (playerSelection === paper && computerSelection === rock) {
            scoreCalc("player");
            return `You won! ${paper} beats ${rock}`;
        } else if (playerSelection === scissors && computerSelection === rock) {
            scoreCalc("computer");
            return `You lose! ${scissors} lose to ${rock}`;
        } else { // this is where player selection equal scisors, and computer slection is paper 
            scoreCalc("player");
            return `You won! ${scissors} beats ${paper}`;
        }
    } else {
        return "its a tie round";
    }
}

function scoreCalc (winner) {
    if (winner == "player") {
        playerScore += 1;
    } else {
        computerScore += 1;
    }

    updateScoreText();

    if (computerScore === 5 || playerScore === 5) {
        winnerDisplay();
        reset();
    }
}

function winnerDisplay() {
    if (computerScore === 5) {
        winnerMessageText.textContent = "You loser! computer won the game";
    } else {
        winnerMessageText.textContent = "You won the game";
    }
}

function reset () {
    computerScore = 0;
    playerScore = 0;
}

function updateScoreText () {
    playerScorePara.textContent = "player Score: " + playerScore;
    computerScorePara.textContent = "computer Score: " + computerScore;
}


function calculateScore(roundWinnerText) {

    if (roundWinnerText.subString(0,4) === "You w") {
        return "player";
    } else if( roundWinnerText.subString(0,4) === "You l") {
        return "computer";
    } else {
        return "tie";
    }
}


// Elements refrences 
const playerSelectionContainer = document.querySelector(".player_selection");
const results = document.querySelector(".results");

const playerSelectionPara = document.querySelector(".player_selection_text");
const computerSelectionPara = document.querySelector(".computer_selection_text");
const winnerPara = document.querySelector(".winner_text");

const playerScorePara = document.querySelector(".player_score");
const computerScorePara = document.querySelector(".computer_score");
const winnerMessageText = document.querySelector(".winner_message");


// DOM elements creation
// event Listeners;

playerSelectionContainer.addEventListener("click", (e) => {
    let playerSelection = "";
    let computerSelection = getComputerChoice();
    let target = e.target;

    switch(target.className) {
        case "rock": 
            playerSelection="rock";
            break;

        case "paper": 
            playerSelection="paper";
            break;

        case "scissors": 
            playerSelection="scissors";
            break;
    }
    appeandRoundResults(playerSelection,computerSelection,playRound(playerSelection,computerSelection));
});

// Changing DOM

function appeandRoundResults (playerSelection,computerSelection,wiinner) {
    playerSelectionPara.textContent = playerSelection;
    computerSelectionPara.textContent = computerSelection;
    winnerPara.textContent = wiinner;
}
