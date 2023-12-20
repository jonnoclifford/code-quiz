function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const darkModeButton = document.getElementById('dark-mode-toggle');
  if (body.classList.contains('dark-mode')) {
    darkModeButton.innerText = 'Light Mode';
  } else {
    darkModeButton.innerText = 'Dark Mode';
  }
}
