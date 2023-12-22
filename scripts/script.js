let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.getElementById("js-resetScoreText").innerHTML = 'Score was reset';
    // console.log(score);
    updateScoreElement();

};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  
  if (playerMove === 'scissors') {
    document.getElementById("js-resetScoreText").innerHTML = '';
    if (computerMove === 'scissors') {
      result = 'Tie';
    } else if (computerMove === 'rock') {
      result = 'You loose.';
    } else if (computerMove == 'paper') {
      result = 'You win!';
    }
  } else if (playerMove === 'rock') {
    document.getElementById("js-resetScoreText").innerHTML = '';
    if (computerMove === 'scissors') {
      result = 'You win!';
    } else if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove == 'paper') {
      result = 'You loose.';
    }
  } else if (playerMove === 'paper') {
    document.getElementById("js-resetScoreText").innerHTML = '';
    if (computerMove === 'scissors') {
      result = 'You loose.';
    } else if (computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove == 'paper') {
      result = 'Tie';
    }
  }

  if (result === 'You win!') {
      score.wins++;
  } else if (result === 'You loose.') {
      score.losses++;
  } else if (result === 'Tie') {
      score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  console.log(score);

  document.querySelector('.js-showMoves').innerHTML = `${result}`;
  //`You picked -${playerMove}. Computer picked -${computerMove}. ${result}`;

  // document.querySelector('.js-movesPerGame').innerHTML = `You  ${playerMove} - ${computerMove}  Computer`;
  document.querySelector('.js-movesPerGame').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;

  updateScoreElement();
}

function updateScoreElement () {
  document.querySelector('.js-showResult').innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = '';
  
  const randNumber = Math.random();

  if (randNumber >= 0 && randNumber < 1 / 3) {
  computerMove = 'scissors';
  } else if (randNumber >= 1 / 3 && randNumber < 2 / 3) {
    computerMove = 'rock';
  }  else if (randNumber >= 2 / 3 && randNumber < 1) {
    computerMove = 'paper';
  }

  return computerMove;
}
