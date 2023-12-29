const questionsData = [
  {
    question: "What is the airspeed velocity of an unladen swallow?",
    choices: ["1. African or European?", "2. 24 mph", "3. 12 km/h", "4. I don't know that!"],
    correctAnswer: "1. African or European?"
  },
  {
    question: "What is the Holy Hand Grenade of Antioch counting to before being thrown?",
    choices: ["1. 1", "2. 2", "3. 3", "4. 4"],
    correctAnswer: "3. 3"
  },
  {
    question: "What is the favorite color of the Knights Who Say 'Ni'?",
    choices: ["1. Red", "2. Blue", "3. Green", "4. Yellow"],
    correctAnswer: "2. Blue"
  },
  {
    question: "What is the main ingredient in the dish 'Spam, spam, spam, spam, spam'?",
    choices: ["1. Bacon", "2. Eggs", "3. Lobster", "4. Spam"],
    correctAnswer: "4. Spam"
  },
  {
    question: "What is the name of the killer rabbit in Monty Python and the Holy Grail?",
    choices: ["1. Fluffy", "2. The Messiah", "3. Sir Hops-a-Lot", "4. The Vorpal Bunny"],
    correctAnswer: "4. The Vorpal Bunny"
  }
];

let currentQuestionIndex = 0;
let userScore = 0;

function startQuiz() {
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('questions').classList.remove('hide');

  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questionsData[currentQuestionIndex];
  document.getElementById('question-title').textContent = currentQuestion.question;

  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';

  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', function () {
      if (choice === currentQuestion.correctAnswer) {
        userScore++;
        playCorrectSound();
      } else {
        timerValue -= 10000;
        updateTimerDisplay();
        playIncorrectSound();
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questionsData.length) {
        displayQuestion();
      } else {
        showEndScreen();
      }
    });

    choicesContainer.appendChild(choiceButton);
  });
}

function showEndScreen() {
  document.getElementById('questions').classList.add('hide');
  document.getElementById('end-screen').classList.remove('hide');
  document.getElementById('final-score').textContent = userScore;
}

document.getElementById('start').addEventListener('click', startQuiz);
