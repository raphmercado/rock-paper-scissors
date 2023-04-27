function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
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
  switch (choices) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return `You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return `You Lose! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1).toLowerCase()} loses to ${computerSelection}`;
    default:
      return "Draw!";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));