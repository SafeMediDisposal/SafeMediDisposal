document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signin-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('e-mail').value.trim();
    const passwordFields = form.querySelectorAll('input[type="password"]');
    const password = passwordFields[0].value;
    const confirmPassword = passwordFields[1].value;

    //  Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    //  Save to localStorage
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password); // Note: not safe for real apps!
    localStorage.setItem('userLoggedIn', 'true');

    //  Redirect to profile
    window.location.href = 'profile.html';
  });
});
// This script handles the sign-in form submission, validates input, saves user data to localStorage, and redirects to the profile page.
// It ensures that all fields are filled, passwords match, and provides a basic user experience for signing in.
// Note: Storing passwords in localStorage is not secure and should not be used in production applications.
// Always use secure methods for handling user authentication and sensitive data.
