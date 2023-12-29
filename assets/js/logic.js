document.getElementById('start').addEventListener('click', function () {
  startTimer(60);
});

let timerInterval;
let timerValue;

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
    }
  }, 10);
}


function updateTimerDisplay() {
  const seconds = (timerValue / 1000).toFixed(2);
  document.getElementById('time').textContent = seconds;
}
