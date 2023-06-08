const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const updateNameOutput = () => {
  nameOutput.textContent = input.value.trim() || 'Anonymous';
};
input.addEventListener('input', updateNameOutput);