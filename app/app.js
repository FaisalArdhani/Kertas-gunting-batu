const choices = ['gunting', 'kertas', 'batu'];
let playerScore = 0;
let computerScore = 0;

// Random number generator
const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Pemenang dalam game perkondisian dan operator logika
const determineWinner = (player, computer) => {
    if (player === computer) {
        return 'Seri Bre';
    } else if (
        (player === 'batu' && computer === 'gunting') ||
        (player === 'kertas' && computer === 'batu') ||
        (player === 'gunting' && computer === 'kertas')
    ) {
        return 'Lu menang Bre';
    } else {
        return 'Yah Bot Menang';
    }
};

// hasil dalam game
const updateResult = (result) => {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = 'Hasil: ' + result;
};

// Menambah score / mengubah score dengan cara mengubah file html dengan textContent
const updateScores = () => {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
};

// hasil dalam melawan komputer atau player menggunakan perkondiasian
const playGame = (playerChoice) => {
    const computerChoiceValue = computerChoice();
    const result = determineWinner(playerChoice, computerChoiceValue);

    if (result === 'Lu menang Bre') {
        playerScore++;
    } else if (result === 'Yah Bot Menang') {
        computerScore++;
    }

    updateResult(result);
    updateScores();
};

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    updateResult('');
};

// Manipulasi DOM elements
document.getElementById('gunting').addEventListener('click', () => {
    playGame('gunting');
});

document.getElementById('kertas').addEventListener('click', () => {
    playGame('kertas');
});

document.getElementById('batu').addEventListener('click', () => {
    playGame('batu');
});

document.getElementById('reset').addEventListener('click', () => {
    resetGame();
});
