/* Main JS script
*  fill the grid and handles grid effects */

let gridTotal = 16 * 16;

const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < gridTotal ; i++) {
    let gridElem = document.createElement('div');
    gridElem.classList.add('grid-elem');
    gridContainer.appendChild(gridElem);
}

function changeGridColor(e) {
    e.target.style.cssText = "background-color: black;";
}


const gridElements = document.querySelectorAll('.grid-elem');

gridElements.forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        changeGridColor(e)
    })
})