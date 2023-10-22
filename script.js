function getComputerChoice() {
  // generates random number between 1 and 3 (both included)
  let randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) {
    computerChoice = "Rock";
    computerOutput.innerText = `Computer: 
    ${computerChoice}`;
    return "Rock";
  } else if (randNum === 2) {
    computerChoice = "Paper";
    computerOutput.innerText = `Computer: 
    ${computerChoice}`;
    return "Paper";
  } else {
    computerChoice = "Scissors";
    computerOutput.innerText = `Computer: 
    ${computerChoice}`;
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;

  if (player === computer) {
    return "It's a tie!";
  } else if (player === "Rock" && computer === "Paper") {
    ++computerScore;
    computerPoints.innerText = `Points: 
    ${computerScore}`;
    return "You Lose! Paper beats Rock";
  } else if (player === "Rock" && computer === "Scissors") {
    ++playerScore;
    playerPoints.innerText = `Points: 
    ${playerScore}`;
    return "You Win! Rock beats Scissors";
  } else if (player === "Paper" && computer === "Rock") {
    ++playerScore;
    playerPoints.innerText = `Points: 
    ${playerScore}`;
    return "You Win! Paper beats Rock";
  } else if (player === "Paper" && computer === "Scissors") {
    ++computerScore;
    computerPoints.innerText = `Points: 
    ${computerScore}`;
    return "You Lose! Scissors beats Paper";
  } else if (player === "Scissors" && computer === "Rock") {
    ++computerScore;
    computerPoints.innerText = `Points: 
    ${computerScore}`;
    return "You Lose! Rock beats Scissors";
  } else {
    ++playerScore;
    playerPoints.innerText = `Points: 
    ${playerScore}`;
    return "You Win! Scissors beats Paper";
  }
}

function hideButtons() {
  const buttons = document.querySelectorAll("button");
  const btnsDiv = document.querySelector("#buttons");

  buttons.forEach((button) => button.setAttribute("hidden", "hidden"));
  
  const playAgainBtn = document.createElement("button");
  playAgainBtn.setAttribute("type", "button");
  playAgainBtn.setAttribute("id", "playAgain");
  playAgainBtn.innerText = "Play Again!";
  
  btnsDiv.appendChild(playAgainBtn);
  const playAgain = document.querySelector("#playAgain");
  playAgain.addEventListener("click", roundRestart);
}

function roundRestart() {
  const btnsDiv = document.querySelector("#buttons");
  const playAgain = document.querySelector("#playAgain");
  btnsDiv.removeChild(playAgain);
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.removeAttribute("hidden"));

  roundNumber = 0
  roundCounter.innerText = "";
  
  playerScore = 0;
  playerPoints.innerText = `Points: 
  ${playerScore}`;
  playerOutput.innerText = "";
  
  computerScore = 0;
  computerPoints.innerText = `Points: 
  ${computerScore}`;
  computerOutput.innerText = "";

  playerChoice = "-";
  playerOutput.innerText = `You: 
  ${playerChoice}`;
  
  computerChoice = "-";
  computerOutput.innerText = `Computer: 
  ${computerChoice}`;
  
  roundOutput.innerText = "";
  gameResult.innerText = "";
}

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice = "-";
let computerChoice = "-";
let roundResult = "";

let roundCounter = document.querySelector("#roundCounter");

let playerPoints = document.querySelector("#playerPoints");
playerPoints.innerText = `Points: 
${playerScore}`;

let computerPoints = document.querySelector("#computerPoints");
computerPoints.innerText = `Points: 
${computerScore}`;

let playerOutput = document.querySelector("#playerOutput");
playerOutput.innerText = `You: 
${playerChoice}`;

let computerOutput = document.querySelector("#computerOutput");
computerOutput.innerText = `Computer: 
${computerChoice}`;

let roundOutput = document.querySelector("#roundOutput");
let gameResult = document.querySelector("#gameResult");

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    playerOutput.innerText = `You: 
    ${playerChoice}`;
    roundResult = playRound(button.id, getComputerChoice());
    roundOutput.innerText = roundResult;
    ++roundNumber;
    roundCounter.innerText = `Round ${roundNumber} of 5`;

    if (roundNumber >= 5) {
      if (playerScore === computerScore) {
        gameResult.innerText = "The game ends with a tie.";
        hideButtons();
      } else if (playerScore > computerScore) {
        gameResult.innerText = "Congratulations! You've won the game!";
        hideButtons();
      } else {
        gameResult.innerText = "Sorry, you've lost the game. Better luck next time!";
        hideButtons();
      }
    }
  });
});