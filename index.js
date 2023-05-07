function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  switch (computerChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const choices = playerSelection.concat(computerSelection).toLowerCase();
  let isWin = true;
  switch (choices) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return isWin;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return isWin = false;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return isWin = "Draw";
  }
}

function playGame() {
  let round = 5;
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= round; i++) {
    playerSelection = prompt(`Round ${i}\nEnter your play (Rock | Paper | Scissors): `);
    computerSelection = getComputerChoice();
    let isRoundWin = playRound(playerSelection, computerSelection);
    if (isRoundWin === true) {
      playerScore += 1;
      alert(`You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1).toLowerCase()} beats ${computerSelection}\nScore:\nPlayer: ${playerScore} | Computer: ${computerScore}\n`);
    } else if (isRoundWin === false) {
      computerScore += 1;
      alert(`You Lose! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1).toLowerCase()} loses to ${computerSelection}\nScore:\nPlayer: ${playerScore} | Computer: ${computerScore}\n`);
    } else if (isRoundWin === "Draw") {
      alert(`Draw!\nScore:\nPlayer: ${playerScore} | Computer: ${computerScore}\n`);
    }
  } if (playerScore > computerScore) {
    alert("Game Over! You Win!");
  } else if (playerScore < computerScore) {
    alert("Game Over! You Lose. Better luck next time!");
  } else if (playerScore === computerScore) {
    alert("Game Over! It's a Draw!");
  }

}

playGame();