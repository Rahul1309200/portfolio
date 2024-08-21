form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log('Form submitted:', { name, email, message });

  form.reset();
});