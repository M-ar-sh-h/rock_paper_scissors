// computer selects random play. 
// player inputs random play.
// computer evaluates logic

playerSelection = lowerCase(prompt("Choose: Rock/ Paper/ Scissors"));

function computerPlay() {
    let plays = Array("rock", "paper", "scissors");
    computerSelection = plays[Math.floor(Math.random() * plays.length)];
    return computerSelection;
}

function play(playerSelection, computerPlay()) {
    if (playerSelection === "rock" && computerPlay() === "scissors") {
        alert("You win! Rock beats scissors.");
    } else if (playerSelection === "rock" && computerPlay() === "paper") {
        alert("You lose! Paper beats rock.");
    } else if (playerSelection === "paper" && computerPlay() === "rock") {
        alert("You win! Paper beats rock.");
    } else if (playerSelection === "paper" && computerPlay() === "scissor") {
        alert("You lose! Scissor beats paper.");
    } else if (playerSelection === "scissor" && computerPlay() === "rock") {
        alert("You lose! Rock beats scissor");
    } else if (playerSelection === "scissor" && computerPlay() === "paper") {
        alert("You win! Scissor beats paper.");
    } else if (playerSelection === computerPlay()) {
        alert("Match tied!");
    }
}

play()