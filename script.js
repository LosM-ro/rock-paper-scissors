"use strict";

function playGame(round) {
  let playerSelection = prompt(
    `Round ${round + 1} of 5: Enter Rock, Paper, or Scissors`
  );

  let computerChoice = computerPlay();

  playRound(playerSelection, computerChoice);
}

function computerPlay() {
  let computerSelection = Array("rock", "paper", "scissors");
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

function playRound(playerSelection, computerChoice) {
  let playerChoice = playerSelection.toLowerCase();

  switch (playerChoice + computerChoice) {
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
      alert(`You win, ${playerChoice} beats ${computerChoice}!`);
      app.playerScore++;
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      alert(`Computer wins, ${computerChoice} beats ${playerChoice}!`);
      app.computerScore++;
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      alert(`It's a tie, you both picked ${playerChoice}.`);
      break;
    default:
      alert("Sorry, you must input Rock, Paper, or Scissors");
  }
}

function gameResult() {
  switch (true) {
    case app.playerScore > app.computerScore:
      alert(
        `You are the winner!! Your score of ${app.playerScore} beats computer score of ${app.computerScore}!`
      );
      break;
    case app.playerScore === app.computerScore:
      alert("It's a draw, you're both winners... or, losers?");
      break;
    default:
      alert(
        `Computer wins! Computer score of ${app.computerScore} beats your score of ${app.playerScore} !`
      );
  }
}

let app = {
  playerScore: 0,
  computerScore: 0,
};

for (let i = 0; i < 5; i++) {
  playGame(i);
}

gameResult();
