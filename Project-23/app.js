document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const scoreElement = document.getElementById("score");
  const scoreValueElement = document.getElementById("score-value");

  let currentQuestionIndex = 0;
  let score = 0;

  startButton.addEventListener("click", startQuiz);

  function startQuiz() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreElement.classList.remove("hide");
    score = 0;
    currentQuestionIndex = 0;
    setNextQuestion();
  }

  function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-button");
      button.addEventListener("click", () => selectAnswer(answer));
      answerButtons.appendChild(button);
    });
  }

  function resetState() {
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
      score++;
      scoreValueElement.textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setNextQuestion();
    } else {
      questionContainer.innerHTML = `<h2>Your score: ${score}</h2>`;
    }
  }

  const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for the element gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Gd", correct: false },
        { text: "Go", correct: false },
      ],
    },
  ];
});
