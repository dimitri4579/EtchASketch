const container = document.querySelector(".container");

const WIDTH = 600;
const HEIGHT = 600;

const rainbowColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
];
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}

function createNewGrid(size) {
    const width = WIDTH / size;
    const height = HEIGHT / size;
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.setAttribute("style", `width: ${width}px; height: ${height}px`);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
}

createNewGrid(16);

const size = document.getElementById("size");

size.addEventListener("click", () => {
    const newSize = prompt("What size do you want the board? (size must be within the range 1 - 100)", "16");
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.remove();
    });
    createNewGrid(parseInt(newSize));
})

const reset = document.getElementById('reset')

reset.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
        
    })
})