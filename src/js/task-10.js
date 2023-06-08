function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const boxesContainer = document.querySelector('#boxes');
  const boxesFragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = `rgb(${Math.random() * 256}, ${
      Math.random() * 256
    }, ${Math.random() * 256})`;
    boxesFragment.appendChild(box);
  }
  boxesContainer.appendChild(boxesFragment);
};
const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
let boxAmount = 0;
const onCreateBtnClick = () => {
  boxAmount = Number(inputEl.value);
  createBoxes(boxAmount);
};
const onDestroyBtnClick = () => {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
  boxAmount = 0;
};
createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);