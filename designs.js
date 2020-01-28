/**
 * Define variables for function definitions
 */
const pixelCanvas = document.querySelector('#pixelCanvas');
const colorPicker = document.querySelector('#colorPicker');
const cell = document.getElementsByClassName('cell');

/**
 * Cancel the submit action
 * Store input values from height and width in variables
 * Call function to create a table according to the input values
 * Call function to color table cells
 */
document.querySelector('#sizePicker').onsubmit = function() {
    event.preventDefault();
    const inputHeight = document.querySelector('#inputHeight').value;
    const inputWidth = document.querySelector('#inputWidth').value;
    makeGrid(inputHeight, inputWidth);
    makeArt();
};

/**
 * Create variable
 * Add HTML content for table rows to variable
 * Add HTML content table data to variable
 * Set HTML content inside pixelCanvas
 */
function makeGrid(inputHeight, inputWidth) {
    let canvas = '';
    for (let i = 0; i < inputHeight; i++) {
        canvas += '<tr class="row' + i + '">';
        for (let j = 0; j < inputWidth; j++) {
            canvas += '<td class="cell"></td>';
        }
        canvas += '</tr>';
    }
    pixelCanvas.innerHTML = canvas;
}

/**
 * Change background of selected cells to value from color picker
 */
function makeArt() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', function(event) {
            event.target.style.backgroundColor = colorPicker.value;
        });
    }
}