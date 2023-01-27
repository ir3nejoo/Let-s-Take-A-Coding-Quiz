var questions = [
  {
    question: "1. Commonly used data types DO NOT include:",
    options: ["a) strings", "b) booleans", "c) alerts", "d) numbers"],
    answer: "c) alerts",
  },
  {
    question: "2. Commonly used data types DO NOT include:",
    options: [
      "a) numbers and strings",
      "b) other arrays",
      "c) booleans",
      "d) all of the above",
    ],
    answer: "b) other arrays",
  },
  {
    question:
      "3. The condition in an if/else statement is enclosed with ______.",
    options: [
      "a) quotes",
      "b) curly brackets",
      "c) parenthesis",
      "d) square brackets",
    ],
    answer: "d) square brackets",
  },
  {
    question:
      "4. String values must be enclosed within _____ when being assigned to variables.",
    options: ["a) commas", "b) curly brackets", "c) quotes", "d) parenthesis"],
    answer: "d) parentehsis",
  },
  {
    question:
      "5. A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "a) JavaScript",
      "b) terminal/bash",
      "c) for loops",
      "d) console.log",
    ],
    answer: "d) console.log",
  },
];

var start = document.getElementById("start");
// var deduct = document.getElementById("wrong");

// deduct.addEventListener("click", function () {
//   var count = document.getElementById("demo");
//   count.innerHTML -= 10;
// });

var counter = 0;
const startButton = document.querySelector("#start");
const startPage = document.querySelector(".start-page");

startButton.addEventListener("click", function () {
  var count = document.getElementById("demo");
  console.log("test");
  startPage.remove();
  displayQuestion();
  setInterval(function () {
    count.innerHTML -= 1;
  }, 1000);
});

function displayQuestion() {
  var choices = document.querySelector(".choices");
  var questionsContainer = document.querySelector(".questions");
  var question = document.querySelector(".question");
  question.textContent = questions[counter].question;
  for (let i = 0; i < questions[counter].options.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("value", questions[counter].options[i]);
    button.textContent = questions[counter].options[i];
    choices.appendChild(button);

    button.addEventListener("click", function () {
      counter++;
      choices.innerHTML = "";
      if (!questions[counter]) {
        questionsContainer.remove();
        displayResults();
        return;
      }
      displayQuestion();
    });
  }
}
function displayResults() {
  var scoreContainer = document.querySelector(".score-container");
  var score = document.querySelector(".score");
  var intials = document.querySelector(".initials");
  var form = document.querySelector("form");
  var input = document.createElement("input");
  var submitButton = document.createElement("input");
  input.setAttribute("type", "text");
  submitButton.setAttribute("value", "submit");
  submitButton.setAttribute("type", "submit");
  form.appendChild(input);
  form.appendChild(submitButton);
}
