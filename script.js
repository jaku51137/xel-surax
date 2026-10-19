
/* =========================================
   XEL SURAX — MOҢҒОЛ ТІЛІН ҮЙРЕНУ САЙТЫ
========================================= */

// 1. САБАҚТАР
const lessons = [
  {
    id: 1,
    title: "Моңғол әліпбиі",
    level: "Бастауыш",
    type: "free",
    description: "Моңғол әріптерімен таныс."
  },
  {
    id: 2,
    title: "Сәлемдесу",
    level: "Бастауыш",
    type: "free",
    description: "Амандасу және қоштасу."
  },
  {
    id: 3,
    title: "Сандар мен түстер",
    level: "Бастауыш",
    type: "free",
    description: "Сандар мен түстерді үйрен."
  },
  {
    id: 4,
    title: "Өзіңді таныстыр",
    level: "Бастапқы",
    type: "free",
    description: "Өзің туралы моңғолша айт."
  },
  {
    id: 5,
    title: "Күнделікті әңгіме",
    level: "Орташа",
    type: "paid",
    price: 5000,
    description: "Күнделікті сөйлесуді үйрен."
  },
  {
    id: 6,
    title: "Моңғолша сөйлеу",
    level: "Жоғары",
    type: "paid",
    price: 10000,
    description: "Сөйлеу дағдыңды дамыт."
  }
];

// 2. САБАҚ МАЗМҰНЫ
const lessonDetails = {
  1: {
    intro: "Моңғол тілі қазіргі Моңғолияда кирилл жазуын қолданады.",
    words: [
      ["Аа", "А әрпі"],
      ["Оо", "О әрпі"],
      ["Өө", "Ө әрпі"],
      ["Үү", "Ү әрпі"],
      ["Ээ", "Э әрпі"]
    ],
    example: "Аа — Оо — Өө — Үү — Ээ",
    questions: [
      {
        q: "Моңғол тілінде Ө әрпі бар ма?",
        options: ["Жоқ", "Иә", "Білмеймін"],
        correct: 1
      },
      {
        q: "Ү әрпін таңда.",
        options: ["Аа", "Үү", "Ээ"],
        correct: 1
      }
    ]
  },

  2: {
    intro: "Моңғолша амандасуды және алғыс айтуды үйрен.",
    words: [
      ["Сайн байна уу?", "Сәлеметсіз бе?"],
      ["Сайн уу?", "Сәлем!"],
      ["Баярлалаа", "Рақмет"],
      ["Баяртай", "Сау бол!"],
      ["Уучлаарай", "Кешіріңіз"]
    ],
    example: "Сайн байна уу? — Сәлеметсіз бе?",
    questions: [
      {
        q: "«Баярлалаа» нені білдіреді?",
        options: ["Сау бол", "Рақмет", "Кешіріңіз"],
        correct: 1
      },
      {
        q: "«Сәлеметсіз бе?» дегенді таңда.",
        options: ["Баяртай", "Сайн байна уу?", "Баярлалаа"],
        correct: 1
      }
    ]
  },

  3: {
    intro: "Алғашқы сандар мен негізгі түстерді жатта.",
    words: [
      ["Нэг", "Бір"],
      ["Хоёр", "Екі"],
      ["Гурав", "Үш"],
      ["Дөрөв", "Төрт"],
      ["Тав", "Бес"],
      ["Улаан", "Қызыл"],
      ["Ногоон", "Жасыл"],
      ["Цэнхэр", "Көк"]
    ],
    example: "Нэг, хоёр, гурав — бір, екі, үш.",
    questions: [
      {
        q: "«Хоёр» қай сан?",
        options: ["Бір", "Екі", "Үш"],
        correct: 1
      },
      {
        q: "«Улаан» қандай түс?",
        options: ["Қызыл", "Көк", "Жасыл"],
        correct: 0
      }
    ]
  },

  4: {
    intro: "Өзіңді таныстыруға арналған сөйлемдерді үйрен.",
    words: [
      ["Намайг ... гэдэг.", "Менің атым ..."],
      ["Би казах хүн.", "Мен қазақпын."],
      ["Таныг хэн гэдэг вэ?", "Сіздің атыңыз кім?"],
      ["Баярлалаа.", "Рақмет."]
    ],
    example: "Сайн байна уу? Намайг Айжан гэдэг.",
    questions: [
      {
        q: "«Намайг ... гэдэг» дегеніміз не?",
        options: ["Менің атым ...", "Сау бол", "Рақмет"],
        correct: 0
      },
      {
        q: "«Таныг хэн гэдэг вэ?» дегеніміз не?",
        options: ["Қайда барасың?", "Сіздің атыңыз кім?", "Бұл не?"],
        correct: 1
      }
    ]
  }
};

