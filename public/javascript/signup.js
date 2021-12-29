const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { '-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);