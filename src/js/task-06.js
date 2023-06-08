const input = document.querySelector('#validation-input');
const inputLength = Number(input.dataset.length);
const handleInputChange = () => {
  const isValid = input.value.length === inputLength;
  if (isValid) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
};
input.addEventListener('blur', handleInputChange);