// 3. СӨЗДІК
const words = [
  // 1. Сәлемдесу
  { mn: "Сайн уу", kz: "Сәлем" },
  { mn: "Өглөөний мэнд", kz: "Қайырлы таң" },
  { mn: "Өдрийн мэнд", kz: "Қайырлы күн" },
  { mn: "Оройн мэнд", kz: "Қайырлы кеш" },
  { mn: "Баяртай", kz: "Сау бол" },
  { mn: "Баярлалаа", kz: "Рақмет" },
  { mn: "Уучлаарай", kz: "Кешіріңіз" },
  { mn: "Зүгээр", kz: "Ештеңе етпейді" },
  { mn: "Тийм", kz: "Иә" },
  { mn: "Үгүй", kz: "Жоқ" },
  { mn: "За", kz: "Жарайды" },
  { mn: "Тавтай морил", kz: "Қош келдіңіз" },
  { mn: "Баяртай, дахин уулзъя", kz: "Сау бол, қайта кездескенше" },
  { mn: "Танд баярлалаа", kz: "Сізге рақмет" },

  // 2. Отбасы
  { mn: "Гэр бүл", kz: "Отбасы" },
  { mn: "Аав", kz: "Әке" },
  { mn: "Ээж", kz: "Ана" },
  { mn: "Хүү", kz: "Ұл" },
  { mn: "Охин", kz: "Қыз" },
  { mn: "Ах", kz: "Аға" },
  { mn: "Эгч", kz: "Әпке" },
  { mn: "Дүү", kz: "Іні немесе сіңлі/қарындас" },
  { mn: "Өвөө", kz: "Ата" },
  { mn: "Эмээ", kz: "Әже" },
  { mn: "Нөхөр", kz: "Күйеу" },
  { mn: "Эхнэр", kz: "Әйел, жұбай" },
  { mn: "Хүүхэд", kz: "Бала" },
  { mn: "Найз", kz: "Дос" },
  { mn: "Хүн", kz: "Адам" },

  // 3. Сандар
  { mn: "Нэг", kz: "Бір" },
  { mn: "Хоёр", kz: "Екі" },
  { mn: "Гурав", kz: "Үш" },
  { mn: "Дөрөв", kz: "Төрт" },
  { mn: "Тав", kz: "Бес" },
  { mn: "Зургаа", kz: "Алты" },
  { mn: "Долоо", kz: "Жеті" },
  { mn: "Найм", kz: "Сегіз" },
  { mn: "Ес", kz: "Тоғыз" },
  { mn: "Арав", kz: "Он" },
  { mn: "Хорь", kz: "Жиырма" },
  { mn: "Гуч", kz: "Отыз" },
  { mn: "Зуу", kz: "Жүз" },
  { mn: "Мянга", kz: "Мың" },
  { mn: "Мөнгө", kz: "Ақша" },

  // 4. Күнделікті өмір
  { mn: "Гэр", kz: "Үй" },
  { mn: "Сургууль", kz: "Мектеп" },
  { mn: "Их сургууль", kz: "Университет" },
  { mn: "Ном", kz: "Кітап" },
  { mn: "Дэвтэр", kz: "Дәптер" },
  { mn: "Үзэг", kz: "Қалам" },
  { mn: "Ширээ", kz: "Үстел" },
  { mn: "Сандал", kz: "Орындық" },
  { mn: "Хаалга", kz: "Есік" },
  { mn: "Цонх", kz: "Терезе" },
  { mn: "Машин", kz: "Көлік" },
  { mn: "Зам", kz: "Жол" },
  { mn: "Дэлгүүр", kz: "Дүкен" },
  { mn: "Ажил", kz: "Жұмыс" },
  { mn: "Өрөө", kz: "Бөлме" },

  // 5. Тағам мен сусын
  { mn: "Ус", kz: "Су" },
  { mn: "Сүү", kz: "Сүт" },
  { mn: "Цай", kz: "Шай" },
  { mn: "Талх", kz: "Нан" },
  { mn: "Мах", kz: "Ет" },
  { mn: "Будаа", kz: "Күріш" },
  { mn: "Давс", kz: "Тұз" },
  { mn: "Элсэн чихэр", kz: "Қант" },
  { mn: "Алим", kz: "Алма" },
  { mn: "Гадил", kz: "Банан" },
  { mn: "Өндөг", kz: "Жұмыртқа" },
  { mn: "Бяслаг", kz: "Ірімшік" },
  { mn: "Хоол", kz: "Тамақ" },
  { mn: "Өглөөний цай", kz: "Таңғы ас" },
  { mn: "Оройн хоол", kz: "Кешкі ас" },

  // 6. Табиғат
  { mn: "Нар", kz: "Күн" },
  { mn: "Сар", kz: "Ай" },
  { mn: "Од", kz: "Жұлдыз" },
  { mn: "Тэнгэр", kz: "Аспан" },
  { mn: "Газар", kz: "Жер" },
  { mn: "Уул", kz: "Тау" },
  { mn: "Гол", kz: "Өзен" },
  { mn: "Нуур", kz: "Көл" },
  { mn: "Мод", kz: "Ағаш" },
  { mn: "Цэцэг", kz: "Гүл" },
  { mn: "Бороо", kz: "Жаңбыр" },
  { mn: "Цас", kz: "Қар" },
  { mn: "Салхи", kz: "Жел" },
  { mn: "Гал", kz: "От" },
  { mn: "Цаг агаар", kz: "Ауа райы" },

  // 7. Уақыт
  { mn: "Өнөөдөр", kz: "Бүгін" },
  { mn: "Маргааш", kz: "Ертең" },
  { mn: "Өчигдөр", kz: "Кеше" },
  { mn: "Одоо", kz: "Қазір" },
  { mn: "Дараа", kz: "Кейін" },
  { mn: "Өглөө", kz: "Таңертең" },
  { mn: "Өдөр", kz: "Күндіз" },
  { mn: "Орой", kz: "Кеш" },
  { mn: "Шөнө", kz: "Түн" },
  { mn: "Долоо хоног", kz: "Апта" },

  // 8. Сұрақтар мен пайдалы сөздер
  { mn: "Юу", kz: "Не" },
  { mn: "Хэн", kz: "Кім" },
  { mn: "Хаана", kz: "Қайда" },
  { mn: "Хэзээ", kz: "Қашан" },
  { mn: "Яагаад", kz: "Неліктен" },
  { mn: "Яаж", kz: "Қалай" },
  { mn: "Хэд", kz: "Қанша" },
  { mn: "Ямар", kz: "Қандай" },
  { mn: "Энэ", kz: "Бұл" },
  { mn: "Тэр", kz: "Ол, анау" }
];

