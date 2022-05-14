let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;


// Create a function for Random Computer Play that generate a random choice from the choices and return it.

function computerPlay() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = computerSelection.toLocaleLowerCase();
    return computerSelection;
}

// create the player selection function

function playerPlay() {
    playerSelection = prompt("Please choose: Rock, Paper, or Scissors ",);
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

// a function that plays a single round. It takes two parameters - the playerSelection and computerSelection - and  return the winner of the round
function playRound(computerSelection, playerSelection) {

    console.log(`player selection is ${playerSelection}`);
    console.log(`computer selection is ${computerSelection}`);
    if (computerSelection === playerSelection) {
        console.log('it is a draw');
        return 1;
    } else if
        ((computerSelection === 'rock' && (playerSelection === 'scissors')) ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')) {
        console.log('computer win');
        return 0;
    } else {
        console.log('player win')
    }
}

function game() {
    let session;
    for (let i = 0; i < 5; i++) {
        session = playRound(computerPlay(), playerPlay());
        if (session == 1) {
            console.log(`score is: computer ${computerScore} - player ${playerScore}`)
        } else if (session == 0) {
            ++computerScore;
            console.log(`score is: computer ${computerScore} - player ${playerScore}`)
        } else {
            ++playerScore;
            console.log(`score is: computer ${computerScore} - player ${playerScore}`)
        }
    }
}

game();