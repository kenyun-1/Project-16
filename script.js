let questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink Markup Language",
      "Hyper Text Markdown Language"
    ],
    correct: 0
  },

  {
     question: "What does CSS stand for?",
       answers:[
        "Creative Style System",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
       ],
       correct: 1
}, 
  {
  question: "What does JS stand for?",
    answers:[
      "JavaScript",
      "JustScript",
      "JavaSource",
      "JavaSoul"
    ],
    correct: 0
  },
  {
  question: "Which language makes websites interactive?",
    answers:[
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
  correct: 2
  },
  {
  question: "What language is used to style web pages?",
     answers:[
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
     ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function showQuestion(){
  let questionData = questions[currentQuestion];
  document.getElementById("question-number").textContent ="Question " + (currentQuestion + 1) + "/" + questions.length;
  document.getElementById("question-text").textContent = questionData.question;
let answerButtons= document.querySelectorAll(".answer-btn");
  document.getElementById("score-text").textContent = "Score: " + score;
  answerButtons.forEach(function(button, index) {
    button.textContent = questionData.answers[index];

    button.style.backgroundColor = "";

    button.addEventListener("click", function() {
      answerButtons.forEach(function(btn) {
        btn.style.backgroundColor = "";
      });

      selectedAnswer = index;
      button.style.backgroundColor = "#7C3AED";
    });
  });

}
function submitAnswer() {
  if (selectedAnswer === null) {
    return;
  }

  if (selectedAnswer === questions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    selectedAnswer = null;
    showQuestion();
  } else {
    document.getElementById("question-text").textContent = "Quiz Complete!";
    document.getElementById("score-text").textContent = "Final Score: " + score;
  }
}
function restartQuiz(){
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  showQuestion();
}

document.getElementById("submit-btn").addEventListener("click", submitAnswer);
document.getElementById("reset-btn").addEventListener("click", restartQuiz);
showQuestion();