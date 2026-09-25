import { questions } from "./questions.js";

const root = document.querySelector("#quiz-root");
const sections = ["Optimization landscape", "First-order methods", "Curvature & Newton"];
let answers = Array(questions.length).fill(null);
let current = 0;
let finished = false;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function score() {
  return answers.reduce((total, choice, index) => total + Number(choice === questions[index].answer), 0);
}

function visual(section) {
  if (section === "Optimization landscape") {
    return `<svg class="mini-visual" viewBox="0 0 240 170" role="img" aria-label="Schematic nonconvex cost with a local and a global minimum">
      <rect width="240" height="170" fill="#f4f1e8"/><path d="M26 21V142H222" fill="none" stroke="#697183"/>
      <path d="M32 45 C55 125 78 118 94 89 S126 39 151 92 S188 133 215 47" fill="none" stroke="#315fc7" stroke-width="2.5"/>
      <circle cx="67" cy="108" r="4" fill="#cf4d45"/><circle cx="180" cy="119" r="4" fill="#178464"/>
      <text x="49" y="128">local</text><text x="168" y="139">global</text><text x="207" y="156">θ</text><text x="13" y="23">J</text>
      <text x="34" y="163" class="visual-caption">Cost-landscape sketch</text>
    </svg>`;
  }
  if (section === "First-order methods") {
    return `<svg class="mini-visual" viewBox="0 0 240 170" role="img" aria-label="Schematic gradient and negative-gradient step across elliptical contours">
      <rect width="240" height="170" fill="#f4f1e8"/><path d="M24 88H221M119 18V148" fill="none" stroke="#697183"/>
      <ellipse cx="119" cy="88" rx="84" ry="49" fill="none" stroke="#c8c0b2"/><ellipse cx="119" cy="88" rx="58" ry="34" fill="none" stroke="#c8c0b2"/><ellipse cx="119" cy="88" rx="30" ry="17" fill="none" stroke="#c8c0b2"/>
      <circle cx="176" cy="55" r="4" fill="#172139"/><path d="M176 55L207 37" stroke="#cf4d45" stroke-width="3"/><path d="M176 55L145 73" stroke="#315fc7" stroke-width="3"/>
      <path d="M202 36l-8 1 4 7z" fill="#cf4d45"/><path d="M149 66l-8 9 12-2z" fill="#315fc7"/>
      <text x="198" y="29">∇J</text><text x="126" y="66">−η∇J</text><text x="108" y="92">θ⋆</text>
      <text x="34" y="163" class="visual-caption">Local contour geometry</text>
    </svg>`;
  }
  return `<svg class="mini-visual" viewBox="0 0 240 170" role="img" aria-label="Schematic Newton step on curved quadratic contours">
    <rect width="240" height="170" fill="#f4f1e8"/><path d="M24 88H221M119 18V148" fill="none" stroke="#697183"/>
    <ellipse cx="119" cy="88" rx="87" ry="35" transform="rotate(-25 119 88)" fill="none" stroke="#c8c0b2"/>
    <ellipse cx="119" cy="88" rx="58" ry="23" transform="rotate(-25 119 88)" fill="none" stroke="#c8c0b2"/>
    <ellipse cx="119" cy="88" rx="28" ry="11" transform="rotate(-25 119 88)" fill="none" stroke="#c8c0b2"/>
    <circle cx="183" cy="55" r="4" fill="#cf4d45"/><circle cx="119" cy="88" r="4" fill="#178464"/>
    <path d="M180 58L126 85" stroke="#315fc7" stroke-width="3"/><path d="M132 78l-12 11 16-2z" fill="#315fc7"/>
    <text x="180" y="45">θ⁽ᵗ⁾</text><text x="124" y="108">θ⋆</text><text x="141" y="68">Δ</text>
    <text x="34" y="163" class="visual-caption">Curvature-aware step</text>
  </svg>`;
}

