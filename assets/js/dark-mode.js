function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const darkModeEnabled = body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', darkModeEnabled);
}

document.addEventListener('DOMContentLoaded', function () {
  const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
  }

  const darkModeButton = document.getElementById('dark-mode-toggle');
  if (body.classList.contains('dark-mode')) {
    darkModeButton.innerText = 'Light Mode';
  } else {
    darkModeButton.innerText = 'Dark Mode';
  }
})
