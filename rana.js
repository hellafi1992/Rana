const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = '😍';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === '😍' ? '😭' : '😍';
    }
  });
});

resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = '😍';
});
