let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');
function cellClicked(cellIndex) {
  if (!gameActive || gameState[cellIndex] !== '') return;
  gameState[cellIndex] = currentPlayer;
  cells[cellIndex].textContent = currentPlayer;
  cells[cellIndex].classList.add(currentPlayer);
  if (checkWin()) {
    message.textContent = ${currentPlayer} wins!;
    gameActive = false;
    return;
  }
  if (checkDraw()) {
    message.textContent = It's a draw!;
    gameActive = false;
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  message.textContent = It's ${currentPlayer}'s turn;
}

function checkWin() {
  for (let condition of winningConditions) {
    let a = gameState[condition[0]];
    let b = gameState[condition[1]];
    let c = gameState[condition[2]];
    if (a !== '' && a === b && b === c) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameState.every(cell => cell !== '');
}

function restart() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  message.textContent = It's ${currentPlayer}'s turn;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
}