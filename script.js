const rock = "Rock";
const paper = "Paper";
const scissors = 'Scissors';

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