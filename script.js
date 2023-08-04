function getComputerChoice () {
    let randomNumber = Math.floor(3*Math.random()) + 1;
    let computerChoice = ""; 
    switch(randomNumber){
        case 1: computerChoice = "ROCK";
        break;
        case 2: computerChoice = "PAPER";
        break;
        case 3: computerChoice = "SCISSORS";
        break;
        default: computerChoice = "ERROR!";
    }
    console.log("Computer Chose: "+ computerChoice);
    return computerChoice;
}

let getPlayerChoice = () => prompt("Choose between: ROCK, PAPER or SCISSORS: ").toUpperCase();
    
    

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice)
        console.log("Its a draw!")
    
    else if (playerChoice === "ROCK" && computerChoice === "PAPER" )
        console.log("You lose: "+ computerChoice + " beats " + playerChoice)
    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" )
        console.log("You win: "+ playerChoice + " beats " + computerChoice)
    else if (playerChoice === "PAPER" && computerChoice === "ROCK" )
        console.log("You win: "+ playerChoice + " beats " + computerChoice)
    else if (playerChoice === "PAPER" && computerChoice === "SCISSORS" )
        console.log("You lose: "+ computerChoice + " beats " + playerChoice)
    else if (playerChoice === "SCISSORS" && computerChoice === "PAPER" )
        console.log("You win: "+ playerChoice + " beats " + computerChoice)
    else if (playerChoice === "SCISSORS" && computerChoice === "ROCK" )
        console.log("You lose: "+ computerChoice + " beats " + playerChoice)
    else
        console.log("ERROR!");
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));