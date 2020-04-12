/* Main JS script
*  fill the grid and handles grid effects */

const gridContainer = document.querySelector('#grid-container');

function loadGrid(gridSideLength) {
    let gridTotal = gridSideLength ** 2;
    

    for (let i = 0; i < gridTotal ; i++) {
        let gridElem = document.createElement('div');
        gridElem.classList.add('grid-elem');
        gridContainer.appendChild(gridElem);
    }
}

const ORIGINALGRIDSIDE = 16;
loadGrid(ORIGINALGRIDSIDE)

function changeGridColor(e) {
    e.target.style.cssText = "background-color: black;";
}


let gridElements; 
function createGridElemEvent() {
    gridElements = document.querySelectorAll('.grid-elem');
    gridElements.forEach((elem) => {
        elem.addEventListener('mouseover', (e) => {
            changeGridColor(e)
        })
    })
}

createGridElemEvent()

function deleteChild() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
}

function recalcGrid(gridLength) {
    gridContainer.setAttribute('style',`grid-template-columns: repeat(${gridLength}, 1fr);grid-template-rows: repeat(${gridLength}, 1fr);`)
}

function resetGrid(gridLength) {
    deleteChild();
    recalcGrid(gridLength);
    loadGrid(gridLength);
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener('click', () => {
    let newGridLength = window.prompt("Enter your new grid side length");
    resetGrid(newGridLength)
    createGridElemEvent()
})