let choices = ["Rock", "Paper", "Scissors"];

// Create a function for Random Computer Play that generate a random choice from the choices and return it.

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)]; // can this be divided into two functions? one for random & the other for computer play?
}

// create the player selection function

function playerPlay() {
  let answer = prompt(
    "Please write your choice from the following: Rock, Paper, or Scissors "
  );
  answer = answer.toLowerCase();

  if (answer === "rock" || answer === "paper" || answer === "scissors")  {
     return answer;
  } else {
    alert("Please enter a correct choice");
    playerPlay();
  }
}


//a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" //

function playRound(computerSelection,playerSelection) {
let result = "";
let isComputerWinning = "";
let isPlayerWinning;
let isDraw;
    switch (true) {
        case ((playerSelection == "rock" && computerSelection == "Paper" || "Scissors") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Rock")):
            result = `You WON! ${playerSelection} beats ${computerSelection} `;
            isPlayerWinning = "player";
            console.log(result);
            return isPlayerWinning
            break;
        case ((computerSelection == "Rock" && playerSelection == "paper" || "scissors") || (computerSelection == "Scissors" && playerSelection == "paper") || (computerSelection == "Paper" && playerSelection == "rock")):
            result = `Computer WON! ${computerSelection} beats ${playerSelection}`;
            isComputerWinning = "computer";
            console.log(result);
            return isComputerWinning;
            break;
        case ((computerSelection == "Rock" && playerSelection == "rock") || (computerSelection == "Paper" && playerSelection == "paper") || (computerSelection == "Scissors" && playerSelection == "scissors")):
            result = `It is a draw! you and computer selected ${computerSelection}`;
            isDraw = "draw";
            console.log(result);
            return isDraw;
    }
}
//console.log(playRound(computerPlay(), playerPlay())); // change it later to 

function game() {
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i <5; i++) {
    let newSession = playRound(computerPlay(),playerPlay());
    console.log(newSession);
    // }
    // else if (newSession.slice(0,5) == "You W") {
    //     ++playerScore;
    // } else {
    //     ++computerScore;
    // }
}
// console.log(playerScore, computerScore);
}


game(); // I stopped trying to figure what the result was. 