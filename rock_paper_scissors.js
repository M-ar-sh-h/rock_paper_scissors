// computer selects random play. 
// player inputs random play.
// computer evaluates logic

toContinue = true;

        while(toContinue) {
            playerSelection = prompt("Choose: Rock/ Paper/ Scissor").toLowerCase();
                if (playerSelection === null || playerSelection === "") {
                    alert('Please enter an answer.');
                }
                console.log(typeof(playerSelection));
                    
            let plays = Array("rock", "paper", "scissor");
            computerSelection = plays[Math.floor(Math.random() * plays.length)];
            console.log(typeof(computerSelection));

            function game(playerSelection, computerSelection) {
                if (playerSelection === "rock" && computerSelection === "scissor") {
                    return "You win! Rock beats scissors.";
                } else if (playerSelection === "rock" && computerSelection === "paper") {
                    return "You lose! Paper beats rock.";
                } else if (playerSelection === "paper" && computerSelection === "rock") {
                    return "You win! Paper beats rock.";
                } else if (playerSelection === "paper" && computerSelection === "scissor") {
                    return "You lose! Scissor beats paper.";
                } else if (playerSelection === "scissor" && computerSelection === "rock") {
                    return "You lose! Rock beats scissor";
                } else if (playerSelection === "scissor" && computerSelection === "paper") {
                    return "You win! Scissor beats paper.";
                } else {
                    return "Match tied!";
                }
                console.log(typeof(playerSelection));
                console.log(typeof(computerSelection));
            }
            
            game();
        }    