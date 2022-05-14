let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = computerSelection.toLocaleLowerCase();
    return computerSelection;
}

function getPlayerSelection() {
    playerSelection = prompt("Please choose: Rock, Paper, or Scissors ",);
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function singlePlayRound(computerSelection, playerSelection) {
    console.log(`player selection is ${playerSelection}`);
    console.log(`computer selection is ${computerSelection}`);
    if (computerSelection === playerSelection) {
        return 1;
    } else if
        ((computerSelection === 'rock' && (playerSelection === 'scissors')) ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')) {
        return 0;
    } else {
    }
}

function playGame() {
    let gameSession;
    for (let i = 0; i < 5; i++) {
        gameSession = singlePlayRound(getComputerSelection(), getPlayerSelection());
        if (gameSession == 1) {
            console.log('it is a draw');
            console.log(`score is: computer ${computerScore} - player ${playerScore}`)
        } else if (gameSession == 0) {
            ++computerScore;
            console.log('computer win');
            console.log(`score is: computer ${computerScore} - player ${playerScore}`)
        } else {
            ++playerScore;
            console.log('player win');
            console.log(`score is: computer ${computerScore} - player ${playerScore}`)
        }
    }
    result = `final score is Player (${playerScore} Computer (${computerScore}))`
    return result;
}

playGame();