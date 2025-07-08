document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredEmail = document.getElementById('e-mail').value.trim();
    const enteredPassword = form.querySelector('input[type="password"]').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      localStorage.setItem('userLoggedIn', 'true');
      window.location.href = 'profile.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
});