let currentWord = 0;
let translationVisible = false;

// 4. САБАҚТАРДЫ КӨРСЕТУ
function renderLessons() {
  const container = document.getElementById("lesson-grid");

  if (!container) {
    console.error("lesson-grid табылмады!");
    return;
  }

  container.innerHTML = "";

  lessons.forEach(lesson => {
    const card = document.createElement("div");
    card.className = "lesson-card";

    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <p>${lesson.level}</p>
    `;

    const button = document.createElement("button");
    button.textContent = lesson.type === "paid"
      ? `Ақылы сабақ — ${lesson.price} ₮`
      : "Сабақты бастау";

    button.addEventListener("click", () => openLesson(lesson.id));

    card.appendChild(button);
    container.appendChild(card);
  });
}

 
function openLesson(id) {
  const lesson = lessons.find(item => item.id === id);

  if (!lesson) {
    alert("Сабақ табылмады.");
    return;
  }

  if (lesson.type === "paid") {
    alert(
      "Бұл ақылы сабақ.\nБағасы: " +
      lesson.price.toLocaleString("en-US") +
      " ₮"
    );
    return;
  }

  const detail = lessonDetails[id];

  if (!detail) {
    alert("Бұл сабақтың мазмұны әлі дайын емес.");
    return;
  }

  activeLessonId = id;
  exerciseIndex = 0;
  exerciseScore = 0;
  exerciseAnswered = false;

  const title = document.getElementById("lesson-title");
  const intro = document.getElementById("lesson-intro");
  const example = document.getElementById("lesson-example");
  const vocabulary = document.getElementById("lesson-vocabulary");

  if (title) title.textContent = lesson.title;
  if (intro) intro.textContent = detail.intro;
  if (example) example.textContent = detail.example;

  if (vocabulary) {
    vocabulary.innerHTML = "";

    detail.words.forEach(([mn, kz]) => {
      const row = document.createElement("p");
      row.textContent = `${mn} — ${kz}`;
      vocabulary.appendChild(row);
    });
  }

  const result = document.getElementById("lesson-result");
  if (result) result.textContent = "";

  const nextButton = document.getElementById("exercise-next");
  if (nextButton) nextButton.hidden = false;

  showPage("lesson-view");
  renderExercise();
}


// 7. САБАҚ ТЕСТІ
function renderExercise() {
  const detail = lessonDetails[activeLessonId];
  if (!detail) return;

  const question = detail.questions[exerciseIndex];

  const questionText = document.getElementById("exercise-question");
  const optionsBox = document.getElementById("exercise-options");
  const feedback = document.getElementById("exercise-feedback");
  const progress = document.getElementById("exercise-progress");
  const nextButton = document.getElementById("exercise-next");

  if (!questionText || !optionsBox) return;

  questionText.textContent =
    `${exerciseIndex + 1}/${detail.questions.length}. ${question.q}`;

  optionsBox.innerHTML = "";
  if (feedback) feedback.textContent = "";
  if (nextButton) nextButton.disabled = true;

  if (progress) {
    progress.textContent =
      `Ұпай: ${exerciseScore} / ${detail.questions.length}`;
  }

  exerciseAnswered = false;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (exerciseAnswered) return;

      exerciseAnswered = true;

      optionsBox.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
      });

      if (index === question.correct) {
        exerciseScore++;
        button.classList.add("correct");

        if (feedback) {
          feedback.textContent = "Дұрыс жауап! Жарайсың! 🎉";
        }
      } else {
        button.classList.add("wrong");

        if (feedback) {
          feedback.textContent =
            "Дұрыс жауап: " + question.options[question.correct];
        }

        const correctButton =
          optionsBox.children[question.correct];

        if (correctButton) {
          correctButton.classList.add("correct");
        }
      }

      if (progress) {
        progress.textContent =
          `Ұпай: ${exerciseScore} / ${detail.questions.length}`;
      }

      if (nextButton) nextButton.disabled = false;
    });

    optionsBox.appendChild(button);
  });
}

// Келесі тест сұрағы
function nextExercise() {
  if (!exerciseAnswered) return;

  const detail = lessonDetails[activeLessonId];
  if (!detail) return;

  if (exerciseIndex < detail.questions.length - 1) {
    exerciseIndex++;
    renderExercise();
  } else {
    finishLesson();
    renderDashboard();
  }
}

// Сабақты аяқтау
function finishLesson() {
  const detail = lessonDetails[activeLessonId];

  const questionText = document.getElementById("exercise-question");
  const optionsBox = document.getElementById("exercise-options");
  const feedback = document.getElementById("exercise-feedback");
  const progress = document.getElementById("exercise-progress");
  const nextButton = document.getElementById("exercise-next");
  const result = document.getElementById("lesson-result");

  if (questionText) questionText.textContent = "Сабақ аяқталды! 🎉";
  if (optionsBox) optionsBox.innerHTML = "";
  if (feedback) feedback.textContent = "";

  if (nextButton) nextButton.hidden = true;

  const percentage = Math.round(
    (exerciseScore / detail.questions.length) * 100
  );

  if (progress) {
    progress.textContent =
      `Нәтиже: ${exerciseScore}/${detail.questions.length} (${percentage}%)`;
  }

  if (result) {
    result.textContent =
      percentage >= 80
        ? "Өте жақсы! Келесі сабаққа дайынсың."
        : "Жарайсың! Қате жауаптарды қайталап көр.";
  }

  saveCompletedLesson(activeLessonId);
  renderDashboard();

// Тест нәтижесін сақтау
try {
  const results = JSON.parse(
    localStorage.getItem("xelSuraxResults") || "{}"
  );

  results[activeLessonId] = {
    score: exerciseScore,
    total: detail.questions.length,
    percentage: percentage,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem(
    "xelSuraxResults",
    JSON.stringify(results)
  );
} catch (error) {
  console.warn("Нәтижені сақтау мүмкін болмады:", error);
}
}

// 8. ӨТКЕН САБАҚТАРДЫ САҚТАУ
function getCompletedLessons() {
  try {
    return JSON.parse(
      localStorage.getItem("xelSuraxCompleted") || "[]"
    );
  } catch {
    return [];
  }
}

function saveCompletedLesson(id) {
  const completed = getCompletedLessons();

  if (!completed.includes(id)) {
    completed.push(id);
  }

  try {
    localStorage.setItem(
      "xelSuraxCompleted",
      JSON.stringify(completed)
    );
  } catch {
    console.warn("Сабақ нәтижесін сақтау мүмкін болмады.");
  }
}

// 9. СӨЗДІК КАРТОЧКАЛАРЫ
function renderWord() {
  const word = words[currentWord];

  const count = document.getElementById("word-count");
  const mongolian = document.getElementById("mongolian-word");
  const kazakh = document.getElementById("kazakh-word");

  if (count) count.textContent = `${currentWord + 1} / ${words.length} сөз`;
  if (mongolian) mongolian.textContent = word.mn;

  if (kazakh) {
    kazakh.textContent = translationVisible
      ? word.kz
      : "Аударманы көрсету үшін бас";
  }
}

function toggleTranslation() {
  translationVisible = !translationVisible;
  renderWord();
}

function nextWord() {
  currentWord = (currentWord + 1) % words.length;
  translationVisible = false;
  renderWord();
}

function previousWord() {
  currentWord = (currentWord - 1 + words.length) % words.length;
  translationVisible = false;
  renderWord();
}


function speakMongolian(text) {
  if (!("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined") {
    alert("Дуугаар унших боломжгүй байна. Chrome браузераар нээгээд үзээрэй.");
    return;
  }

  const synthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "mn-MN";
  utterance.rate = 0.85;
  utterance.volume = 1;

  synthesis.cancel();

  setTimeout(() => {
    synthesis.speak(utterance);
  }, 100);
}

function speakWord() {
  speakMongolian(words[currentWord].mn);
}


// 10. БЕТ ЖҮКТЕЛГЕНДЕ
document.addEventListener("DOMContentLoaded", () => {
  renderLessons();
  renderWord();
  renderDashboard();

  const nextButton = document.getElementById("exercise-next");

  if (nextButton) {
    nextButton.addEventListener("click", nextExercise);
  }

  // Бастапқы бет
  const firstPage = document.querySelector(".page.active");

  if (!firstPage) {
    const homePage = document.getElementById("home");

    if (homePage) {
      homePage.hidden = false;
      homePage.classList.add("active");
    }
  }
});
// Беттер арасында ауысу
window.showPage = function (pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
    page.hidden = true;
  });

  const targetPage = document.getElementById(pageId);

  if (targetPage) {
    targetPage.hidden = false;
    targetPage.classList.add("active");
    if (pageId === "results") {
  renderResults();
}
  } else {
    console.error("Бет табылмады:", pageId);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderLessons === "function") {
    renderLessons();
  }

  if (typeof renderWord === "function") {
    renderWord();
  }
});

function renderDashboard() {
  const box = document.getElementById("dashboard-stats");
  if (!box) return;

  let results = {};

  try {
    results = JSON.parse(
      localStorage.getItem("xelSuraxResults") || "{}"
    );
  } catch {
    results = {};
  }

  const entries = Object.values(results);
  const completed = entries.length;

  const average = completed > 0
    ? Math.round(
        entries.reduce((sum, item) => sum + item.percentage, 0)
        / completed
      )
    : 0;

  box.innerHTML = `
    <div class="stat-card">
      <span>📚</span>
      <h3>${completed}</h3>
      <p>Аяқталған сабақ</p>
    </div>

    <div class="stat-card">
      <span>🎯</span>
      <h3>${average}%</h3>
      <p>Орташа нәтиже</p>
    </div>
  `;
}

function renderResults() {
  const box = document.getElementById("results-list");
  if (!box) return;

  let results = {};

  try {
    results = JSON.parse(
      localStorage.getItem("xelSuraxResults") || "{}"
    );
  } catch {
    results = {};
  }

  box.innerHTML = "";

  const entries = Object.entries(results);

  if (entries.length === 0) {
    box.textContent = "Әзірге аяқталған сабақ жоқ.";
    return;
  }

  entries.forEach(([id, result]) => {
    const item = document.createElement("div");
    item.className = "result-card";

    item.textContent =
      `Сабақ ${id}: ${result.score}/${result.total} ұпай — ` +
      `${result.percentage}% (${result.date})`;

    box.appendChild(item);
  });
}

function searchWords() {
  const input = document.getElementById("word-search");
  const box = document.getElementById("word-search-results");

  if (!input || !box) return;

  const query = input.value.trim().toLowerCase();
  box.innerHTML = "";

  if (!query) return;

  const matches = words.filter(word =>
    word.mn.toLowerCase().includes(query) ||
    word.kz.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    box.textContent = "Сөз табылмады.";
    return;
  }

  matches.forEach(word => {
    const card = document.createElement("div");
    card.className = "search-word-card";

    const mn = document.createElement("h3");
    mn.textContent = word.mn;

    const kz = document.createElement("p");
    kz.textContent = word.kz;

    const speak = document.createElement("button");
    speak.textContent = "🔊 Тыңдау";
    speak.addEventListener("click", () => {
      const utterance = new SpeechSynthesisUtterance(word.mn);
      utterance.lang = "mn-MN";
      utterance.rate = 0.8;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    });

    card.append(mn, kz, speak);
    box.appendChild(card);
  });
}

function getStudentProfile() {
  try {
    return JSON.parse(
      localStorage.getItem("xelSuraxProfile") || "null"
    );
  } catch {
    return null;
  }
}

function renderProfile() {
  const profile = getStudentProfile();

  const form = document.getElementById("profile-form");
  const info = document.getElementById("profile-info");
  const greeting = document.getElementById("profile-greeting");
  const lessonsText = document.getElementById("profile-lessons");
  const averageText = document.getElementById("profile-average");
  const nameInput = document.getElementById("student-name");

  if (!form || !info) return;

  if (!profile) {
    form.hidden = false;
    info.hidden = true;
    return;
  }

  form.hidden = true;
  info.hidden = false;

  if (greeting) {
    greeting.textContent = "Сәлем, " + profile.name + "! 👋";
  }

  let results = {};

  try {
    results = JSON.parse(
      localStorage.getItem("xelSuraxResults") || "{}"
    );
  } catch {
    results = {};
  }

  const entries = Object.values(results);
  const completed = entries.length;

  const average = completed
    ? Math.round(
        entries.reduce(
          (sum, item) => sum + Number(item.percentage || 0), 0
        ) / completed
      )
    : 0;

  if (lessonsText) {
    lessonsText.textContent =
      "📚 Аяқталған сабақтар: " + completed;
  }

  if (averageText) {
    averageText.textContent =
      "🎯 Орташа тест нәтижесі: " + average + "%";
  }
}

function editProfile() {
  const profile = getStudentProfile();
  const form = document.getElementById("profile-form");
  const info = document.getElementById("profile-info");
  const nameInput = document.getElementById("student-name");

  if (!form || !info || !nameInput) return;

  nameInput.value = profile ? profile.name : "";
  form.hidden = false;
  info.hidden = true;
  nameInput.focus();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profile-form");
  const nameInput = document.getElementById("student-name");

  renderProfile();

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = nameInput.value.trim();

      if (!name) {
        alert("Атыңды енгіз!");
        return;
      }

      try {
        localStorage.setItem(
          "xelSuraxProfile",
          JSON.stringify({ name: name })
        );

        renderProfile();
        alert("Профиль сақталды! 🎉");
      } catch {
        alert("Профиль сақталмады. Браузер сақтау мүмкіндігін тексер.");
      }
    });
  }
});
