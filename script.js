let player_score = 0;
let computer_score = 0;
let draw_score = 0;

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

// let getPlayerChoice = () =>
//   prompt("Choose between: ROCK, PAPER or SCISSORS: ").toUpperCase();

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Its a draw!");
    draw_score++;
    console.log("Draws>", draw_score);
  } else if (
    (playerChoice === "ROCK" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
    console.log("You lose: " + playerChoice + " loses to " + computerChoice);
    computer_score++;
    console.log("Computer>", computer_score);
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    console.log("You win: " + playerChoice + " beats " + computerChoice);
    player_score++;
    console.log("Player>", player_score);
  } else console.log("ERROR!");
}

// function game(rounds) {
//   for (let i = 0; i < rounds; i++) {
//     playRound(getPlayerChoice(), getComputerChoice());
//   }
//   if (playerScore > computerScore) {
//     console.log("Congrats you won!");
//     console.log(
//       `You: ${playerScore} \nComputer: ${computerScore}\nDraws: ${drawScore}`
//     );
//   } else if (playerScore < computerScore) {
//     2;
//     console.log("You Lost!");
//     console.log(
//       `You: ${playerScore} \nComputer: ${computerScore}\nDraws: ${drawScore}`
//     );
//   } else {
//     console.log("Tie!");
//     console.log(
//       `You: ${playerScore} \nComputer: ${computerScore}\nnDraws: ${drawScore}`
//     );
//   }
// }
// console.log(game(5));

let paperBtn = document.getElementById("paperBtn");
let rockBtn = document.getElementById("rockBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
console.log("rockBtn", rockBtn);
console.log("paperBtn", paperBtn);
console.log("scissorsBtn", paperBtn);

rockBtn.addEventListener("click", function () {
  playRound("ROCK", getComputerChoice());
});
paperBtn.addEventListener("click", () =>
  playRound("PAPER", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
  playRound("SCISSORS", getComputerChoice())
);
