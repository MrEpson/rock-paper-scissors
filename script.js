function getComputerChoice() {
    //  generates random number between 1 and 3 (both included)
    let randNum = Math.floor(Math.random() * 3) + 1; 
    let compChoice = "";
    
    if (randNum === 1) {
      compChoice = "Rock";
    } else if (randNum === 2) {
      compChoice = "Paper";
    } else {
      compChoice = "Scissors";
    }
    return compChoice;
  }
  
  function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = "";
    
    if (player === computer) {
      result = "It's a tie!";
    } else if (player === "rock" && computer === "paper") {
      result = "You Lose! Paper beats Rock";
    } else if (player === "rock" && computer === "scissors") {
      result = "You Win! Rock beats Scissors";
    } else if (player === "paper" && computer === "rock") {
      result = "You Win! Paper beats Rock";
    } else if (player === "paper" && computer === "scissors") {
      result = "You Lose! Scissors beats Paper";
    } else if (player === "scissors" && computer === "rock") {
      result = "You Lose! Rock beats Scissors";
    } else if (player === "scissors" && computer === "paper") {
      result = "You Win! Scissors beats Paper";
    } else {
      result = "Error! Please, enter either Rock, Paper or Scissors";
    }
    
    console.log("You: " + playerSelection);
    console.log("Computer: " + computerSelection);
    return result;
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i < 6; i++) {
      let playerChoice = prompt("Rock, Paper or Scissors?");
      let roundResult = "";
      
      console.log(`Round ${i} of 5`);
      
      roundResult = playRound(playerChoice, getComputerChoice());
      
      if (roundResult === "You Win! Rock beats Scissors" 
         || roundResult === "You Win! Paper beats Rock"
         || roundResult === "You Win! Scissors beats Paper") {
        ++playerScore;
        console.log(roundResult);
         } else if (roundResult === "You Lose! Paper beats Rock"
                   || roundResult === "You Lose! Scissors beats Paper"
                   || roundResult === "You Lose! Rock beats Scissors") {
        ++computerScore;
        console.log(roundResult);
         } else {
        console.log(roundResult);
      }
      
      console.log(`| Total score | You: ${playerScore} | Computer: ${computerScore} |`);
      console.log("--------------------------------------");
      
      if (i === 5) {
        if (playerScore === computerScore) {
          console.log("The game ends with a tie.");
          console.log("--------------------------------------");
        } else if (playerScore > computerScore) {
          console.log("Congratulations! You've won!");
          console.log("--------------------------------------");
        } else {
          console.log("Sorry, you've lost the game. Better luck next time!");
          console.log("--------------------------------------");
        } 
      }
    }
  }
  