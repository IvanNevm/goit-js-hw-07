const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const { email, password } = form.elements;
  const emailTrimmed = email.value.trim(); 
  const passwordTrimmed = password.value.trim(); 
  if (!emailTrimmed || !passwordTrimmed) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: emailTrimmed,
    password: passwordTrimmed,
  };

  console.log(formData); 
  form.reset(); 
});
