const form = document.querySelector('.login-form');
const handleSubmit = event => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (!email.value || !password.value) {
    alert('All fields must be filled!');
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
};
form.addEventListener('submit', handleSubmit);