function renderQuestion() {
  const q = questions[current];
  const choice = answers[current];
  const answered = choice !== null;
  root.innerHTML = `<div class="quiz-layout">
    <aside class="lesson-rail" aria-label="Learning path">
      <p class="eyebrow">Learning path</p>
      <h2>From cost landscapes to curvature</h2>
      <ol>${sections.map((section, index) => `<li class="${q.section === section ? "active" : ""}" ${q.section === section ? 'aria-current="step"' : ""}><span>0${index + 1}</span>${escapeHtml(section)}</li>`).join("")}</ol>
      <div class="rail-note"><p>Answer first, then read the explanation. Your responses stay in this browser tab; nothing is submitted.</p></div>
    </aside>
    <section class="question-stage" aria-label="Quiz question">
      <p class="setup-note"><strong>Chapter scope:</strong> Slides 90–109. Unless a question says otherwise, assume a differentiable, unconstrained objective and the update θ⁽ᵗ⁺¹⁾ = θ⁽ᵗ⁾ − η∇J(θ⁽ᵗ⁾).</p>
      <div class="progress-row"><span>Question ${current + 1} of ${questions.length}</span><div class="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${current + 1}"><div style="width:${((current + 1) / questions.length) * 100}%"></div></div><strong>${score()} points</strong></div>
      <article class="question-card">
        <div class="question-top"><div><p class="question-label">${escapeHtml(q.category)}</p><h2 id="question-title" tabindex="-1">${escapeHtml(q.prompt)}</h2></div>${visual(q.section)}</div>
        <div class="answers" role="group" aria-label="Answer choices">${q.options.map((option, index) => {
          const status = answered ? (index === q.answer ? "answer-correct" : index === choice ? "answer-wrong" : "") : "";
          const mark = answered && index === q.answer ? "✓" : answered && index === choice ? "×" : String.fromCharCode(65 + index);
          return `<button type="button" data-choice="${index}" ${answered ? "disabled" : ""} aria-pressed="${choice === index}" class="${status}"><span aria-hidden="true">${mark}</span>${escapeHtml(option)}</button>`;
        }).join("")}</div>
        ${answered ? `<div class="feedback ${choice === q.answer ? "correct" : "incorrect"}" role="status" tabindex="-1"><strong>${choice === q.answer ? "Correct." : "Not quite."}</strong><p>${escapeHtml(q.explanation)}</p><div class="try-it"><b>Check it:</b> ${escapeHtml(q.activity)}</div></div>` : ""}
        <div class="card-actions"><button type="button" class="secondary" data-action="previous" ${current === 0 ? "disabled" : ""}>← Previous</button><button type="button" class="primary" data-action="next" ${!answered ? "disabled" : ""}>${current === questions.length - 1 ? "See results" : "Next question →"}</button></div>
      </article>
    </section>
  </div>`;
}

function renderResults() {
  const total = score();
  const summary = sections.map(section => {
    const indices = questions.map((question, index) => question.section === section ? index : -1).filter(index => index >= 0);
    const correct = indices.filter(index => answers[index] === questions[index].answer).length;
    return `<li><span>${escapeHtml(section)}</span><strong>${correct} / ${indices.length}</strong></li>`;
  }).join("");
  root.innerHTML = `<section class="results" aria-labelledby="results-title">
    <p class="eyebrow">Quiz complete</p>
    <div class="score-ring" style="--score:${(total / questions.length) * 360}deg"><span>${total}/${questions.length}</span></div>
    <h2 id="results-title" tabindex="-1">${total} out of ${questions.length} correct</h2>
    <p>Review the explanations and the short calculations before moving from first-order methods to curvature-aware optimization.</p>
    <ul class="section-results">${summary}</ul>
    <div class="result-actions"><button type="button" class="secondary" data-action="review">Review answers</button><button type="button" class="primary" data-action="restart">Restart quiz</button></div>
  </section>`;
}

function render(focusTarget) {
  if (finished) renderResults(); else renderQuestion();
  if (focusTarget) root.querySelector(focusTarget)?.focus();
}

root.addEventListener("click", event => {
  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton && answers[current] === null) {
    answers[current] = Number(choiceButton.dataset.choice);
    render(".feedback");
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "previous" && current > 0) {
    current -= 1;
    render("#question-title");
  } else if (action === "next" && answers[current] !== null) {
    if (current === questions.length - 1) {
      finished = true;
      render("#results-title");
    } else {
      current += 1;
      render("#question-title");
    }
  } else if (action === "review") {
    finished = false;
    current = 0;
    render("#question-title");
  } else if (action === "restart") {
    answers = Array(questions.length).fill(null);
    current = 0;
    finished = false;
    render("#question-title");
  }
});

render();
