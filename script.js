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
  const updateComputerChoice = () => {
    computerChoicePara.textContent = computerChoice;
  };
  updateComputerChoice();
  return computerChoice;
}
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    draw_score++;
    updateScore();
  } else if (
    (playerChoice === "ROCK" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
    computer_score++;
    updateScore();
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    player_score++;
    updateScore();
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
function updateScore() {
  playerScore.textContent = player_score;
  drawScore.textContent = draw_score;
  computerScore.textContent = computer_score;
}

/*Referencing HTML IDS*/
let paperBtn = document.getElementById("paperBtn");
let rockBtn = document.getElementById("rockBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

let playerScore = document.getElementById("playerScore");
let drawScore = document.getElementById("drawScore");
let computerScore = document.getElementById("computerScore");
let computerChoicePara = document.getElementById("computerChoicePara");

/* Updating visual score */

/* Player choice when clicking */
rockBtn.addEventListener("click", function () {
  playRound("ROCK", getComputerChoice());
});
paperBtn.addEventListener("click", () =>
  playRound("PAPER", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
  playRound("SCISSORS", getComputerChoice())
);
updateScore();
