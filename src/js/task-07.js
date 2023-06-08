const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const handleInputChange = () => {
  const size = inputRange.value;
  text.style.fontSize = `${size}px`;
};
inputRange.addEventListener('input', handleInputChange);