const STORAGE_KEYS = {
  page: "portfolio.page",
  theme: "portfolio.theme",
  language: "portfolio.language",
  name: "portfolio.name",
};

const GITHUB_URL = "https://github.com/Bimo0420";

const DATA = {
  ru: {
    title: "Алексей Викулин — AI Engineer",
    name: "Алексей Викулин",
    nav: {
      about: "about",
      work: "work",
      writing: "writing",
      now: "now",
      cv: "cv",
      contact: "contact",
    },
    about: {
      label: "обо мне",
      title: "Алексей Викулин",
      intro: "Я создаю системы на пересечении языковых моделей и программной инженерии.",
      summary: "Сейчас фокусируюсь на retrieval-системах, агентах и надёжности LLM в продакшене. Ранее работал в Series B стартапе над инструментами для разработчиков. Открыт к интересным задачам.",
      primaryCta: "смотреть проекты →",
      secondaryCta: "связаться",
    },
    recent: {
      label: "свежее",
    },
    stack: {
      label: "стек",
    },
    work: {
      label: "проекты",
      intro: "Несколько вещей, которые я построил за последнее время.",
    },
    writing: {
      label: "заметки",
      intro: "Заметки о том, что выясняю в процессе.",
      readTimeSeparator: "·",
    },
    now: {
      label: "now",
      date: "Апрель 2025 · Москва",
      items: [
        {
          label: "работаю над",
          text: "Исследую подходы к multi-hop retrieval: как строить цепочки поиска по сложным вопросам, требующим нескольких шагов рассуждения.",
        },
        {
          label: "читаю",
          text: "«Designing Machine Learning Systems» — Chip Huyen. Много практики, мало воды.",
        },
        {
          label: "экспериментирую с",
          text: "Qdrant + ColPali для мультимодального RAG по PDF-документам с графиками и таблицами.",
        },
        {
          label: "открыт к",
          text: "Интересным задачам в области AI-инфраструктуры и production-систем на базе LLM. Пишите.",
        },
      ],
    },
    cv: {
      label: "cv",
      sections: {
        experience: "опыт",
        education: "образование",
        skills: "навыки",
      },
      experience: [
        {
          company: "AI Solutions Studio",
          role: "AI Engineer",
          dates: "2023 — н.в.",
          items: [
            "Проектирование и внедрение RAG-систем для enterprise-клиентов.",
            "Разработка eval-фреймворков: RAGAS, LLM-as-judge, кастомные метрики.",
            "Оптимизация retrieval-пайплайнов: reranking, hybrid search, query expansion.",
          ],
        },
        {
          company: "Data Team, финтех-стартап",
          role: "ML Engineer",
          dates: "2021 — 2023",
          items: [
            "Fine-tuning BERT/RoBERTa для классификации и NER.",
            "Построение ML-пайплайнов на Airflow + MLflow.",
            "A/B-тестирование моделей в проде.",
          ],
        },
      ],
      education: [
        {
          institution: "НИУ ВШЭ",
          degree: "Прикладная математика и информатика",
          year: "2021",
        },
      ],
      skills: [
        "python",
        "pytorch",
        "transformers",
        "fastapi",
        "langchain",
        "pgvector",
        "qdrant",
        "docker",
        "postgresql",
        "redis",
        "airflow",
        "mlflow",
      ],
    },
    contact: {
      label: "contact",
      intro: "Если у тебя интересная задача в области AI-инфраструктуры, RAG или интеграции LLM в процессы — напиши. Отвечаю в течение дня.",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "о чём хочешь поговорить...",
      submit: "отправить →",
      success: "сообщение отправлено →",
      github: "GitHub ↗",
    },
    projects: [
      {
        title: "RAG для внутренней базы знаний",
        year: "2024",
        description: "Система поиска по корпоративным документам на pgvector + reranker. Снизила время поиска с 15 минут до 30 секунд.",
        tags: ["python", "rag", "pgvector", "fastapi"],
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "Eval harness для LLM-ответов",
        year: "2024",
        description: "Фреймворк для автоматической оценки качества ответов: RAGAS, LLM-as-judge, кастомные метрики.",
        tags: ["python", "evals", "pytest"],
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "AI-ассистент для техподдержки",
        year: "2023",
        description: "Чат-бот на базе GPT-4 с RAG по тикетам и базе знаний. Закрывает около 40% запросов без участия оператора.",
        tags: ["python", "openai", "rag", "fastapi"],
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "Pipeline классификации документов",
        year: "2023",
        description: "Fine-tuned BERT для автоматической маршрутизации входящих документов по 30+ категориям.",
        tags: ["pytorch", "bert", "transformers"],
        href: GITHUB_URL,
        external: true,
      },
    ],
    posts: [
      {
        title: "RAG без боли: как выбрать chunking strategy",
        date: "Апр 2024",
        time: "7 мин",
        tags: ["rag", "retrieval"],
      },
      {
        title: "Как оценивать качество RAG-системы в 2024",
        date: "Фев 2024",
        time: "9 мин",
        tags: ["evals", "rag"],
      },
      {
        title: "FastAPI + Pydantic v2: шаблон для AI-сервисов",
        date: "Янв 2024",
        time: "5 мин",
        tags: ["fastapi", "python"],
      },
      {
        title: "Почему LangChain — это не всегда плохо",
        date: "Дек 2023",
        time: "4 мин",
        tags: ["opinion", "llm"],
      },
      {
        title: "Embeddings на практике: что влияет на качество",
        date: "Ноя 2023",
        time: "6 мин",
        tags: ["embeddings"],
      },
    ],
  },
  en: {
    title: "Alexey Vikulin — AI Engineer",
    name: "Alexey Vikulin",
    nav: {
      about: "about",
      work: "work",
      writing: "writing",
      now: "now",
      cv: "cv",
      contact: "contact",
    },
    about: {
      label: "about",
      title: "Alexey Vikulin",
      intro: "I build systems at the intersection of language models and software engineering.",
      summary: "Right now I focus on retrieval systems, agents, and making LLMs reliable in production. Previously I worked at a Series B startup building developer tools. Open to sharp technical problems.",
      primaryCta: "view projects →",
      secondaryCta: "get in touch",
    },
    recent: {
      label: "recent",
    },
    stack: {
      label: "stack",
    },
    work: {
      label: "work",
      intro: "A few things I've built recently.",
    },
    writing: {
      label: "writing",
      intro: "Notes on what I'm figuring out as I go.",
      readTimeSeparator: "·",
    },
    now: {
      label: "now",
      date: "April 2025 · Moscow",
      items: [
        {
          label: "working on",
          text: "Exploring multi-hop retrieval patterns: how to build search chains for complex questions that require several reasoning steps.",
        },
        {
          label: "reading",
          text: "“Designing Machine Learning Systems” by Chip Huyen. Practical, dense, and useful.",
        },
        {
          label: "experimenting with",
          text: "Qdrant + ColPali for multimodal RAG over PDF documents with charts and tables.",
        },
        {
          label: "open to",
          text: "Interesting problems in AI infrastructure and production systems built on top of LLMs. Reach out.",
        },
      ],
    },
    cv: {
      label: "cv",
      sections: {
        experience: "experience",
        education: "education",
        skills: "skills",
      },
      experience: [
        {
          company: "AI Solutions Studio",
          role: "AI Engineer",
          dates: "2023 — present",
          items: [
            "Designed and shipped RAG systems for enterprise clients.",
            "Built eval frameworks with RAGAS, LLM-as-judge, and custom metrics.",
            "Improved retrieval pipelines with reranking, hybrid search, and query expansion.",
          ],
        },
        {
          company: "Data Team, fintech startup",
          role: "ML Engineer",
          dates: "2021 — 2023",
          items: [
            "Fine-tuned BERT and RoBERTa models for classification and NER.",
            "Built ML pipelines on top of Airflow and MLflow.",
            "Ran A/B tests for production models.",
          ],
        },
      ],
      education: [
        {
          institution: "HSE University",
          degree: "Applied Mathematics and Computer Science",
          year: "2021",
        },
      ],
      skills: [
        "python",
        "pytorch",
        "transformers",
        "fastapi",
        "langchain",
        "pgvector",
        "qdrant",
        "docker",
        "postgresql",
        "redis",
        "airflow",
        "mlflow",
      ],
    },
    contact: {
      label: "contact",
      intro: "If you're working on something difficult in AI infrastructure, RAG, or LLM integration, write to me. I usually reply within a day.",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "what do you want to discuss...",
      submit: "send →",
      success: "message sent →",
      github: "GitHub ↗",
    },
    projects: [
      {
        title: "RAG for internal knowledge bases",
        year: "2024",
        description: "Enterprise document search on top of pgvector and reranking. Cut lookup time from 15 minutes to 30 seconds.",
        tags: ["python", "rag", "pgvector", "fastapi"],
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "Eval harness for LLM responses",
        year: "2024",
        description: "Framework for automatic response quality evaluation with RAGAS, LLM-as-judge, and custom metrics.",
        tags: ["python", "evals", "pytest"],
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "AI assistant for support teams",
        year: "2023",
        description: "GPT-4 based assistant with RAG over tickets and internal knowledge. Handles around 40% of requests without an operator.",
        tags: ["python", "openai", "rag", "fastapi"],
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "Document classification pipeline",
        year: "2023",
        description: "Fine-tuned BERT pipeline for routing inbound documents across 30+ categories.",
        tags: ["pytorch", "bert", "transformers"],
        href: GITHUB_URL,
        external: true,
      },
    ],
    posts: [
      {
        title: "RAG without pain: choosing the right chunking strategy",
        date: "Apr 2024",
        time: "7 min",
        tags: ["rag", "retrieval"],
      },
      {
        title: "How to evaluate a RAG system in 2024",
        date: "Feb 2024",
        time: "9 min",
        tags: ["evals", "rag"],
      },
      {
        title: "FastAPI + Pydantic v2: a baseline for AI services",
        date: "Jan 2024",
        time: "5 min",
        tags: ["fastapi", "python"],
      },
      {
        title: "Why LangChain is not always the wrong choice",
        date: "Dec 2023",
        time: "4 min",
        tags: ["opinion", "llm"],
      },
      {
        title: "Embeddings in practice: what actually affects quality",
        date: "Nov 2023",
        time: "6 min",
        tags: ["embeddings"],
      },
    ],
  },
};

