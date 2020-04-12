const GRIDTOTAL = 16 * 16;

let gridContainer = document.querySelector('#grid-container');
let gridElem = document.createElement('div');

for (let i = 0; i < GRIDTOTAL ; i++) {
    let gridElem = document.createElement('div');
    gridElem.classList.add('grid-elem')
    gridContainer.appendChild(gridElem);
}