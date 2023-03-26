const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');

const startCells = [
    '', '', '', '', '', '', '', '', ''
];

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElenent = document.createElement('div')

        cellElenent.classList.add('square')
        cellElenent.id = index;
        cellElenent.addEventListener('click', addGo);
        gameBoard.append(cellElenent)
    })

}

createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add('circle');
    e.target.append(goDisplay);
}