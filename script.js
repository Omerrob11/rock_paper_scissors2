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
            return "player Won";
        } else if(playerSelection === rock && computerSelection === paper) {
            return "computer won";
        } else if(playerSelection === paper && computerSelection === scissors) {
            return "computer won";
        } else if (playerSelection === paper && computerSelection === rock) {
            return "player won";
        } else if (playerSelection === scissors && computerSelection === rock) {
            return "computer won";
        } else { // this is where player selection equal scisors, and computer slection is paper 
            return "player Won"
        }
    } else {
        return "its a tie";
    }

}

function playGame() {
    
}