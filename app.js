const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');

const startCells = [
    '', '', '', '', '', '', '', '', ''
];

let go = 'circle';
infoDisplay.textContent = 'Нулик йде першим';


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
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === 'circle' ? 'cross': 'circle';
    infoDisplay.textContent = `хід ${go === 'cross' ? 'хрестика' : 'нулика'}`;
    e.target.removeEventListener('click', addGo)
    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll('.square');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    console.log(allSquares[0])

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
    })
}