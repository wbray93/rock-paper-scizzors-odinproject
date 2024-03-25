const rockContainer = document.querySelector("#rock");
const paperContainer = document.querySelector("#paper");
const scissorsContainer = document.querySelector("#scissors");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

// Function to create a button with specified background image
function createButton(container, backgroundImageUrl, choice) {
    const button = document.createElement("button");
    button.classList.add("button"); // Add a common class for styling
    button.style.width = "250px";
    button.style.height = "250px";
    button.style.borderRadius = "90%"
    button.style.margin = "auto";
    button.style.backgroundImage = `url('${backgroundImageUrl}')`;
    button.style.backgroundSize = "100% 100%";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.outline = "none"
    button.addEventListener('click', () => playerChoiceHandler(choice));
    container.appendChild(button);
}

//Handles the Rock button
createButton(rockContainer, "rockpictures.jpg", "rock");

//Handles the Paper button
createButton(paperContainer, "paperpictures.jpg", "paper");

//Handles the Scissors button
createButton(scissorsContainer, "scissorspictures.jpg", "scissors");

let playerChoice;
let playerPoints = 0
let computerPoints = 0;
let rounds = 0;
let results = []; //stores the results of each round

function getComputerChoice() {
    const random = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * random.length);
    return random[randomIndex].trim().toLowerCase();
}

function playerChoiceHandler(choice) {
    let computerChoice = getComputerChoice();
    console.log("Player choice:", choice);
    console.log("Computer choice:", computerChoice);
    let result = determineWinner(choice, computerChoice);
    console.log(result);

    if (result === "Player wins!") {
        playerPoints++
    } else if (result === "Computer wins!") {
        computerPoints++;
    }

    results.push(result);
    rounds++;

    let winner;
    if (playerPoints > computerPoints) {
        winner = "Player has won the game!";
    } else if (playerPoints < computerPoints) {
        winner = "Computer has won the game!";
    } else {
        winner = "Its a tie!";
    }

    roundEndPointsUpdate();

    if (playerPoints === 5 || computerPoints === 5) {
        alert(winner)
        playerScore.textContent = "Player Score: 0";
        computerScore.textContent = "Computer Score: 0";
        playerPoints = 0;
        computerPoints = 0;
    }
}

function roundEndPointsUpdate() {
    playerScore.textContent = `Player Score: ${playerPoints}`;
    computerScore.textContent = `Computer Score: ${computerPoints}`;
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
            return "";
    }
}