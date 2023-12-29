document.getElementById('start').addEventListener('click', function () {
  startTimer(60);
});

let timerInterval;
let timerValue;

const correctSound = new Audio('./assets/sfx/correct.wav');
const incorrectSound = new Audio('./assets/sfx/incorrect.wav');

function startTimer(initialSeconds) {
  timerValue = initialSeconds * 1000;
  updateTimerDisplay();

  timerInterval = setInterval(function () {
    timerValue -= 10;
    updateTimerDisplay();

    if (timerValue <= 0) {
      clearInterval(timerInterval);
      alert("You've run out of time!");
      showEndScreen();
    }

    if (currentQuestionIndex === questionsData.length) {
      clearInterval(timerInterval);
      showEndScreen();
    }
  }, 10);
}

function updateTimerDisplay() {
  const seconds = (timerValue / 1000).toFixed(2);
  document.getElementById('time').textContent = seconds;
}

function saveHighScore() {
  const initialsInput = document.getElementById('initials');
  const initials = initialsInput.value.trim();

  if (initials !== '') {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    const newScore = {
      initials: initials,
      score: userScore
    };

    highscores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = 'highscores.html';
  } else {
    alert('Please enter your initials.');
  }
}

function playCorrectSound() {
  correctSound.play();
}

function playIncorrectSound() {
  incorrectSound.play();
}

function showEndScreen() {
  document.getElementById('questions').classList.add('hide');
  document.getElementById('end-screen').classList.remove('hide');
  document.getElementById('final-score').textContent = userScore;

  document.getElementById('submit').addEventListener('click', saveHighScore);
}
