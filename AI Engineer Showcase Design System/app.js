const STORAGE_KEYS = {
  page: "showcase.page",
  theme: "showcase.theme",
  language: "showcase.language",
  name: "showcase.name",
};

const GITHUB_URL = "https://github.com/Bimo0420";
const SCRIPT_SRC = document.currentScript && document.currentScript.src ? document.currentScript.src : window.location.href;
const ASSET_ROOT = new URL(".", SCRIPT_SRC);
const assetUrl = (path) => new URL(path, ASSET_ROOT).href;

const DATA = {
  ru: {
    title: "Алексей Викулин — AI Engineer",
    name: "Алексей Викулин | AI Engineer",
    nav: {
      about: "обо мне",
      work: "проекты",
      writing: "заметки",
      now: "сейчас",
      cv: "cv",
      contact: "контакт",
    },
    ui: {
      brandAria: "Перейти на страницу",
      languageToggle: "Переключить язык",
      themeToggle: "Переключить тему",
      openProject: "Подробнее",
      closeProject: "Закрыть описание проекта",
      projectDetails: "детали проекта",
      visitProject: "открыть проект ↗",
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
        title: "AI Assistant Core Platform",
        year: "2025",
        description: "Модульная RAG-платформа для корпоративных AI-ассистентов, работающих с внутренними знаниями, документацией и неструктурированными данными.",
        role: "AI Engineer",
        period: "2025",
        detail: "Разработал enterprise-платформу для создания корпоративных ассистентов на базе Retrieval-Augmented Generation. Система индексирует документы, преобразует их в эмбеддинги, извлекает релевантный контекст через гибридный поиск и передает его в LLM-оркестрацию, что повышает фактическую точность ответов и снижает риск галлюцинаций.",
        impact: [
          "Собрал пайплайн обработки документов: preprocessing, семантическая сегментация, генерация эмбеддингов и индексация в PostgreSQL + pgvector.",
          "Реализовал RAG-контур с hybrid search, LLM-оркестрацией, self-hosted inference через Ollama и пользовательским интерфейсом Open WebUI.",
          "Добавил инфраструктурные компоненты для production-сценариев: Redis, ClickHouse, MinIO, Supabase, n8n, Langfuse, Prometheus и Grafana.",
          "Подготовил масштабируемую архитектуру для интеграции с внутренними базами знаний и мониторинга качества ответов.",
        ],
        tags: ["enterprise rag", "hybrid search", "self-hosted inference", "knowledge base", "observability"],
        media: [
          {
            src: assetUrl("assets/ai-assistant-core-platform-chat.png"),
            alt: "Привычный чат-интерфейс AI Assistant Core Platform",
            caption: "Привычный чат-интерфейс с корпоративным ассистентом.",
          },
          {
            src: assetUrl("assets/ai-assistant-core-platform-monitoring.png"),
            alt: "Мониторинг инфраструктуры AI Assistant Core Platform",
            caption: "Мониторинг инфраструктуры и состояния сервисов.",
          },
          {
            src: assetUrl("assets/ai-assistant-core-platform-tracing.png"),
            alt: "Трейсинг и контроль качества AI Assistant Core Platform",
            caption: "Трейсинг запросов и контроль качества ответов AI.",
          },
        ],
        postMedia: {
          type: "video",
          src: assetUrl("assets/ai-assistant-core-platform-demo.mp4"),
          alt: "Демо AI Assistant Core Platform",
          caption: "Демо интерфейса AI Assistant Core Platform.",
        },
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "CTO Estimate",
        year: "2026",
        description: "Интерактивный инструмент для оценки self-hosted LLM-инфраструктуры: выбор модели, расчет GPU-требований и экономика локального сервера.",
        role: "AI Engineer",
        period: "2026",
        detail: "Разработал набор CTO-инструментов для раннего планирования локальной AI-инфраструктуры. Проект помогает понять, какие open-weight модели можно развернуть локально, какие GPU и серверные ресурсы потребуются, и когда покупка собственного inference-сервера становится экономически оправданной.",
        impact: [
          "Данные по моделям обновляются ежедневно, а интерфейс построен как практичный dashboard для принятия инфраструктурных решений до покупки оборудования.",
        ],
        tags: ["self-hosted llm", "gpu calculator", "server roi", "tco", "cloud api compare"],
        media: [
          {
            src: assetUrl("assets/cto-estimate-self-hosted-llm.png"),
            alt: "CTO Estimate self-hosted LLM dashboard",
            caption: "Self-hosted LLM Dashboard: каталог open-weight моделей из Artificial Analysis, фильтры, топ-10 рейтинги, параметры архитектуры из Hugging Face и сравнение моделей side-by-side.",
          },
          {
            src: assetUrl("assets/cto-estimate-gpu-calculator.png"),
            alt: "CTO Estimate GPU calculator",
            caption: "GPU Calculator: оценка VRAM, bandwidth, compute, interconnect, анализ для single-GPU и multi-GPU сценариев, базовые требования к CPU и RAM.",
          },
          {
            src: assetUrl("assets/cto-estimate-server-roi.png"),
            alt: "CTO Estimate server ROI calculator",
            caption: "Server ROI Calculator: расчет экономии от автоматизации, сравнение с Cloude API, сценариев загрузки и срока окупаемости с учетом TCO.",
          },
        ],
        href: "https://cto-estimate.openweights.space/",
        external: true,
      },
      {
        title: "PDF Translator",
        year: "2026",
        description: "Document AI-фреймворк для перевода строительных PDF-чертежей с сохранением исходной геометрии, графики, таблиц и технических обозначений.",
        role: "AI Engineer",
        period: "2026",
        detail: "Разработал PDF Translator для AI-перевода проектной документации. Система извлекает текстовые блоки, координаты, bbox, шрифты и геометрию, классифицирует области документа, переводит содержимое через cloud или local LLM и восстанавливает переведенный текст в исходную PDF-разметку без разрушения чертежа.",
        impact: [
          "Сохраняет графику, таблицы, штампы, размеры, поворот текста, выравнивание и технические аннотации.",
          "Использует PyMuPDF для extraction-слоя, классификацию регионов body_text, table, stamp, sidestamp, note, legend и graphic.",
          "Поддерживает гибридный routing между BabelDOC и custom geometry-aware pipeline, а также OpenRouter, Ollama и Mock backend для отладки.",
          "Включает расширяемый glossary для аббревиатур, нотации, стандартных терминов и protected headers, CLI и Flask Web UI с job queue, SSE progress, authentication, preview и сравнением оригинала с переводом.",
        ],
        tags: ["pdf translation", "layout preservation", "technical drawings", "geometry-aware pipeline", "translation preview"],
        media: {
          src: assetUrl("assets/pdf-translator.gif"),
          alt: "Демонстрация интерфейса PDF Translator",
        },
        href: "https://pdf-translator.ru/",
        external: true,
      },
      {
        title: "AI/ML Tools",
        year: "2026",
        description: "Интерактивный каталог open-source AI, ML и MLOps-инструментов с таксономией, поиском и фильтрами.",
        role: "ML Engineer",
        period: "2026",
        media: {
          src: assetUrl("assets/ai-ml-tools-card.png"),
          alt: "AI/ML Tools dashboard preview",
        },
        detail: "Построил практичную базу знаний по open-source AI/ML/MLOps-инструментам. Каталог помогает быстро ориентироваться в инструментах для LLM, RAG, векторные БД, мониторинг, data engineering, обучение и инфраструктуры.",
        impact: [
          "Систематизировал 312 open-source инструментов в 58 технических категорий и 7 высокоуровневых групп.",
          "Добавил поиск по названию, описанию и разработчику, фильтры по категории, группе и runtime/stack.",
          "Реализовал сортировку, конфигурируемые колонки таблицы и detail view для каждого инструмента.",
          "Собрал удобный lightweight single-page dashboard для поддержки и расширения каталога.",
        ],
        tags: ["tool catalog", "taxonomy", "search & filters", "detail view", "runtime discovery"],
        href: "https://ai-tools.openweights.space/",
        external: true,
      },
    ],
    posts: [
      {
        title: "RAG без боли: как выбрать chunking strategy",
        date: "Апр 2026",
        time: "7 мин",
        tags: ["rag", "retrieval"],
      },
      {
        title: "Как оценивать качество RAG-системы в 2026",
        date: "Фев 2026",
        time: "9 мин",
        tags: ["evals", "rag"],
      },
      {
        title: "FastAPI + Pydantic v2: шаблон для AI-сервисов",
        date: "Янв 2026",
        time: "5 мин",
        tags: ["fastapi", "python"],
      },
      {
        title: "Почему LangChain — это не всегда плохо",
        date: "Дек 2026",
        time: "4 мин",
        tags: ["opinion", "llm"],
      },
      {
        title: "Embeddings на практике: что влияет на качество",
        date: "Ноя 2026",
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
    ui: {
      brandAria: "Go to page",
      languageToggle: "Toggle language",
      themeToggle: "Toggle theme",
      openProject: "Details",
      closeProject: "Close project details",
      projectDetails: "project details",
      visitProject: "open project ↗",
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
      date: "April 2026 · Moscow",
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
        title: "AI Assistant Core Platform",
        year: "2024",
        description: "A modular RAG platform for enterprise AI assistants working with internal knowledge, documentation, and unstructured data.",
        role: "AI Engineer",
        period: "2024",
        detail: "Developed an enterprise platform for building corporate assistants on top of Retrieval-Augmented Generation. The system indexes documents, converts them into embeddings, retrieves relevant context through hybrid search, and passes it into the LLM orchestration layer, improving factual accuracy and reducing hallucinations.",
        impact: [
          "Built the document pipeline: preprocessing, semantic segmentation, embedding generation, and indexing in PostgreSQL + pgvector.",
          "Implemented the RAG flow with hybrid search, LLM orchestration, self-hosted inference via Ollama, and an Open WebUI interface.",
          "Added production infrastructure components: Redis, ClickHouse, MinIO, Supabase, n8n, Langfuse, Prometheus, and Grafana.",
          "Prepared a scalable architecture for integration with internal knowledge bases and response quality monitoring.",
        ],
        tags: ["enterprise rag", "hybrid search", "self-hosted inference", "knowledge base", "observability"],
        media: [
          {
            src: assetUrl("assets/ai-assistant-core-platform-chat.png"),
            alt: "AI Assistant Core Platform chat interface",
            caption: "Familiar chat interface for the corporate assistant.",
          },
          {
            src: assetUrl("assets/ai-assistant-core-platform-monitoring.png"),
            alt: "AI Assistant Core Platform infrastructure monitoring",
            caption: "Infrastructure monitoring and service health.",
          },
          {
            src: assetUrl("assets/ai-assistant-core-platform-tracing.png"),
            alt: "AI Assistant Core Platform tracing and quality monitoring",
            caption: "Tracing and answer quality monitoring.",
          },
        ],
        postMedia: {
          type: "video",
          src: assetUrl("assets/ai-assistant-core-platform-demo.mp4"),
          alt: "AI Assistant Core Platform demo",
          caption: "AI Assistant Core Platform demo.",
        },
        href: GITHUB_URL,
        external: true,
      },
      {
        title: "CTO Estimate",
        year: "2024",
        description: "An interactive tool for evaluating self-hosted LLM infrastructure: model selection, GPU sizing, and local server economics.",
        role: "AI Engineer",
        period: "2024",
        detail: "Built a set of CTO-facing tools for early-stage local AI infrastructure planning. The project helps evaluate which open-weight models can run locally, what GPU and server resources are required, and when owning a dedicated inference server becomes economically justified compared with cloud APIs.",
        impact: [
          "Self-hosted LLM Dashboard: open-weight model catalog from Artificial Analysis, advanced filters, top-10 rankings, Hugging Face architecture parameters, and side-by-side comparison.",
          "GPU Calculator: VRAM, bandwidth, compute, interconnect, single-GPU and multi-GPU fit analysis, plus basic CPU and RAM host requirements.",
          "Server ROI Calculator: TCO, CAPEX/OPEX, electricity, automation savings, utilization scenarios, payback period, and optional cloud API cost comparison.",
          "Model data updates once per day, and the interface is shaped as a practical dashboard for infrastructure decisions before purchasing hardware.",
        ],
        tags: ["self-hosted llm", "gpu calculator", "server roi", "tco", "cloud api compare"],
        media: [
          {
            src: assetUrl("assets/cto-estimate-self-hosted-llm.png"),
            alt: "CTO Estimate self-hosted LLM dashboard",
            caption: "Self-hosted LLM: catalog, filters, ratings, and model comparison for local deployment planning.",
          },
          {
            src: assetUrl("assets/cto-estimate-gpu-calculator.png"),
            alt: "CTO Estimate GPU calculator",
            caption: "GPU Calculator: VRAM, bandwidth, compute, and host requirements for inference scenarios.",
          },
          {
            src: assetUrl("assets/cto-estimate-server-roi.png"),
            alt: "CTO Estimate server ROI calculator",
            caption: "Server ROI Calculator: CAPEX, OPEX, electricity, payback period, and local server economics.",
          },
        ],
        href: "https://cto-estimate.openweights.space/",
        external: true,
      },
      {
        title: "PDF Translator",
        year: "2023",
        description: "A Document AI framework for translating construction PDF drawings while preserving layout geometry, graphics, tables, and technical notation.",
        role: "AI Engineer",
        period: "2023",
        detail: "Developed PDF Translator for AI-powered translation of construction and engineering documentation. The system extracts text blocks, coordinates, bounding boxes, fonts, and geometry, classifies document regions, translates content through cloud or local LLMs, and restores translated text into the original PDF layout without breaking the drawing.",
        impact: [
          "Preserves line-art, tables, title blocks, side stamps, coordinates, text rotation, alignment, and technical annotations.",
          "Uses PyMuPDF for the extraction layer and region classification for body_text, table, stamp, sidestamp, note, legend, and graphic areas.",
          "Supports hybrid routing between BabelDOC and a custom geometry-aware pipeline, plus OpenRouter, Ollama, and a Mock backend for offline debugging.",
          "Includes an extensible glossary for abbreviations, notation, standard technical terms, and protected headers, plus CLI and Flask Web UI with job queueing, SSE progress, authentication, preview, and original-vs-translated comparison.",
        ],
        tags: ["pdf translation", "layout preservation", "technical drawings", "geometry-aware pipeline", "translation preview"],
        media: {
          src: assetUrl("assets/pdf-translator.gif"),
          alt: "PDF Translator interface demo",
        },
        href: "https://pdf-translator.ru/",
        external: true,
      },
      {
        title: "AI/ML Tools",
        year: "2023",
        description: "An interactive catalog of open-source AI, ML, and MLOps tools with taxonomy, search, filters, and a lightweight SPA interface.",
        role: "ML Engineer",
        period: "2023",
        media: {
          src: assetUrl("assets/ai-ml-tools-card.png"),
          alt: "AI/ML Tools dashboard preview",
        },
        detail: "Built a practical knowledge base for open-source AI/ML/MLOps tools by turning a raw project list into a structured dashboard for AI engineers. The catalog helps navigate tools across LLMs, RAG, vector databases, model serving, monitoring, data engineering, governance, training, and infrastructure.",
        impact: [
          "Structured 312 open-source tools into 58 technical categories and 7 high-level groups.",
          "Added search by tool name, description, and developer, with filters by category, group, and runtime/stack.",
          "Implemented sorting, configurable table columns, and a detail view for each tool.",
          "Built a lightweight single-page dashboard without a frontend framework, keeping the catalog easy to maintain and extend.",
        ],
        tags: ["tool catalog", "taxonomy", "search & filters", "detail view", "runtime discovery"],
        href: "https://ai-tools.openweights.space/",
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

function getPageVisibilityConfig() {
  return window.PAGE_VISIBILITY_CONFIG || {};
}

function getVisiblePages(copy) {
  return Object.entries(copy.nav).filter(([key]) => getPageVisibilityConfig()[key] !== false);
}

function getDefaultPage(copy) {
  return getVisiblePages(copy)[0]?.[0] || "about";
}

function ensureValidPage(copy) {
  const visiblePages = new Set(getVisiblePages(copy).map(([key]) => key));
  if (!visiblePages.has(state.page)) {
    state.page = getDefaultPage(copy);
  }
}

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
  const copy = DATA[state.language] || DATA.ru;
  const projects = [...copy.projects];
  const assistantIndex = projects.findIndex((project) => project.title === "AI Assistant Core Platform");
  const toolsIndex = projects.findIndex((project) => project.title === "AI/ML Tools");
  const ctoIndex = projects.findIndex((project) => project.title === "CTO Estimate");
  const pdfTranslatorIndex = projects.findIndex((project) => project.title === "PDF Translator");

  if (assistantIndex !== -1 && toolsIndex !== -1) {
    [projects[assistantIndex], projects[toolsIndex]] = [projects[toolsIndex], projects[assistantIndex]];
  }

  if (ctoIndex !== -1 && pdfTranslatorIndex !== -1) {
    [projects[ctoIndex], projects[pdfTranslatorIndex]] = [projects[pdfTranslatorIndex], projects[ctoIndex]];
  }

  return { ...copy, projects };
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

function getMediaKind(item) {
  if (item?.type) {
    return item.type;
  }

  const src = String(item?.src || "").toLowerCase();
  if (/\.(mp4|webm|ogg)(?:[?#]|$)/.test(src)) {
    return "video";
  }

  return "image";
}

function renderMediaElement(item, fallbackAlt) {
  const src = escapeHtml(item.src);
  const alt = escapeHtml(item.alt || fallbackAlt);

  if (getMediaKind(item) === "video") {
    const mimeType = item.mimeType || (String(item.src).toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4");
    const poster = item.poster ? ` poster="${escapeHtml(item.poster)}"` : "";
    return `
      <video controls preload="metadata" playsinline${poster}>
        <source src="${src}" type="${escapeHtml(mimeType)}">
      </video>
    `;
  }

  return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
}

function renderProjects(projects) {
  const allProjects = getCopy().projects;

  return `
    <div class="card-grid">
      ${projects.map((project) => {
        const projectIndex = allProjects.indexOf(project);
        return `
        <article class="card">
          <div class="card-header">
            <div class="card-title">${escapeHtml(project.title)}</div>
            <span class="meta">${escapeHtml(project.year)}</span>
          </div>
          <p class="card-description">${escapeHtml(project.description)}</p>
          <div class="tag-list">${renderTags(project.tags)}</div>
          <div class="card-actions">
            <a class="card-detail-button" href="#project-${escapeHtml(projectIndex)}">
              ${escapeHtml(getCopy().ui.openProject)}
            </a>
            <a class="card-link" href="${escapeHtml(project.href)}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="${escapeHtml(getCopy().ui.visitProject)}">↗</a>
          </div>
        </article>
      `;
      }).join("")}
    </div>
    ${projects.map((project) => renderProjectModal(getCopy(), allProjects.indexOf(project))).join("")}
  `;
}

function renderProjectMedia(project, projectIndex) {
  const mediaItems = Array.isArray(project.media) ? project.media : project.media ? [project.media] : [];

  if (!mediaItems.length) {
    return "";
  }

  if (mediaItems.length === 1) {
    const item = mediaItems[0];
    return `
      <figure class="modal-media">
        ${renderMediaElement(item, project.title)}
        ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
      </figure>
    `;
  }

  return `
    <section class="modal-carousel" aria-label="${escapeHtml(project.title)} media">
      <div class="carousel-frame">
        <button class="carousel-arrow carousel-arrow-prev" type="button" data-carousel-direction="prev" aria-label="Previous media item">‹</button>
        <div class="carousel-track" data-carousel-track>
          ${mediaItems.map((item, index) => `
          <figure class="carousel-slide" data-carousel-slide>
            <div class="carousel-media">
              ${renderMediaElement(item, project.title)}
            </div>
            <figcaption>
              <span>${escapeHtml(String(index + 1).padStart(2, "0"))}</span>
              ${escapeHtml(item.caption || item.alt || project.title)}
            </figcaption>
          </figure>
        `).join("")}
        </div>
        <button class="carousel-arrow carousel-arrow-next" type="button" data-carousel-direction="next" aria-label="Next media item">›</button>
      </div>
      <div class="carousel-dots" aria-hidden="true">
        ${mediaItems.map(() => `<span></span>`).join("")}
      </div>
    </section>
  `;
}

function renderProjectPostMedia(project) {
  const mediaItems = Array.isArray(project.postMedia) ? project.postMedia : project.postMedia ? [project.postMedia] : [];

  if (!mediaItems.length) {
    return "";
  }

  return mediaItems.map((item) => `
    <figure class="modal-media modal-media-post">
      ${renderMediaElement(item, project.title)}
      ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
    </figure>
  `).join("");
}

function renderProjectModal(copy, projectIndex) {
  const project = copy.projects[projectIndex];
  if (!project) {
    return "";
  }

  return `
    <div class="modal-backdrop" id="project-${escapeHtml(projectIndex)}">
      <a class="modal-dismiss" href="#work" aria-label="${escapeHtml(copy.ui.closeProject)}"></a>
      <aside class="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title-${escapeHtml(projectIndex)}">
        <a class="modal-close" href="#work" aria-label="${escapeHtml(copy.ui.closeProject)}">×</a>
        <p class="section-label">${escapeHtml(copy.ui.projectDetails)}</p>
        <div class="modal-header">
          <h2 class="modal-title" id="project-modal-title-${escapeHtml(projectIndex)}">${escapeHtml(project.title)}</h2>
          <span class="meta">${escapeHtml(project.period || project.year)}</span>
        </div>
        <p class="modal-role">${escapeHtml(project.role)}</p>
        <p class="modal-copy">${escapeHtml(project.detail || project.description)}</p>
        ${renderProjectMedia(project, projectIndex)}
        ${renderProjectPostMedia(project)}
        <ul class="modal-list">
          ${(project.impact || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <div class="tag-list">${renderTags(project.tags)}</div>
        <a class="button button-secondary modal-link" href="${escapeHtml(project.href)}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(copy.ui.visitProject)}</a>
      </aside>
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
  `;
}

function renderWork(copy) {
  return `
    <section class="section" id="work">
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
  ensureValidPage(copy);

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
  const visiblePages = getVisiblePages(copy);
  const [defaultPage, defaultPageLabel] = visiblePages[0] || ["about", copy.nav.about];
  const navLinks = visiblePages.map(([key, label]) => `
    <button class="nav-link ${state.page === key ? "is-active" : ""}" type="button" data-page="${key}">
      ${escapeHtml(label)}
    </button>
  `).join("");

  return `
    <nav class="site-nav">
      <button class="brand-button" type="button" data-page="${escapeHtml(defaultPage)}" aria-label="${escapeHtml(copy.ui.brandAria)} ${escapeHtml(defaultPageLabel)}">
        <span>${escapeHtml(state.name)}</span>
        <span class="brand-caret" aria-hidden="true"></span>
      </button>
      <div class="nav-actions">
        ${navLinks}
        <button class="nav-toggle" type="button" id="language-toggle" aria-label="${escapeHtml(copy.ui.languageToggle)}">${state.language}</button>
        <button class="nav-toggle" type="button" id="theme-toggle" aria-label="${escapeHtml(copy.ui.themeToggle)}">${iconTheme()}</button>
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
  ensureValidPage(copy);
  tweakName.value = state.name;
  tweakLanguage.value = state.language;
  tweakTheme.value = state.theme;
  tweakPage.innerHTML = getVisiblePages(copy)
    .map(([key, label]) => `<option value="${escapeHtml(key)}">${escapeHtml(label)}</option>`)
    .join("");
  tweakPage.value = state.page;
}

function renderApp() {
  applyDocumentState();
  persistState();

  const copy = getCopy();
  ensureValidPage(copy);

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
  const copy = getCopy();
  const visiblePages = new Set(getVisiblePages(copy).map(([key]) => key));
  if (!visiblePages.has(page)) {
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
  document.querySelectorAll("[data-carousel-direction]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const frame = button.closest(".carousel-frame");
      const track = frame?.querySelector("[data-carousel-track]");
      const slides = track ? Array.from(track.querySelectorAll("[data-carousel-slide]")) : [];
      if (!track || !slides.length) {
        return;
      }

      const currentLeft = track.scrollLeft;
      let activeIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - currentLeft);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      const direction = button.dataset.carouselDirection === "prev" ? -1 : 1;
      const nextIndex = (activeIndex + direction + slides.length) % slides.length;
      track.scrollTo({ left: slides[nextIndex].offsetLeft, behavior: "smooth" });
    });
  });
}

function bindStaticEvents() {
  tweakName.addEventListener("input", (event) => {
    state.name = event.target.value || getCopy().name;
    renderApp();
  });

  tweakPage.addEventListener("change", (event) => {
    setPage(event.target.value);
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
