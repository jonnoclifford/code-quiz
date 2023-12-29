const questionsData = [
  {
    question: "What is the airspeed velocity of an unladen swallow?",
    choices: ["African or European?", "24 mph", "12 km/h", "I don't know that!"],
    correctAnswer: "African or European?"
  },
  {
    question: "What is the Holy Hand Grenade of Antioch counting to before being thrown?",
    choices: ["1", "2", "3", "5"],
    correctAnswer: "3"
  },
  {
    question: "What is the favorite color of the Knights Who Say 'Ni'?",
    choices: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Blue"
  },
  {
    question: "What is the main ingredient in the dish 'Spam, spam, spam, spam, spam'?",
    choices: ["Bacon", "Eggs", "Lobster", "Spam"],
    correctAnswer: "Spam"
  },
  {
    question: "What is the name of the killer rabbit in Monty Python and the Holy Grail?",
    choices: ["Fluffy", "Thumper", "Sir Hops-a-Lot", "The Vorpal Bunny"],
    correctAnswer: "The Vorpal Bunny"
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
