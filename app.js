const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');

const startCells = [
    '', '', '', '', '', '', '', '', ''
];

function ceateBoard() {
    startCells.forEach((cell, index) => {
        const cellElenent = document.createElement('div')
        cellElenent.classList.add('square')
    })
}