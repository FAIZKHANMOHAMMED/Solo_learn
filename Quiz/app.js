let quizData = [];
let selectedQuestions = [];
let userAnswers = {};

fetch('quiz_bank.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    quizData = data.questions;
    selectedQuestions = getRandomQuestions(quizData, 10);
    renderQuiz(selectedQuestions);
  })
  .catch(error => {
    console.error('Error fetching quiz data:', error);
  });

function getRandomQuestions(questions, count) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderQuiz(questions) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questions.forEach(question => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
      <p>${question.question}</p>
      <ul class="options">
        ${question.options.map((option, index) => `
          <li>
            <label>
              <input type="radio" name="question-${question.id}" value="${String.fromCharCode(97 + index)}">
              ${option}
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    container.appendChild(questionDiv);
  });
}


function submitQuiz() {
  const resultContainer = document.getElementById('result');
  let score = 0;
  selectedQuestions.forEach(question => {
    const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
    if (selectedOption) {
      userAnswers[question.id] = selectedOption.value;
      if (selectedOption.value === question.answer) {
        score++;
      }
    }
  });
  resultContainer.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!`;
}
function renderQuiz(questions) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${question.question}</p>
      <ul class="options">
        ${question.options.map((option, optionIndex) => `
          <li>
            <label>
              <input type="radio" name="question-${question.id}" value="${String.fromCharCode(97 + optionIndex)}">
              ${option}
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    container.appendChild(questionDiv);
  });
}
