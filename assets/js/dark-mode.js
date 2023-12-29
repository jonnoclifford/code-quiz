function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  body.style.transition = 'none';

  const isDarkMode = body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  updateElementsInDarkMode(isDarkMode);

  setTimeout(() => {
    body.style.transition = '';
  }, 2000);

  darkModeToggle.checked = isDarkMode;
}

function updateElementsInDarkMode(isDarkMode) {
  const links = document.querySelectorAll('a');
  const buttons = document.querySelectorAll('button');

  links.forEach(link => {
    link.style.color = isDarkMode ? '#a0a0a0' : '#563d7c';
  });

  buttons.forEach(button => {
    button.style.backgroundColor = isDarkMode ? '#563d7c !important' : '#36247c !important';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  darkModeToggle.checked = savedDarkMode;

  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    updateElementsInDarkMode(true);
  }
});
