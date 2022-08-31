const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    let newPixel = document.createElement('div');
    grid.appendChild(newPixel);
}
setPixels();

const resizeBtn = document.querySelector('.resizeBtn');
resizeBtn.addEventListener('click', resizeGrid);





function createGrid() {
    for (let i = 0; i < 16; i++) {
        let newPixel = document.createElement('div');
        grid.appendChild(newPixel);
    }
}
function resizeGrid() {
    let size = parseInt(window.prompt("Which size do you want the grid to be ? Please enter a number between 1 and 100."));
    if(Number.isNaN(size) || size > 100) {
        alert("You must type a valid number.")
        return;
    }
    
    deleteGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < (size * size); i++) {
        let newPixel = document.createElement('div');
        grid.appendChild(newPixel);
    }
    
   setPixels();
}
function deleteGrid() {
    grid.innerHTML = '';
}
function setPixels () {
    pixels = document.querySelectorAll('.grid div');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colorPixel));

}
function colorPixel(e) {
    e.target.style.backgroundColor = 'black';
}