
const container = document.querySelector(".container");

const ROWS = 16;
const COLS = 16;

const rainbowColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
];
// const randomIndex = Math.floor(Math.random() * rainbowColors.length);
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}

container.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
container.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;

for (let i = 0; i < ROWS * COLS; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    });
    container.appendChild(square);
}