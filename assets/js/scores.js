document.addEventListener('DOMContentLoaded', function () {
  displayHighScores();

  const clearScoresButton = document.getElementById('clear');
  clearScoresButton.addEventListener('click', clearHighScores);
});

function displayHighScores() {
  const highscoresList = document.getElementById('highscores');
  highscoresList.innerHTML = '';

  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

  highscores.sort((a, b) => b.score - a.score);

  if (highscores.length > 0) {
    highscores.forEach((score, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.initials} - ${score.score}`;
      highscoresList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'No high scores yet!';
    highscoresList.appendChild(listItem);
  }
}

function clearHighScores() {
  localStorage.removeItem('highscores');

  displayHighScores();
}
