// script.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Clear previous messages
        messageDiv.textContent = '';

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple client-side validation
        if (username.trim() === '' || password.trim() === '') {
            messageDiv.textContent = 'Both fields are required.';
            return;
        }

        // Redirect to success.html for demo purposes
        window.location.href = 'success.html';
    });
});
