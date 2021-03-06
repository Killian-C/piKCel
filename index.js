function createPixel(paletteSlot, id, color, size) 
{
    const pixel = document.createElement('div');
    pixel.classList.add('pix-col', 'waves-effect', 'waves-light');
    pixel.innerHTML = `${id}`;
    pixel.style.backgroundColor = `${color}`;
    pixel.style.width = `${size}` + 'px';
    pixel.style.height = `${size}` + 'px';
    paletteSlot.appendChild(pixel);
}

function createRow(canvasSolt, canvasSize) {
    const row = document.createElement('div');
    row.classList.add('pix-row');
    for (let i = 1; i <= canvasSize; i++) {
        createPixel(row, '', 'white', 400 / canvasSize);
    }
    canvasSolt.appendChild(row);
}

const paletteColors = [
    {
        id: 1,
        color: 'red'
    },
    {
        id: 2,
        color: 'blue'
    },
    {
        id: 3,
        color: 'green'
    },
    {
        id: 4,
        color: 'yellow'
    },
    {
        id: 5,
        color: 'black'
    },

]

const paletteRows = document.getElementsByClassName('pix-row');
for (paletteRow of paletteRows) {
    for (paletteColor of paletteColors) {
        createPixel(paletteRow, paletteColor.id, paletteColor.color);
    }
}

const canvas = document.getElementById('canvas');
const canvasSize = 16;

for (let i = 1; i <= canvasSize; i++) {
    createRow(canvas, canvasSize);
}






