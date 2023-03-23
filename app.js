const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');

const startCells = [
    '', '', '', '', '', '', '', '', ''
];

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElenent = document.createElement('div')

        cellElenent.classList.add('square')
        gameBoard.append(cellElenent)
    })

}

createBoard();