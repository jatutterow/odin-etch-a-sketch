function drawGrid(sideLength){
    const container = document.querySelector('#container');
    removeDivChildren(container);
    //create rows
    for(let i = 0; i < sideLength; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        container.appendChild(newRow);
    }
    //fill the rows with cells
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        for(let i = 0; i < sideLength; i++){
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.addEventListener('mouseenter', fillIn);
            row.appendChild(newCell);
        }
    });
}

function removeDivChildren(div){
    //destroy the children until there are no more
    while(div.firstElementChild != null){
        div.removeChild(div.firstElementChild);
    }
}

function fillIn(e){
    // e.target.classList.add('filled');
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    e.target.style.backgroundColor = randomColor;
}

function resetSketch(){
    const newSize = window.prompt('How many squares on each side? (1 - 100)');
    if((newSize > 0) && (newSize <= 100)){
        drawGrid(newSize);
    }
    else{
        alert('Side Length must be between 100 and 0');
    }
}

drawGrid(16);
document.querySelector('#reset').addEventListener('click', resetSketch);