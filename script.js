function getComputerChoice() {
    const random = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * random.length);
    return random[randomIndex].trim().toLowerCase();
}

function getPlayerChoice() {
    let choice = prompt("Select your choice (Rock, Paper, or Scissors): ").trim().toLowerCase();
    // Validate the player's input
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Please enter a correct choice from the options listed: ").trim().toLowerCase();
    }
    return choice;
}

function determineWinner(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "It's a tie!";
                case "paper":
                    return "Computer wins!";
                case "scissors":
                    return "Player wins!";
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    return "Player wins!";
                case "paper":
                    return "It's a tie!";
                case "scissors":
                    return "Computer wins!";
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    return "Computer wins!";
                case "paper":
                    return "Player wins!";
                case "scissors":
                    return "It's a tie!";
            }
            break;
        default:
            return "Invalid choices!";
    }
}

function letsPlay(playerChoice) {
    let playerPoints = 0;
    let computerPoints = 0;
    let rounds = 0;
    let results = []; //stores the results of each round

    while(rounds < 5) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        // console.log("Player choice:", playerChoice);
        // console.log("Computer choice:", computerChoice);
        let result = determineWinner(playerChoice, computerChoice);
        // console.log(result);

        if (result === "Player wins!") {
            playerPoints++
        } else if (result === "Computer wins!") {
            computerPoints++;
        }

        results.push(result);
        rounds++;
    }


    let winner;
    if(playerPoints > computerPoints) {
        winner = "Player has won the game!";
    } else if(playerPoints < computerPoints) {
        winner = "Computer has won the game!";
    } else {
        winner = "Its a tie!";
    }
    

    return { results, winner }; // Return the results of each round and the final winner
};