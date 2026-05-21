let playerScore = 0;
let computerScore = 0;
let ties = 0; // optional

const choices = ["Rock", "Paper", "Scissors"];

document.querySelector("#rock").addEventListener("click", function () {
    playRound("Rock");
    document.querySelector("#playerRock").style.display = "block";
    document.querySelector("#playerPaper").style.display = "none";
    document.querySelector("#playerScissors").style.display = "none";
});

document.querySelector("#paper").addEventListener("click", function () {
    playRound("Paper");
    document.querySelector("#playerPaper").style.display = "block";
    document.querySelector("#playerRock").style.display = "none";
    document.querySelector("#playerScissors").style.display = "none";
});

document.querySelector("#scissors").addEventListener("click", function () {
    playRound("Scissors");
    document.querySelector("#playerScissors").style.display = "block";
    document.querySelector("#playerRock").style.display = "none";
    document.querySelector("#playerPaper").style.display = "none";
});

document.querySelector("#reset").addEventListener("click", resetGame);


function playRound(playerChoice) {
    console.log("Playing Round " + playerChoice);
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
    // if statements: choices[index] === "Rock" display rock image, etc...
}

function determineWinner(player, computer) {

    if (player === computer) {
        return "tie";
    }

    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        return "player";
    }

    return "computer";
}

function updateScore(result) {
    if (result === "player") {
        playerScore++;
    } else if (result === "computer") {
        computerScore++;
    } else {
        ties++;
    }
   
}

function displayResult(playerChoice, computerChoice, result) {
    let resultText = " ";    
    if (result === "player") {
        resultText = "You win!";
    }
    else if (result === "computer") {
        resultText = "Computer wins!";
    }
    else {
        resultText = "It's a tie!";
    }
        document.querySelector("#outcome").textContent = playerChoice + " vs " + computerChoice;
        document.querySelector("#result").textContent = resultText;
        document.querySelector("#playerScore").textContent = playerScore;
        document.querySelector("#computerScore").textContent = computerScore;
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
   
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    document.querySelector("#outcome").textContent = '';
    document.querySelector("#result").textContent = " ";
}