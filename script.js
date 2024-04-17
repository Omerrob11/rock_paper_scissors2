const rock = "rock";
const paper = "paper";
const scissors = 'scissors';

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

function getPlayerSelection() {
    return prompt("Pick a hand").toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection !== computerSelection) {
        if (playerSelection == rock && computerSelection == scissors) {
            return `You won! ${rock} beats ${scissors}`;
        } else if(playerSelection === rock && computerSelection === paper) {
            return`You lose! ${rock} lose to ${paper}`;
        } else if(playerSelection === paper && computerSelection === scissors) {
            return `You lose! ${paper} lose to ${scissors}`;
        } else if (playerSelection === paper && computerSelection === rock) {
            return `You won! ${paper} beats ${rock}`;
        } else if (playerSelection === scissors && computerSelection === rock) {
            return `You lose! ${scissors} lose to ${rock}=`;
        } else { // this is where player selection equal scisors, and computer slection is paper 
            return `You won! ${scissors} beats ${paper}`;
        }
    } else {
        return "its a tie round";
    }
}


function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i<=4; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice();
        let roundWinner = playRound(playerSelection,computerSelection); 
        if (calculateScore(roundWinner) === "player") {
            playerScore += 1;
        } else if(calculateScore(roundWinner) == "computer") {
            computerScore +=1;
        } else {
            playerScore += 1;
            computerScore +=1;
        }

    }

    if ( computerScore > playerScore) {
        return "compute won the game!"
    } else if (playerScore > computerScore) {
        return "player won the game"
    } else {
        return "it's a tie";
    }
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

