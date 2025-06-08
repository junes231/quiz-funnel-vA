// quiz.js
const container = document.getElementById('quiz-container');
let currentQuestion = 0;
let answers = [];

function renderQuestion() {
  container.innerHTML = "";
  if (currentQuestion >= config.questions.length) {
    renderEmailInput();
    return;
  }
  const q = config.questions[currentQuestion];
  const div = document.createElement('div');
  div.className = "question";
  const h2 = document.createElement('h2');
  h2.textContent = q.title;
  div.appendChild(h2);
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => {
      answers.push(answer);
      currentQuestion++;
      renderQuestion();
    };
    div.appendChild(btn);
  });
  container.appendChild(div);
}

function renderEmailInput() {
  container.innerHTML = "";
  const input = document.createElement('input');
  input.type = "email";
  input.placeholder = "Enter your email";
  input.style.padding = "10px";
  input.style.fontSize = "18px";
  input.style.width = "300px";
  const btn = document.createElement('button');
  btn.textContent = "Submit";
  btn.onclick = () => {
    if (input.value && input.value.includes('@')) {
      window.location.href = config.funnelLink;
    } else {
      alert("Please enter a valid email.");
    }
  };
  container.appendChild(input);
  container.appendChild(btn);
}

renderQuestion();