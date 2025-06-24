document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signin-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('e-mail').value;
    const passwordFields = form.querySelectorAll('input[type="password"]');
    const password = passwordFields[0].value;
    const confirmPassword = passwordFields[1].value;

    // Basic password match check
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Store data in localStorage
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userLoggedIn', 'true');

    // Redirect
    window.location.href = 'profile.html';
  });
});
