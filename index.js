function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const choices = playerSelection.concat(computerSelection);
  console.log(`Computer: ${computerSelection}\nPlayer: ${playerSelection}`);
  let isWin = "You Win!";
  switch (choices) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      break;
    // return console.log("Win!");
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      isWin = "You Lose!";
      break;
    // return console.log("Lose!");
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      isWin = "Draw";
      break;
    // return console.log("Draw!");
  }
  results(isWin, playerSelection, computerSelection);
}

function getPlayerChoice(e) {
  const playerChoice = e.srcElement.id;
  playRound(playerChoice, getComputerChoice());
}

function disableButton(btn) {
  return btn.disabled = true;
}

function enableButton(btn) {
  return btn.disabled = false;
}

function results(result, playerSelection, computerSelection) {
  const results = document.querySelector(".results");
  const para = document.createElement("p");
  const btn = document.createElement("button");
  const btnChoices = document.querySelectorAll(".btn-choice");
  btn.textContent = "Play Again";
  para.textContent = `You: ${playerSelection} | Computer: ${computerSelection} | ${result}`;
  results.appendChild(para);
  results.appendChild(btn);
  btnChoices.forEach(btn => disableButton(btn));
  btn.addEventListener('click', function (e) {
    results.removeChild(para);
    results.removeChild(btn);
    btnChoices.forEach(btn => enableButton(btn));
  })
}

function main() {
  const buttons = document.querySelectorAll(".btn-choice");
  buttons.forEach(button => button.addEventListener('click', getPlayerChoice));
}

main();


/*function playGame() {
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
playGame();*/