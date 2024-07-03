const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

const choices = ["Rock","Paper","Scissors"];

function Game(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()* 3)];

    const getResult = (playerChoice, computerChoice) =>

        playerChoice === computerChoice ? "IT'S A TIE! 😕":

        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
        ? "YOU WIN 🥳"
        : "YOU LOSE! 😭";

        const result = getResult(playerChoice,computerChoice)
        resultDisplay.textContent = result;
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

        resultDisplay.style.backgroundColor = 
        result === "IT'S A TIE! 😕"
        ? "blue"
        : result === "YOU WIN 🥳"
        ? "green"
        : "red";
        resultDisplay.style.border = "2px solid transparent"
        resultDisplay.style.color = "white"


      

        // switch(result){
        //     case "YOU WIN 🥳":
        //         playerScore++;
        //         playerScoreDisplay.textContent = playerScore;
        //         break;
        //     case "YOU WIN 🥳":
        //         computerScore++;
        //         computerScoreDisplay.textContent = computerScore;
        //         break;    
        // }
}

