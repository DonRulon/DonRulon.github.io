'use strict';
const btnKam = document.querySelector('.kam'),
      btnNoj = document.querySelector('.noj'),
      btnBoom = document.querySelector('.boom'),
      btnReset = document.querySelector('.reset'),
      scoreEl = document.querySelector('.score');





btnKam.addEventListener('click', () => {
    playGame('камень');
});

btnNoj.addEventListener('click', () => {
    playGame('ножницы');
});

btnBoom.addEventListener('click', () => {
    playGame('бумага');
    
});

btnReset.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    showResult();
})




let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};  

function getComputerMove() {
    let randomNum = Math.random();
    let computerMove = ''
    if (randomNum >= 0 && randomNum < 1 / 3) {
        computerMove = 'камень';
    } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
        computerMove = 'ножницы';
    } else if (randomNum > 2 / 3 && randomNum < 1) {
        computerMove = 'бумага';
    }
    return computerMove;
}

function playGame(playerMove) {
    let computerMove = getComputerMove();
    let result = ''
    if (playerMove === 'камень') {
        if (computerMove === 'камень') {
            result = 'Ничья';
        } else if (computerMove === 'ножницы') {
            result = 'Вы выиграли';
        } else if (computerMove === 'бумага') {
            result = 'Вы проиграли';
        }
    }
    if (playerMove === 'ножницы') {
        if (computerMove === 'ножницы') {
            result = 'Ничья';
        } else if (computerMove === 'бумага') {
            result = 'Вы выиграли';
        } else if (computerMove === 'камень') {
            result = 'Вы проиграли';
        }
    }
    if (playerMove === 'бумага') {
        if (computerMove === 'бумага') {
            result = 'Ничья';
        } else if (computerMove === 'камень') {
            result = 'Вы выиграли';
        } else if (computerMove === 'ножницы') {
            result = 'Вы проиграли';
        }
    }

    if (result === 'Ничья') {
        score.ties += 1;
    } else if (result === 'Вы выиграли') {
        score.wins += 1;
    } else if (result === 'Вы проиграли') {
        score.losses += 1;
    }
    showResult();
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.moves').innerHTML = `Вы <img src="${playerMove}.png" class="move-icon">  <img src="${computerMove}.png" class="move-icon"> Компьютер`;
    localStorage.setItem('score', JSON.stringify(score));

}

showResult();
function showResult() {
    scoreEl.innerHTML = `побед: ${score.wins}, поражений: ${score.losses}, ничья: ${score.ties}`;
}
