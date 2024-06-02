document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    const saveUsers = () => localStorage.setItem('users', JSON.stringify(users));
    const saveAdmins = () => localStorage.setItem('admins', JSON.stringify(admins));

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            users.push({ username, password });
            saveUsers();
            alert('User registered successfully');
            window.location.href = 'login.html';
        });
    }
});
