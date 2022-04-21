const bgBlack = document.querySelector('.bg-black');
bgBlack.classList.add('selected');

const colorPalette = document.getElementsByClassName('color');

function addClassSelected(item) {
  item.classList.add('selected');
}

function removeClassSelected(collection) {
  for (let index = 0; index < collection.length; index += 1) {
    collection[index].classList.remove('selected');
  }
}

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', (event) => {
    removeClassSelected(colorPalette);
    addClassSelected(event.target);
  });
}

function fillPixel(item) {
  const element = item;
  const selectedDiv = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedDiv, null);
  const colorSelected = cssObj.getPropertyValue('background-color');

  element.style.backgroundColor = `${colorSelected}`;
}

const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', (event) => {
    fillPixel(event.target);
  });
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const btnClearBoard = document.getElementById('clear-board');
btnClearBoard.addEventListener('click', clearBoard);
