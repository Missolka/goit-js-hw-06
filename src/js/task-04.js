const counter = document.querySelector('#counter');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const valueEl = counter.querySelector('#value');
let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);