const state = {
  page: loadValue(STORAGE_KEYS.page, "about"),
  theme: loadValue(STORAGE_KEYS.theme, getSystemTheme()),
  language: loadValue(STORAGE_KEYS.language, "ru"),
  name: loadValue(STORAGE_KEYS.name, DATA.ru.name),
  contactSent: false,
};

const app = document.getElementById("app");
const tweaksPanel = document.getElementById("tweaks-panel");
const tweakName = document.getElementById("tweak-name");
const tweakPage = document.getElementById("tweak-page");
const tweakLanguage = document.getElementById("tweak-language");
const tweakTheme = document.getElementById("tweak-theme");

function loadValue(key, fallback) {
  const stored = window.localStorage.getItem(key);
  return stored ?? fallback;
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getCopy() {
  return DATA[state.language] || DATA.ru;
}

function applyDocumentState() {
  const copy = getCopy();
  document.documentElement.lang = state.language;
  document.documentElement.dataset.theme = state.theme;
  document.title = copy.title;
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEYS.page, state.page);
  window.localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  window.localStorage.setItem(STORAGE_KEYS.language, state.language);
  window.localStorage.setItem(STORAGE_KEYS.name, state.name);
}

function iconTheme() {
  if (state.theme === "dark") {
    return `
      <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="12" y1="2" x2="12" y2="5"></line>
        <line x1="12" y1="19" x2="12" y2="22"></line>
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line>
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line>
        <line x1="2" y1="12" x2="5" y2="12"></line>
        <line x1="19" y1="12" x2="22" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line>
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  }

  return `
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79"></path>
    </svg>
  `;
}

function iconGithub() {
  return `
    <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
    </svg>
  `;
}

function renderTags(tags) {
  return tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
}

function renderProjects(projects) {
  return `
    <div class="card-grid">
      ${projects.map((project) => `
        <article class="card">
          <div class="card-header">
            <div class="card-title">${escapeHtml(project.title)}</div>
            <span class="meta">${escapeHtml(project.year)}</span>
          </div>
          <p class="card-description">${escapeHtml(project.description)}</p>
          <div class="tag-list">${renderTags(project.tags)}</div>
          <a class="card-link" href="${escapeHtml(project.href)}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>↗</a>
        </article>
      `).join("")}
    </div>
  `;
}

function renderPosts(posts, separator) {
  return `
    <div class="writing-list">
      ${posts.map((post) => `
        <article class="writing-row">
          <div class="writing-main">
            <a class="writing-title" href="#">${escapeHtml(post.title)}</a>
            <div class="tag-list">${renderTags(post.tags)}</div>
          </div>
          <span class="meta">${escapeHtml(post.date)} ${separator} ${escapeHtml(post.time)}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderNow(copy) {
  return `
    <section class="section">
      <p class="section-label">${escapeHtml(copy.now.label)}</p>
      <p class="section-intro">${escapeHtml(copy.now.date)}</p>
      <div class="now-list">
        ${copy.now.items.map((item) => `
          <div class="now-row">
            <div class="now-label">${escapeHtml(item.label)}</div>
            <p class="now-text">${escapeHtml(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCv(copy) {
  return `
    <section class="section">
      <p class="section-label">${escapeHtml(copy.cv.label)}</p>
      <div class="cv-list">
        <div class="cv-block">
          <div class="cv-label">${escapeHtml(copy.cv.sections.experience)}</div>
          ${copy.cv.experience.map((item) => `
            <article class="cv-divider">
              <div class="row-header">
                <div class="cv-company">${escapeHtml(item.company)}</div>
                <span class="meta">${escapeHtml(item.dates)}</span>
              </div>
              <div class="cv-role">${escapeHtml(item.role)}</div>
              <ul class="cv-items">
                ${item.items.map((point) => `<li class="cv-item">${escapeHtml(point)}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
        <div class="cv-block cv-divider">
          <div class="cv-label">${escapeHtml(copy.cv.sections.education)}</div>
          ${copy.cv.education.map((item) => `
            <article class="cv-divider">
              <div class="row-header">
                <div>
                  <div class="cv-company">${escapeHtml(item.institution)}</div>
                  <div class="cv-role">${escapeHtml(item.degree)}</div>
                </div>
                <span class="meta">${escapeHtml(item.year)}</span>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="cv-block cv-divider">
          <div class="cv-label">${escapeHtml(copy.cv.sections.skills)}</div>
          <div class="tag-list">${renderTags(copy.cv.skills)}</div>
        </div>
      </div>
    </section>
  `;
}

function renderContact(copy) {
  return `
    <section class="section">
      <p class="section-label">${escapeHtml(copy.contact.label)}</p>
      <p class="contact-copy">${escapeHtml(copy.contact.intro)}</p>
      <div class="contact-form">
        ${state.contactSent ? `
          <p class="contact-feedback">${escapeHtml(copy.contact.success)}</p>
        ` : `
          <form id="contact-form">
            <input class="field" id="contact-email" type="email" placeholder="${escapeHtml(copy.contact.emailPlaceholder)}" autocomplete="email">
            <textarea class="textarea" id="contact-message" placeholder="${escapeHtml(copy.contact.messagePlaceholder)}"></textarea>
            <button class="button button-primary" type="submit">${escapeHtml(copy.contact.submit)}</button>
          </form>
        `}
      </div>
      <div class="contact-links">
        <a class="social-link" href="${escapeHtml(GITHUB_URL)}" target="_blank" rel="noopener noreferrer">
          ${iconGithub()}
          <span>${escapeHtml(copy.contact.github)}</span>
        </a>
      </div>
    </section>
  `;
}

function renderAbout(copy) {
  return `
    <section class="section">
      <p class="section-label">${escapeHtml(copy.about.label)}</p>
      <h1 class="hero-title">${escapeHtml(state.name)}</h1>
      <p class="lead">${escapeHtml(copy.about.intro)}</p>
      <p class="body-copy">${escapeHtml(copy.about.summary)}</p>
      <div class="cta-row">
        <button class="button button-primary" type="button" data-page-target="work">${escapeHtml(copy.about.primaryCta)}</button>
        <button class="button button-secondary" type="button" data-page-target="contact">${escapeHtml(copy.about.secondaryCta)}</button>
      </div>
    </section>
    <section class="section">
      <p class="section-label">${escapeHtml(copy.recent.label)}</p>
      ${renderProjects(copy.projects.slice(0, 2))}
    </section>
    <section class="section">
      <p class="section-label">${escapeHtml(copy.stack.label)}</p>
      <div class="tag-list">${renderTags(copy.cv.skills)}</div>
    </section>
  `;
}

function renderWork(copy) {
  return `
    <section class="section">
      <p class="section-label">${escapeHtml(copy.work.label)}</p>
      <p class="section-intro">${escapeHtml(copy.work.intro)}</p>
      ${renderProjects(copy.projects)}
    </section>
  `;
}

function renderWriting(copy) {
  return `
    <section class="section">
      <p class="section-label">${escapeHtml(copy.writing.label)}</p>
      <p class="section-intro">${escapeHtml(copy.writing.intro)}</p>
      ${renderPosts(copy.posts, copy.writing.readTimeSeparator)}
    </section>
  `;
}

function renderPage(copy) {
  switch (state.page) {
    case "work":
      return renderWork(copy);
    case "writing":
      return renderWriting(copy);
    case "now":
      return renderNow(copy);
    case "cv":
      return renderCv(copy);
    case "contact":
      return renderContact(copy);
    case "about":
    default:
      return renderAbout(copy);
  }
}

function renderNav(copy) {
  const navLinks = Object.entries(copy.nav).map(([key, label]) => `
    <button class="nav-link ${state.page === key ? "is-active" : ""}" type="button" data-page="${key}">
      ${escapeHtml(label)}
    </button>
  `).join("");

  return `
    <nav class="site-nav">
      <button class="brand-button" type="button" data-page="about" aria-label="Go to about">
        <span>${escapeHtml(state.name)}</span>
        <span class="brand-caret" aria-hidden="true"></span>
      </button>
      <div class="nav-actions">
        ${navLinks}
        <button class="nav-toggle" type="button" id="language-toggle">${state.language}</button>
        <button class="nav-toggle" type="button" id="theme-toggle" aria-label="Toggle theme">${iconTheme()}</button>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <span class="footer-copy">© 2025 ${escapeHtml(state.name)}</span>
      <div class="footer-links">
        <a class="social-link" href="${escapeHtml(GITHUB_URL)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          ${iconGithub()}
        </a>
      </div>
    </footer>
  `;
}

function syncTweaks(copy) {
  tweakName.value = state.name;
  tweakLanguage.value = state.language;
  tweakTheme.value = state.theme;
  tweakPage.innerHTML = Object.entries(copy.nav)
    .map(([key, label]) => `<option value="${escapeHtml(key)}">${escapeHtml(label)}</option>`)
    .join("");
  tweakPage.value = state.page;
}

function renderApp() {
  applyDocumentState();
  persistState();

  const copy = getCopy();

  app.innerHTML = `
    <div class="app-shell">
      ${renderNav(copy)}
      <main class="page-shell" data-page="${escapeHtml(state.page)}">
        ${renderPage(copy)}
      </main>
      ${renderFooter()}
    </div>
  `;

  syncTweaks(copy);
  bindRuntimeEvents();
}

function setPage(page) {
  if (!Object.prototype.hasOwnProperty.call(getCopy().nav, page)) {
    return;
  }

  state.page = page;
  renderApp();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function bindRuntimeEvents() {
  document.querySelectorAll("[data-page]").forEach((element) => {
    element.addEventListener("click", () => {
      setPage(element.dataset.page);
    });
  });

  document.querySelectorAll("[data-page-target]").forEach((element) => {
    element.addEventListener("click", () => {
      setPage(element.dataset.pageTarget);
    });
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      renderApp();
    });
  }

  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      state.language = state.language === "ru" ? "en" : "ru";
      state.contactSent = false;
      renderApp();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("contact-email")?.value.trim();
      const message = document.getElementById("contact-message")?.value.trim();
      if (!email || !message) {
        return;
      }
      state.contactSent = true;
      renderApp();
    });
  }
}

function bindStaticEvents() {
  tweakName.addEventListener("input", (event) => {
    state.name = event.target.value || getCopy().name;
    renderApp();
  });

  tweakPage.addEventListener("change", (event) => {
    state.page = event.target.value;
    renderApp();
  });

  tweakLanguage.addEventListener("change", (event) => {
    state.language = event.target.value;
    state.contactSent = false;
    renderApp();
  });

  tweakTheme.addEventListener("change", (event) => {
    state.theme = event.target.value;
    renderApp();
  });

  window.addEventListener("message", (event) => {
    if (event.data?.type === "__activate_edit_mode") {
      tweaksPanel.classList.add("is-visible");
    }
    if (event.data?.type === "__deactivate_edit_mode") {
      tweaksPanel.classList.remove("is-visible");
    }
  });

  window.parent.postMessage({ type: "__edit_mode_available" }, "*");
}

bindStaticEvents();
renderApp();
