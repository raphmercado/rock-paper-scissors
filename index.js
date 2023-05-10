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
  let result;
  let win = "win";
  let lose = "lose";
  let draw = "draw";
  switch (choices) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      result = win;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      result = lose;
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      result = draw;
      break;
  }
  return result;
}

function disableButton(btn) {
  return btn.disabled = true;
}

function enableButton(btn) {
  return btn.disabled = false;
}

function computeResult(result) {
  switch (result) {
    case "win":
      playerPoints += 1;
      break;
    case "lose":
      computerPoints += 1;
      break;
    case "draw":
      break;
  }
  displayResult()
}

function displayResult() {
  const results = document.querySelector(".results");
  const playerTotalPoints = document.querySelector(".points-player");
  const computerTotalPoints = document.querySelector(".points-computer");
  const btn = document.createElement("button");
  const btnChoices = document.querySelectorAll(".btn-choice");
  playerTotalPoints.textContent = `Player: ${playerPoints}`;
  computerTotalPoints.textContent = `Computer: ${computerPoints}`;
  if (playerPoints < 5 && computerPoints < 5) {
    btn.textContent = "Next Round";
    results.appendChild(btn);
    btnChoices.forEach(btn => disableButton(btn));
    btn.addEventListener('click', function () {
      results.removeChild(btn);
      btnChoices.forEach(btn => enableButton(btn));
    });
  } else if (playerPoints === 5 || computerPoints === 5) {
    const winner = document.createElement("p");
    btnChoices.forEach(btn => disableButton(btn));
    if (playerPoints > computerPoints) {
      winner.textContent = "Player Wins!";
    } else if (playerPoints < computerPoints) {
      winner.textContent = "Computer wins!";
    }
    btn.textContent = "Play Again";
    results.appendChild(winner);
    results.appendChild(btn);
    btn.addEventListener('click', function () {
      playerPoints = 0;
      computerPoints = 0;
      playerTotalPoints.textContent = `Player: ${playerPoints}`;
      computerTotalPoints.textContent = `Computer: ${computerPoints}`;
      results.removeChild(winner);
      results.removeChild(btn);
      btnChoices.forEach(btn => enableButton(btn));
    });
  }
}

function main() {
  const buttons = document.querySelectorAll(".btn-choice");
  buttons.forEach(button => button.addEventListener('click', function (e) {
    const playerChoice = e.target.id;
    roundResult = playRound(playerChoice, getComputerChoice());
    computeResult(roundResult);
  }));
}

let playerPoints = 0;
let computerPoints = 0;
main();