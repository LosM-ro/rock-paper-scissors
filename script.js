function computerPlay() {
  let computerChoice = Array("Rock", "Paper", "Scissors");
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  let round = 1 + i;

  function playGame() {
    const playerSelection = prompt(
      `Round ${round} of 5: Enter Rock, Paper, or Scissors`
    );
    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
      let player = playerSelection.toLowerCase();

      if (player === "rock" && computerSelection === "Paper") {
        lose("Rock", "Paper");
      } else if (player === "paper" && computerSelection === "Paper") {
        tie("Paper");
      } else if (player === "scissors" && computerSelection === "Paper") {
        win("Scissors", "Paper");
      } else if (player === "rock" && computerSelection === "Rock") {
        tie("Rock");
      } else if (player === "paper" && computerSelection === "Rock") {
        win("Paper", "Rock");
      } else if (player === "scissors" && computerSelection === "Rock") {
        lose("Scissors", "Rock");
      } else if (player === "rock" && computerSelection === "Scissors") {
        win("Rock", "Scissors");
      } else if (player === "paper" && computerSelection === "Scissors") {
        lose("Paper", "Scissors");
      } else if (player === "scissors" && computerSelection === "Scissors") {
        tie("Scissors");
      } else {
        invalid();
      }

      function win(player, comp) {
        alert("You win, " + player + " beats " + comp + "!");
        playerScore++;
        console.log("Your total score is " + playerScore);
      }

      function lose(player, comp) {
        alert("Computer wins, " + comp + " beats " + player + "!");
        computerScore++;
        console.log("Computer's total score is " + computerScore);
      }

      function tie(player) {
        alert("It's a tie, you both picked " + player);
      }

      function invalid() {
        alert("Sorry, you must input Rock, Paper, or Scissors");
      }
    }
    playRound(playerSelection, computerSelection);
  }
  playGame(i);
}

function gameWinner() {
  if (playerScore > computerScore) {
    alert("You are the champion!!");
  } else if (playerScore == computerScore) {
    alert("It's a draw, you're both winners... or, losers?");
  } else {
    alert("Computer is the champion and will takeover the world!");
  }
}

gameWinner();
