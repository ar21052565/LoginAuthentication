document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', handleLogin);
});

function handleLogin(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Replace the following lines with backend validation and authentication logic
    // This is just a basic example and is not secure!
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}
