let lessons = [];
let currentLesson = 0;
let solutions = {};

async function loadLessons() {
  const response = await fetch('lessons/lessons.json');
  lessons = await response.json();

  const solRes = await fetch('lessons/solutions.json');
  solutions = await solRes.json();

  const select = document.getElementById('lessonSelect');
  lessons.forEach((lesson, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = lesson.title;
    select.appendChild(opt);
  });
  select.onchange = () => loadLesson(parseInt(select.value));
  loadLesson(0);
}

function loadLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];
  document.getElementById('lessonSelect').value = index;
  document.getElementById('editor').value = lesson.starter;
  document.getElementById('output').textContent = '';
}

function prevLesson() {
  if (currentLesson > 0) {
    loadLesson(currentLesson - 1);
  }
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    loadLesson(currentLesson + 1);
  }
}

function runCode() {
  const code = document.getElementById('editor').value;
  try {
    let result = eval(code);
    document.getElementById('output').textContent = result ?? "Code executed.";
  } catch (e) {
    document.getElementById('output').textContent = 'Error: ' + e.message;
  }
}

function showSolution() {
  const lesson = lessons[currentLesson].title;
  const sol = solutions[lesson];
  document.getElementById('editor').value = sol;
}

window.onload = loadLessons;