const LoginForm = document.getElementById('loginForm');

LoginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Handle successful login
      console.log('Login successful');
    } else {
      // Handle login error
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
});
