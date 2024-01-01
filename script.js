function generateDivPixel(size, divContainer) {
  for (let secondIndex = 0; secondIndex < size; secondIndex += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divContainer.appendChild(divPixel);
  }
}

function generateBoard(size) {
  const main = document.getElementById('main');
  const section = document.createElement('section');

  section.id = 'pixel-board';
  main.appendChild(section);

  for (let index = 0; index < size; index += 1) {
    const divContainerPixels = document.createElement('div');
    divContainerPixels.className = 'pixels';
    section.appendChild(divContainerPixels);
    generateDivPixel(size, divContainerPixels);
  }
}

function removeBoard() {
  const section = document.getElementById('pixel-board');
  section.remove();
}

const bgBlack = document.querySelector('.bg-black');
bgBlack.classList.add('selected');

function addClassSelected(item) {
  item.classList.add('selected');
}

function removeClassSelected(collection) {
  for (let index = 0; index < collection.length; index += 1) {
    collection[index].classList.remove('selected');
  }
}

function toggleClassSelected() {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (event) => {
      removeClassSelected(colorPalette);
      addClassSelected(event.target);
    });
  }
}

function paintWithSelectedColor(target) {
  const element = target;
  const selectedDiv = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedDiv, null);
  const colorSelected = cssObj.getPropertyValue('background-color');

  element.style.backgroundColor = `${colorSelected}`;
}

const pixels = document.getElementsByClassName('pixel');

function fillPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      paintWithSelectedColor(event.target);
    });
  }
}

generateBoard(5);
toggleClassSelected();
fillPixel();

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const btnClearBoard = document.getElementById('clear-board');
btnClearBoard.addEventListener('click', clearBoard);

function generateNewBoard() {
  const input = document.getElementById('board-size');
  if (input.value === '') {
    alert('Board inválido!');
    return;
  }

  let newSize = input.value;

  if (newSize < 5) {
    newSize = 5;
  } else if (newSize > 50) {
    newSize = 50;
  }

  removeBoard();
  generateBoard(newSize);
  toggleClassSelected();
  fillPixel();
}

const btnGenerateBoard = document.getElementById('generate-board');
btnGenerateBoard.addEventListener('click', generateNewBoard);

function generateColor() {
  const color = document.getElementsByClassName('color');

  for (let index = 1; index < color.length; index += 1) {
    color[0].style.backgroundColor = 'black';

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    color[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

generateColor();
