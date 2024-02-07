let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
updateScoreElement();

function playerMove(move){
    const compMove = computerMove();

    let result = '';

    if(move === 'rock'){
        if(compMove === 'rock'){
            result = "Tie!";
        } else if(compMove === 'paper'){
            result = "You Lose!";
        } else {
            result = "You Win!";
        }
    }

    if(move === 'paper'){
        if(compMove === 'rock'){
            result = "You Win!";
        } else if(compMove === 'paper'){
            result = "Tie!";
        } else {
            result = "You Lose!";
        }
    }

    if(move === 'scissors'){
        if(compMove === 'rock'){
            result = "You Lose!";
        } else if(compMove === 'paper'){
            result = "You Win!";
        } else {
            result = "Tie!";
        }
    }

    if (result === 'You Win!') {
        score.wins += 1;
    } else if (result === 'You Lose!') {
        score.losses += 1;
    } else if (result === 'Tie!') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You  
    <img src="images/${move}-emoji.png" class="move-icon">
    <img src="images/${compMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

function computerMove() {
    const randomNumber = Math.random();
    let move = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        move = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        move = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber < 1){
        move = 'scissors';
    }
    return move;
}