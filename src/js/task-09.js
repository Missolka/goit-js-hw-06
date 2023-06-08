function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBodyBackgroundColor = (buttonEl, colorEl) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  const setBackgroundAndSetColor = () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorEl.textContent = color;
  };
  buttonEl.addEventListener('click', setBackgroundAndSetColor);
};
const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
changeBodyBackgroundColor(buttonEl, colorEl);