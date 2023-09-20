document.addEventListener("DOMContentLoaded", init);

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(3 * Math.random()) + 1;
  let computerChoice = "";
  switch (randomNumber) {
    case 1:
      computerChoice = "ROCK";
      break;
    case 2:
      computerChoice = "PAPER";
      break;
    case 3:
      computerChoice = "SCISSORS";
      break;
    default:
      computerChoice = "ERROR!";
  }
  console.log("Computer Chose: " + computerChoice);
  return computerChoice;
}

let getPlayerChoice = () =>
  prompt("Choose between: ROCK, PAPER or SCISSORS: ").toUpperCase();

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Its a draw!");
    drawScore++;
  } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
    console.log("You lose: " + computerChoice + " beats " + playerChoice);
    computerScore++;
  } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You win: " + playerChoice + " beats " + computerChoice);
    playerScore++;
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You win: " + playerChoice + " beats " + computerChoice);
    playerScore++;
  } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
    console.log("You lose: " + computerChoice + " beats " + playerChoice);
    computerScore++;
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You win: " + playerChoice + " beats " + computerChoice);
    playerScore++;
  } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
    console.log("You lose: " + computerChoice + " beats " + playerChoice);
    computerScore++;
  } else console.log("ERROR!");
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
  if (playerScore > computerScore) {
    console.log("Congrats you won!");
    console.log(
      `You: ${playerScore} \nComputer: ${computerScore}\nDraws: ${drawScore}`
    );
  } else if (playerScore < computerScore) {
    2;
    console.log("You Lost!");
    console.log(
      `You: ${playerScore} \nComputer: ${computerScore}\nDraws: ${drawScore}`
    );
  } else {
    console.log("Tie!");
    console.log(
      `You: ${playerScore} \nComputer: ${computerScore}\nnDraws: ${drawScore}`
    );
  }
}
console.log(game(5));
