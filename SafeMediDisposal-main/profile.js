// Redirect if not logged in
if (localStorage.getItem('userLoggedIn') !== 'true') {
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', function () {
  const userFirstName = localStorage.getItem('userFirstName') || 'User';
  const userLastName = localStorage.getItem('userLastName') || '';
  const userEmail = localStorage.getItem('userEmail') || 'user@email.com';

  // Set profile content
  document.getElementById('helloName').textContent = `Hello, ${userFirstName}!`;
  document.getElementById('profileName').textContent = `${userFirstName} ${userLastName}`.trim();
  document.getElementById('profileEmail').textContent = userEmail;

  // Prefill editable fields
  document.getElementById('editFirstName').value = userFirstName;
  document.getElementById('editLastName').value = userLastName;
  document.getElementById('editEmail').value = userEmail;
});

function saveChanges() {
  const firstName = document.getElementById('editFirstName').value.trim();
  const lastName = document.getElementById('editLastName').value.trim();
  const email = document.getElementById('editEmail').value.trim();

  if (!firstName || !email) {
    alert('First name and email are required.');
    return;
  }

  localStorage.setItem('userFirstName', firstName);
  localStorage.setItem('userLastName', lastName);
  localStorage.setItem('userEmail', email);

  alert('Profile updated successfully!');
  location.reload();
}

function logOut() {
  localStorage.removeItem('userFirstName');
  localStorage.removeItem('userLastName');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userPassword');
  localStorage.setItem('userLoggedIn', 'false');
  window.location.href = 'login.html';
}
