document.addEventListener('DOMContentLoaded', function () {
  const profileIcon = document.getElementById('profile-link');
  if (profileIcon) {
    profileIcon.addEventListener('click', function (e) {
      e.preventDefault();
      const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
      if (isLoggedIn) {
        window.location.href = 'profile.html';
      } else {
        alert('Please log in to access your profile.');
        window.location.href = 'signin.html';
      }
    });
  }
});
