const STORAGE_KEYS = {
  page: "showcase.page",
  theme: "showcase.theme",
  language: "showcase.language",
  name: "showcase.name",
};

const TELEGRAM_URL = "https://t.me/mvill22";
const LINKEDIN_URL = "https://www.linkedin.com/in/alexey-vikulin/";
const GITHUB_URL = "https://github.com/aavikulin";
const HABR_URL = "https://habr.com/ru/users/mVill/";
const YOUTUBE_URL = "https://www.youtube.com/@ai-asst";
const AI_ASST_CORE_URL = "https://github.com/aavikulin/ai-asst-core";
const HTML2CANVAS_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
const JSPDF_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
const SCRIPT_SRC = document.currentScript && document.currentScript.src ? document.currentScript.src : window.location.href;
const ASSET_ROOT = new URL(".", SCRIPT_SRC);
const assetUrl = (path) => new URL(path, ASSET_ROOT).href;
const externalScriptLoads = new Map();

const DATA = {
  ru: {
    title: "Алексей Викулин — AI Engineer",
    name: "Алексей Викулин",
    nav: {
      about: "обо мне",
      work: "проекты",
      writing: "публикации",
      now: "сейчас",
      cv: "cv",
      contact: "контакт",
    },
    ui: {
      brandAria: "Перейти на страницу",
      languageToggle: "Переключить язык",
      themeToggle: "Переключить тему",
      downloadCvPdf: "Скачать CV PDF",
      generatingPdf: "Собираю PDF…",
      openProject: "Подробнее",
      closeProject: "Закрыть описание проекта",
      projectDetails: "детали проекта",
      visitProject: "Открыть сайт",
    },
    about: {
      label: "обо мне",
      title: "Алексей Викулин",
      intro: "Проектирую и собираю AI-системы: от внутренних инструментов до enterprise RAG и self-hosted LLM-инфраструктуры.",
      summary: "За последнее время сделал RAG-платформу для корпоративных ассистентов, CTO Estimate для расчёта локального LLM-стека, PDF Translator для технических PDF-чертежей и каталог AI/ML Tools. Фокусируюсь на LLM-приложениях, инфраструктуре и надёжных пайплайнах вокруг моделей.",
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
      intro: "AI-системы и инструменты вокруг LLM.",
    },
    writing: {
      label: "публикации",
      intro: "Посты, статьи и обновления о проектах.",
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
        detail: "Разработал платформу для создания корпоративных ассистентов на базе Retrieval-Augmented Generation. Система индексирует документы, преобразует их в эмбеддинги и извлекает релевантный контекст через гибридный поиск, что повышает фактическую точность ответов и снижает риск галлюцинаций.",
        impact: [
          "Собрал пайплайн обработки документов: семантическая сегментация, генерация эмбеддингов и индексация в PostgreSQL + pgvector.",
          "Реализовал RAG-контур с hybrid search и reranking, self-hosted inference через Ollama и пользовательским интерфейсом Open WebUI.",
          "Добавил инфраструктурные компоненты для production-сценариев: Redis, ClickHouse, MinIO, Supabase, Langfuse, Prometheus и Grafana.",
          {
            text: "Проект открытый и доступен на ",
            linkLabel: "GitHub",
            href: AI_ASST_CORE_URL,
          },
        ],
        tags: ["RAG systems", "LLM apps", "vector search", "self-hosted AI", "AI observability"],
        media: [
          {
            src: assetUrl("assets/ai-assistant-core-platform-chat.png"),
            alt: "Привычный чат-интерфейс AI Assistant Core Platform",
            caption: "Чат-интерфейс с корпоративным ассистентом.",
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
          type: "youtube",
          src: "https://www.youtube.com/watch?v=FwM-2kYdr50",
          alt: "Демо AI Assistant Core Platform",
          caption: "Демо интерфейса AI Assistant Core Platform.",
        },
        href: AI_ASST_CORE_URL,
        cardLinkLabel: "GitHub",
        cardLinkIcon: "github",
        modalLinkLabel: "Открыть на GitHub",
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
        tags: ["LLM inference", "GPU sizing", "AI infrastructure", "model selection", "TCO"],
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
        tags: ["Document AI", "LLM translation", "PDF parsing", "layout-aware AI", "review UI"],
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
        detail: "Построил практичную базу знаний по open-source AI/ML/MLOps-инструментам. Каталог помогает быстро ориентироваться в open-source инструментах для LLM, RAG, векторных БД, мониторинга, data engineering, обучения и инфраструктуры.",
        impact: [
          "Систематизировал 312 open-source инструментов в 58 технических категорий и 7 высокоуровневых групп.",
          "Добавил поиск по названию, описанию и разработчику, фильтры по категории, группе и runtime/stack.",
          "Реализовал сортировку, конфигурируемые колонки таблицы и detail view для каждого инструмента.",
          "Собрал удобный lightweight single-page dashboard для поддержки и расширения каталога.",
        ],
        tags: ["AI tooling", "MLOps", "tool discovery", "search UX", "runtime stack"],
        href: "https://ai-tools.openweights.space/",
        external: true,
      },
    ],
    posts: [
      {
        title: "Пост в AI & Machine Learning Community — группе с 2 млн подписчиков",
        date: "27 мая 2026",
        time: "LinkedIn",
        tags: ["AI engineering", "ML community", "LinkedIn"],
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7465435615707361280/",
        external: true,
      },
      {
        title: "Автообновление моделей и автопостинг в Telegram для CTO Estimate",
        date: "20 мая 2026",
        time: "LinkedIn",
        tags: ["AI infrastructure", "automation", "Telegram"],
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7462803540986662913/",
        external: true,
      },
      {
        title: "PDF Translator опубликовали в отраслевых Telegram-каналах и на сайте",
        date: "20 мая 2026",
        time: "LinkedIn",
        tags: ["Document AI", "PDF translation", "release"],
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7462844191304421377/",
        external: true,
      },
      {
        title: "Какой AI внедрить в Enterprise и не остановить бизнес",
        date: "17 мар 2026",
        time: "Habr",
        tags: ["enterprise AI", "on-prem AI"],
        href: "https://habr.com/ru/articles/1011438/",
        external: true,
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
      downloadCvPdf: "Download CV PDF",
      generatingPdf: "Building PDF…",
      openProject: "Details",
      closeProject: "Close project details",
      projectDetails: "project details",
      visitProject: "Open website",
    },
    about: {
      label: "about",
      title: "Alexey Vikulin",
      intro: "I design and build AI systems, from internal engineering tools to enterprise RAG and self-hosted LLM infrastructure.",
      summary: "Recently I built a RAG platform for enterprise assistants, CTO Estimate for planning local LLM stacks, PDF Translator for technical drawing PDFs, and the AI/ML Tools catalog. I focus on LLM applications, infrastructure, and reliable pipelines around models.",
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
      intro: "AI systems and tools around LLMs.",
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
        year: "2025",
        description: "A modular RAG platform for enterprise AI assistants working with internal knowledge, documentation, and unstructured data.",
        role: "AI Engineer",
        period: "2025",
        detail: "Developed a platform for building enterprise assistants based on Retrieval-Augmented Generation. The system indexes documents, converts them into embeddings, and retrieves relevant context through hybrid search, which improves factual accuracy and reduces the risk of hallucinations.",
        impact: [
          "Built the document processing pipeline: semantic chunking, embedding generation, and indexing in PostgreSQL + pgvector.",
          "Implemented the RAG loop with hybrid search and reranking, self-hosted inference via Ollama, and an Open WebUI interface.",
          "Added production infrastructure components: Redis, ClickHouse, MinIO, Supabase, Langfuse, Prometheus, and Grafana.",
          {
            text: "The project is open and available on ",
            linkLabel: "GitHub",
            href: AI_ASST_CORE_URL,
          },
        ],
        tags: ["RAG systems", "LLM apps", "vector search", "self-hosted AI", "AI observability"],
        media: [
          {
            src: assetUrl("assets/ai-assistant-core-platform-chat.png"),
            alt: "AI Assistant Core Platform chat interface",
            caption: "Chat interface for the enterprise assistant.",
          },
          {
            src: assetUrl("assets/ai-assistant-core-platform-monitoring.png"),
            alt: "AI Assistant Core Platform infrastructure monitoring",
            caption: "Infrastructure monitoring and service health.",
          },
          {
            src: assetUrl("assets/ai-assistant-core-platform-tracing.png"),
            alt: "AI Assistant Core Platform tracing and quality monitoring",
            caption: "Request tracing and AI answer quality monitoring.",
          },
        ],
        postMedia: {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=FwM-2kYdr50",
          alt: "AI Assistant Core Platform demo",
          caption: "AI Assistant Core Platform demo.",
        },
        href: AI_ASST_CORE_URL,
        cardLinkLabel: "GitHub",
        cardLinkIcon: "github",
        modalLinkLabel: "Open on GitHub",
        external: true,
      },
      {
        title: "CTO Estimate",
        year: "2026",
        description: "An interactive tool for evaluating self-hosted LLM infrastructure: model selection, GPU sizing, and local server economics.",
        role: "AI Engineer",
        period: "2026",
        detail: "Developed a suite of CTO tools for early-stage local AI infrastructure planning. The project helps determine which open-weight models can be deployed locally, what GPU and server resources are required, and when buying a dedicated inference server becomes economically justified.",
        impact: [
          "Model data updates daily, and the interface is designed as a practical dashboard for infrastructure decisions before hardware is purchased.",
        ],
        tags: ["LLM inference", "GPU sizing", "AI infrastructure", "model selection", "TCO"],
        media: [
          {
            src: assetUrl("assets/cto-estimate-self-hosted-llm.png"),
            alt: "CTO Estimate self-hosted LLM dashboard",
            caption: "Self-hosted LLM Dashboard: catalog of open-weight models from Artificial Analysis, filters, top-10 rankings, architecture parameters from Hugging Face, and side-by-side model comparison.",
          },
          {
            src: assetUrl("assets/cto-estimate-gpu-calculator.png"),
            alt: "CTO Estimate GPU calculator",
            caption: "GPU Calculator: VRAM, bandwidth, compute, interconnect evaluation, analysis for single-GPU and multi-GPU scenarios, and baseline CPU and RAM requirements.",
          },
          {
            src: assetUrl("assets/cto-estimate-server-roi.png"),
            alt: "CTO Estimate server ROI calculator",
            caption: "Server ROI Calculator: automation savings, comparison with cloud APIs, workload scenarios, and payback period with TCO included.",
          },
        ],
        href: "https://cto-estimate.openweights.space/",
        external: true,
      },
      {
        title: "PDF Translator",
        year: "2026",
        description: "A Document AI framework for translating construction PDF drawings while preserving layout geometry, graphics, tables, and technical notation.",
        role: "AI Engineer",
        period: "2026",
        detail: "Developed PDF Translator for AI-powered translation of construction and engineering documentation. The system extracts text blocks, coordinates, bounding boxes, fonts, and geometry, classifies document regions, translates content through cloud or local LLMs, and restores translated text into the original PDF layout without breaking the drawing.",
        impact: [
          "Preserves graphics, tables, title blocks, dimensions, text rotation, alignment, and technical annotations.",
          "Uses PyMuPDF for the extraction layer and classifies body_text, table, stamp, sidestamp, note, legend, and graphic regions.",
          "Supports hybrid routing between BabelDOC and a custom geometry-aware pipeline, as well as OpenRouter, Ollama, and a Mock backend for debugging.",
          "Includes an extensible glossary for abbreviations, notation, standard terms, and protected headers, plus a CLI and Flask Web UI with a job queue, SSE progress, authentication, preview, and side-by-side comparison of the original and translation.",
        ],
        tags: ["Document AI", "LLM translation", "PDF parsing", "layout-aware AI", "review UI"],
        media: {
          src: assetUrl("assets/pdf-translator.gif"),
          alt: "PDF Translator interface demo",
        },
        href: "https://pdf-translator.ru/",
        external: true,
      },
      {
        title: "AI/ML Tools",
        year: "2026",
        description: "An interactive catalog of open-source AI, ML, and MLOps tools with taxonomy, search, and filters.",
        role: "ML Engineer",
        period: "2026",
        media: {
          src: assetUrl("assets/ai-ml-tools-card.png"),
          alt: "AI/ML Tools dashboard preview",
        },
        detail: "Built a practical knowledge base for open-source AI/ML/MLOps tools. The catalog helps engineers quickly navigate tools for LLMs, RAG, vector databases, monitoring, data engineering, training, and infrastructure.",
        impact: [
          "Structured 312 open-source tools into 58 technical categories and 7 high-level groups.",
          "Added search by tool name, description, and developer, with filters by category, group, and runtime/stack.",
          "Implemented sorting, configurable table columns, and a detail view for each tool.",
          "Built a lightweight single-page dashboard that is easy to maintain and extend.",
        ],
        tags: ["AI tooling", "MLOps", "tool discovery", "search UX", "runtime stack"],
        href: "https://ai-tools.openweights.space/",
        external: true,
      },
    ],
    posts: [
      {
        title: "Post published in AI & Machine Learning Community, a group with 2M subscribers",
        date: "May 27, 2026",
        time: "LinkedIn",
        tags: ["AI engineering", "ML community", "LinkedIn"],
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7465435615707361280/",
        external: true,
      },
      {
        title: "Added automatic model updates and Telegram autoposting to CTO Estimate",
        date: "May 20, 2026",
        time: "LinkedIn",
        tags: ["AI infrastructure", "automation", "Telegram"],
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7462803540986662913/",
        external: true,
      },
      {
        title: "PDF Translator was shared in industry Telegram channels and on the website",
        date: "May 20, 2026",
        time: "LinkedIn",
        tags: ["Document AI", "PDF translation", "release"],
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7462844191304421377/",
        external: true,
      },
      {
        title: "Which AI to implement in Enterprise without stopping the business",
        date: "Mar 17, 2026",
        time: "Habr",
        tags: ["enterprise AI", "on-prem AI"],
        href: "https://habr.com/ru/articles/1011438/",
        external: true,
      },
    ],
  },
};

function getDefaultName(language) {
  return (DATA[language] || DATA.ru).name;
}

function getInitialName(language) {
  const storedName = loadValue(STORAGE_KEYS.name, "");
  if (!storedName || storedName === DATA.ru.name || storedName === DATA.en.name) {
    return getDefaultName(language);
  }

  return storedName;
}

const initialLanguage = loadValue(STORAGE_KEYS.language, "ru");
const initialHashPage = getPageFromHash();

const state = {
  page: initialHashPage || loadValue(STORAGE_KEYS.page, "about"),
  theme: loadValue(STORAGE_KEYS.theme, getSystemTheme()),
  language: initialLanguage,
  name: getInitialName(initialLanguage),
  contactSent: false,
  telegramPulsePending: false,
  pdfExportPending: false,
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

function isDownloadCvPdfVisible() {
  return getPageVisibilityConfig().downloadCvPdf !== false;
}

function getVisiblePages(copy) {
  return Object.entries(copy.nav).filter(([key]) => getPageVisibilityConfig()[key] !== false);
}

function getDefaultPage(copy) {
  return getVisiblePages(copy)[0]?.[0] || "about";
}

function getPageFromHash() {
  return window.location.hash.replace(/^#/, "");
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

function setLanguage(nextLanguage) {
  const previousDefaultName = getDefaultName(state.language);
  const nextDefaultName = getDefaultName(nextLanguage);
  const usesDefaultName =
    !state.name || state.name === previousDefaultName || state.name === DATA.ru.name || state.name === DATA.en.name;

  state.language = nextLanguage;
  if (usesDefaultName) {
    state.name = nextDefaultName;
  }
}

function applyDocumentState() {
  const copy = getCopy();
  document.documentElement.lang = state.language;
  document.documentElement.dataset.theme = state.theme;
  document.title = copy.title;
}

function loadScriptOnce(src) {
  const existingLoad = externalScriptLoads.get(src);
  if (existingLoad) {
    return existingLoad;
  }

  const loadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existingScript || document.createElement("script");

    script.src = src;
    script.async = true;
    script.crossOrigin = "anonymous";

    const handleLoad = () => {
      script.dataset.loaded = "true";
      resolve();
    };

    const handleError = () => {
      externalScriptLoads.delete(src);
      reject(new Error(`Failed to load script: ${src}`));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      document.head.appendChild(script);
    }
  });

  externalScriptLoads.set(src, loadPromise);
  return loadPromise;
}

async function ensurePdfDependencies() {
  await Promise.all([
    loadScriptOnce(HTML2CANVAS_CDN_URL),
    loadScriptOnce(JSPDF_CDN_URL),
  ]);

  if (typeof window.html2canvas !== "function" || !window.jspdf?.jsPDF) {
    throw new Error("PDF dependencies are unavailable.");
  }
}

function getCvPdfFileName() {
  return `alexey-vikulin-cv-${state.language}.pdf`;
}

async function savePdfDocument(pdf, fileName) {
  const pdfBlob = pdf.output("blob");

  if (typeof window.showSaveFilePicker === "function") {
    const handle = await window.showSaveFilePicker({
      suggestedName: fileName,
      startIn: "downloads",
      types: [
        {
          description: "PDF document",
          accept: {
            "application/pdf": [".pdf"],
          },
        },
      ],
    });

    const writable = await handle.createWritable();
    await writable.write(pdfBlob);
    await writable.close();
    return;
  }

  pdf.save(fileName);
}

function renderCvPdfChips(items) {
  return items.map((item) => `<span class="cv-pdf-chip">${escapeHtml(item)}</span>`).join("");
}

function renderCvPdfProjects(copy) {
  return copy.projects.map((project) => `
    <article class="cv-pdf-entry">
      <div class="cv-pdf-entry-header">
        <h3>${escapeHtml(project.title)}</h3>
        <span>${escapeHtml(project.year)}</span>
      </div>
      <p>${escapeHtml(project.description)}</p>
      <div class="cv-pdf-chip-list">${renderCvPdfChips(project.tags || [])}</div>
    </article>
  `).join("");
}

function renderCvPdfPosts(copy) {
  return copy.posts.map((post) => `
    <article class="cv-pdf-entry cv-pdf-entry-compact">
      <div class="cv-pdf-entry-header">
        <h3>${escapeHtml(post.title)}</h3>
        <span>${escapeHtml(post.date)}</span>
      </div>
      <p>${escapeHtml(post.time)}</p>
    </article>
  `).join("");
}

function renderCvPdfDocument(copy) {
  const links = [
    { label: "Telegram", href: TELEGRAM_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
    { label: "GitHub", href: GITHUB_URL },
    { label: "Habr", href: HABR_URL },
  ];

  return `
    <article class="cv-pdf-document">
      <header class="cv-pdf-header">
        <div>
          <p class="cv-pdf-kicker">AI Engineer</p>
          <h1>${escapeHtml(state.name)}</h1>
        </div>
        <div class="cv-pdf-links">
          ${links.map((link) => `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`).join("")}
        </div>
      </header>

      <section class="cv-pdf-section">
        <h2>${escapeHtml(copy.about.label)}</h2>
        <p>${escapeHtml(copy.about.intro)}</p>
        <p>${escapeHtml(copy.about.summary)}</p>
      </section>

      <section class="cv-pdf-section">
        <h2>${escapeHtml(copy.cv.sections.experience)}</h2>
        <div class="cv-pdf-stack">
          ${copy.cv.experience.map((item) => `
            <article class="cv-pdf-entry">
              <div class="cv-pdf-entry-header">
                <h3>${escapeHtml(item.company)}</h3>
                <span>${escapeHtml(item.dates)}</span>
              </div>
              <p class="cv-pdf-role">${escapeHtml(item.role)}</p>
              <ul class="cv-pdf-list">
                ${item.items.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="cv-pdf-grid">
        <div class="cv-pdf-section">
          <h2>${escapeHtml(copy.cv.sections.education)}</h2>
          <div class="cv-pdf-stack">
            ${copy.cv.education.map((item) => `
              <article class="cv-pdf-entry cv-pdf-entry-compact">
                <div class="cv-pdf-entry-header">
                  <h3>${escapeHtml(item.institution)}</h3>
                  <span>${escapeHtml(item.year)}</span>
                </div>
                <p>${escapeHtml(item.degree)}</p>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="cv-pdf-section">
          <h2>${escapeHtml(copy.cv.sections.skills)}</h2>
          <div class="cv-pdf-chip-list">${renderCvPdfChips(copy.cv.skills)}</div>
        </div>
      </section>

      <section class="cv-pdf-section">
        <h2>${escapeHtml(copy.work.label)}</h2>
        <div class="cv-pdf-stack">
          ${renderCvPdfProjects(copy)}
        </div>
      </section>

      <section class="cv-pdf-section">
        <h2>${escapeHtml(copy.writing.label)}</h2>
        <div class="cv-pdf-stack">
          ${renderCvPdfPosts(copy)}
        </div>
      </section>
    </article>
  `;
}

function getCvPdfPrintStyles() {
  return `
    :root {
      color-scheme: light;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "JetBrains Mono", Consolas, "Courier New", monospace;
      background: #f6f0e3;
      color: #171717;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .cv-pdf-document {
      width: min(100%, 794px);
      margin: 0 auto;
      padding: 40px 44px 48px;
      background: #f6f0e3;
    }

    .cv-pdf-header,
    .cv-pdf-entry-header,
    .cv-pdf-grid {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    .cv-pdf-header {
      align-items: flex-start;
      padding-bottom: 20px;
      border-bottom: 1px solid #d7cfc2;
    }

    .cv-pdf-kicker,
    .cv-pdf-section h2,
    .cv-pdf-entry-header span {
      margin: 0;
      color: #6c665e;
      font-size: 11px;
      line-height: 1.5;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .cv-pdf-header h1,
    .cv-pdf-entry h3 {
      margin: 0;
      color: #171717;
      font-weight: 600;
    }

    .cv-pdf-header h1 {
      font-size: 34px;
      line-height: 1.1;
      margin-top: 8px;
    }

    .cv-pdf-section {
      margin-top: 28px;
    }

    .cv-pdf-section p,
    .cv-pdf-list li {
      margin: 0;
      color: #242424;
      font-size: 13px;
      line-height: 1.7;
    }

    .cv-pdf-stack {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .cv-pdf-entry {
      padding-top: 18px;
      border-top: 1px solid #d7cfc2;
    }

    .cv-pdf-entry-compact {
      padding-top: 14px;
    }

    .cv-pdf-entry h3 {
      font-size: 14px;
      line-height: 1.45;
    }

    .cv-pdf-role {
      margin-top: 6px !important;
      color: #6c665e !important;
    }

    .cv-pdf-list {
      margin: 10px 0 0;
      padding-left: 18px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .cv-pdf-chip-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 12px;
    }

    .cv-pdf-chip {
      display: inline-flex;
      align-items: center;
      min-height: 22px;
      padding: 0 8px;
      border: 1px solid #d7cfc2;
      border-radius: 999px;
      font-size: 11px;
      line-height: 1.2;
      color: #514b44;
      background: rgba(255, 255, 255, 0.36);
    }

    .cv-pdf-links {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: flex-end;
      text-align: right;
      font-size: 12px;
      line-height: 1.5;
    }

    @media print {
      @page {
        size: A4;
        margin: 10mm;
      }

      .cv-pdf-document {
        width: auto;
        margin: 0;
        padding: 0;
      }
    }
  `;
}

function openCvPrintFallback(copy) {
  const printWindow = window.open("", "_blank", "noopener,noreferrer");
  if (!printWindow) {
    window.print();
    return;
  }

  printWindow.document.open();
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="${escapeHtml(state.language)}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${escapeHtml(copy.title)}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
        <style>${getCvPdfPrintStyles()}</style>
      </head>
      <body>
        ${renderCvPdfDocument(copy)}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

async function downloadCvPdf() {
  if (state.pdfExportPending) {
    return;
  }

  state.pdfExportPending = true;
  renderApp();

  const copy = getCopy();
  let renderShell;

  try {
    await ensurePdfDependencies();

    renderShell = document.createElement("div");
    renderShell.className = "cv-pdf-render-shell";
    renderShell.innerHTML = renderCvPdfDocument(copy);
    document.body.appendChild(renderShell);

    const renderTarget = renderShell.querySelector(".cv-pdf-document");
    const canvas = await window.html2canvas(renderTarget, {
      backgroundColor: "#f6f0e3",
      scale: Math.min(window.devicePixelRatio || 1, 2),
      useCORS: true,
      logging: false,
    });

    const pdf = new window.jspdf.jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
      compress: true,
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 24;
    const printableWidth = pageWidth - (margin * 2);
    const printableHeight = pageHeight - (margin * 2);
    const pixelsPerPage = Math.floor((printableHeight * canvas.width) / printableWidth);

    for (let sourceY = 0, pageIndex = 0; sourceY < canvas.height; sourceY += pixelsPerPage, pageIndex += 1) {
      const sliceHeight = Math.min(pixelsPerPage, canvas.height - sourceY);
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeight;

      const context = pageCanvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas 2D context is unavailable.");
      }
      context.fillStyle = "#f6f0e3";
      context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
      context.drawImage(
        canvas,
        0,
        sourceY,
        canvas.width,
        sliceHeight,
        0,
        0,
        pageCanvas.width,
        pageCanvas.height,
      );

      if (pageIndex > 0) {
        pdf.addPage();
      }

      const pageImageHeight = (sliceHeight * printableWidth) / canvas.width;
      pdf.addImage(
        pageCanvas.toDataURL("image/jpeg", 0.92),
        "JPEG",
        margin,
        margin,
        printableWidth,
        pageImageHeight,
        undefined,
        "FAST",
      );
    }

    await savePdfDocument(pdf, getCvPdfFileName());
  } catch (error) {
    if (error?.name === "AbortError") {
      return;
    }

    console.error("CV PDF export failed, falling back to print.", error);
    openCvPrintFallback(copy);
  } finally {
    renderShell?.remove();
    state.pdfExportPending = false;
    renderApp();
  }
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

function iconTelegram() {
  return `
    <svg class="social-icon social-icon-telegram" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.906 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
    </svg>
  `;
}

function iconLinkedin() {
  return `
    <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3C4.15 3 3.25 3.9 3.25 5s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15.5 9.88c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.37 1.86V8.5H9.68c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20H20.4v-6.12z"></path>
    </svg>
  `;
}

function iconYoutube() {
  return `
    <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.58 7.19a2.987 2.987 0 0 0-2.1-2.11C17.62 4.5 12 4.5 12 4.5s-5.62 0-7.48.58A2.987 2.987 0 0 0 2.42 7.2C1.84 9.05 1.84 12 1.84 12s0 2.95.58 4.81a2.987 2.987 0 0 0 2.1 2.11C6.38 19.5 12 19.5 12 19.5s5.62 0 7.48-.58a2.987 2.987 0 0 0 2.1-2.11c.58-1.86.58-4.81.58-4.81s0-2.95-.58-4.81zM10.2 14.98V9.02L15.4 12l-5.2 2.98z"></path>
    </svg>
  `;
}

function iconHabr() {
  return `
    <svg class="social-icon social-icon-habr" viewBox="0 0 180 180" aria-hidden="true">
      <path fill="currentColor" d="M39.0739 81.9068c.3155.4707.6299.9425.9463 1.4132-1.8925-.059-3.8835-.2429-4.2692-1.0529.008-.0403.016-.0811.0261-.1209 1.0628-.2787 1.9749-.2959 3.2968-.2394Zm10.0981 4.2916c.1509.4657.306.9297.4568 1.3937-.3586.0152-.7144.0312-1.0701.0455.0854-.4741.1722-.949.2547-1.4232.121-.0059.2377-.0101.3586-.016Zm3.6559 10.1781c-.9484.8743-1.6854 1.4578-2.2487 2.7748-.7861-.639-1.1897-1.9123-1.4424-3.3365-.2737-1.5469-.3693-3.272-.5781-4.5608.0228-.219.0447-.438.0667-.658.3676-.0272.7352-.0545 1.101-.08.9327 1.766 1.8688 3.531 2.805 5.2988.0991.1863.1965.3735.2965.5617ZM51.4048 83.32c.1196-.7952.2405-1.5884.3658-2.3816.0256-.159.0483-.319.0697-.4771.1209-.0059.2405-.0118.3586-.0197-.2675.9601-.5322 1.9183-.7941 2.8784Zm-.7637-12.9529c1.6771.4542 3.3542.9093 5.033 1.3644-.008.0756-.0144.1511-.0208.2257-2.3437 1.7198-4.5093 2.4836-5.6716 5.606.1461-2.3185.2946-4.637.4399-6.9554.0726-.0812.1453-.1605.2195-.2407Zm4.7008-7.196c-.33 3.2334.1311 4.6665.6963 6.6722.8976.6399 1.2507 1.0207.9585 1.963-1.5113-.7455-3.1075-1.5276-5.4192-1.4066-.0586-.0639-.1164-.1278-.1727-.1909.6524-2.5527 1.9138-4.1187 2.8931-6.1405.3485-.2999.6955-.599 1.044-.8972Zm7.2291-4.3024c.0731-.0042.1471-.0101.2184-.0152-.6928 2.3847-.9722 7.8894-2.1874 10.0744-2.8655-1.3556-2.8106-7.2251.3996-9.5438.524-.1727 1.0462-.3444 1.5694-.5154Zm-2.6729 17.6748c.8055.8724 1.6094 1.7448 2.4158 2.6181-.947 2.9132-2.7458 5.1073-3.5025 8.476-.4781-.0352-.952-.0712-1.43-.1055-1.2166-3.3986 1.8336-8.9316 2.3513-11.4081.7452.0866 1.4895.1714 2.2363.2589.2738.6974.5475 1.3948.8204 2.0931-.9626-.6442-1.9278-1.2893-2.8913-1.9325Zm6.6083-17.69c-.2428 2.8253.3804 4.2882.5523 6.4822-1.4223.7174-2.8478 1.4365-4.2693 2.153.3576-3.604 1.0875-5.9786 2.0837-8.5142.545-.0409 1.09-.081 1.6333-.121Zm1.6593-4.2974c.1057-.0078.2128-.0135.3161-.0202-.1562.4598-.3161.9196-.4811 1.3783-.3111.0203-.6284.0406-.942.0609.2393-.284.4836-.5703.7291-.8554.1272-.1883.2519-.3753.3779-.5636Zm.3161 13.1879c-1.4212.8737-2.8457 1.7494-4.2693 2.6231.0864-1.5896 2.113-3.723 3.8056-4.3176.1304.0706.2559.1411.3879.2117.0244.4939.0497.9889.0758 1.4828Zm2.8461-9.9187c-.2573 1.4595-.5147 2.919-.769 4.3785-.2672.1677-.5351.3336-.7993.5003-.1404.1569-.2801.3119-.422.467-.7743-1.0854-.9656-3.742-.8016-5.7568.9321.1379 1.862.2749 2.7919.411Zm2.8462-3.2853c-.0061.048-.0115.0949-.0176.1418-.3652.3471-.7281.6947-1.091 1.0423-.7243.2779-.8151.2662-1.7376.2357.125-.4748.2569-.9497.3873-1.4239.8189.0011 1.64.0023 2.4589.0041Zm2.8461-5.761c-.4234.9585-.8468 1.918-1.2702 2.8784-1.4746-.1061-2.9483-.2123-4.4221-.3195.0081-.0772.0138-.1544.022-.2326 1.8182-.8388 3.4108-1.8311 5.6703-2.3263Zm-2.299 7.4704c.1568-.0918.3129-.1825.4697-.2743.135.4804.2712.9593.4062 1.4392-.4743-.0923-.9499-.1846-1.423-.2775.1814-.2958.3634-.5921.5471-.8874Zm3.7221 4.2588c-1.6952.6575-4.0383.4767-5.3935 1.2237-.0986-.5771-.1972-1.1525-.2988-1.7296.2988-.3826.5915-.7662.8863-1.1488 1.4357.5607 2.8703 1.125 4.303 1.6867.168-.0101.335-.021.503-.032Zm-3.6396 2.5895c-.6446.0241-1.2912.0488-1.9329.0734-.0435-.2032-.0783-.4064-.1198-.6095 1.3598-.5521 3.6434-.6055 5.6923-.8297-.721.3956-1.439.7912-2.161 1.1873-.4928.059-.9838.1185-1.4786.1785Zm5.0627-.0004c-1.6302.4041-3.1919 1.8361-4.257 2.9522-.2088-1.2998 2.3017-3.6007 3.5045-4.3176.5339.4737.5899.424.7525 1.3654Zm2.8461-17.1967c-.0064.0773-.0138.1517-.0212.228-.5701.3419-1.1412.6847-1.7104 1.0266-.8456.0612-1.6921.1234-2.5376.1846.0101-.0744.0175-.1516.0249-.226 1.4166-.405 2.8323-.8091 4.2443-1.2132Zm-2.3022 4.3176c-.181-.2689-.3612-.5377-.5439-.8066 1.282-1.0798 4.119-.4846 5.6923-.3257-1.7167.3775-3.4308.7556-5.1484 1.1323Zm12.7348-4.2387c2.3801.1939 4.5532.7561 6.2039 1.7842.1462-.0097.2933-.0171.4404-.026-.0872.124-.177.2466-.2642.3706-.7593.2236-1.5177.4472-2.2753.6707-1.3662-.1953-2.7368-.3914-4.1048-.5875-3.002-.4293-6.0075-.8594-9.0095-1.2887.0062-.0602.0159-.1189.0229-.1783 2.913-.6737 6.1-.9812 8.9866-.745Zm9.4679-.7591c-.17.2268-.337.4544-.505.6802-1.534-.1093-2.8018-.7097-3.7416-1.4392 1.4236.1801 2.8446.362 4.2696.5431-.007.0726-.016.1443-.023.2159Zm7.579 5.3204c.391-.1498.788-.2997 1.181-.4488.409.351.814.7044 1.224 1.0554-.165 1.1957-1.326 2.1793-2.214 3.3467-.228.0134-.454.0276-.682.0418-1.858-3.0628-4.2-6.4205-8.309-7.5997-.06-.1222-.119-.2445-.179-.3667.555-.2225 1.106-.4465 1.66-.6689 2.79.971 5.116 2.4451 7.708 3.2962.332.8045.229.5332-.389 1.344Zm3.435 6.8217c-.108-.1051-.214-.213-.323-.3195-.237.0144-.471.0345-.707.0518.39-.3728.783-.747 1.178-1.1197-.054.4619-.098.9268-.148 1.3874Zm1.255 15.8831c1.925 1.6627 2.418 4.0677 1.616 7.196-.827-1.8541-1.649-3.7081-2.478-5.5622.274-.4116.542-.8239.812-1.2371.017-.132.031-.2656.05-.3967Zm.561-12.9365c-.009.0891-.013.1783-.023.2674-.336.3844-.674.7699-1.012 1.1554-.13-.2552-.257-.5114-.388-.7666.606-1.0852.17-.5024.965-.6172.152-.0134.305-.0279.458-.039Zm1.183-.0164c1.503.5549 3.011 1.1107 4.51 1.6655-.01.15-.027.3009-.041.4509-.379.2549-.758.5089-1.138.762-1.506-.5549-3.008-1.1107-4.514-1.6646.015-.1509.029-.3018.042-.4518.38-.2549.76-.5089 1.141-.762Zm8.779 5.7568c-.833-.554-1.665-1.1052-2.499-1.6563-.117-.2234-.231-.4477-.347-.6701 1.084-.6633.927-.6302 2.075-.4097.254.912.512 1.8231.771 2.7361Zm1.423-.5471c-.166.1824-.333.364-.5.5471-.61-.3105-.717-.7083-.923-1.4392.435.1873.868.376 1.304.5647.041.1091.08.2183.119.3274Zm-1.063-4.1159c-.125.0086-.239.0158-.36.0259.39-.3728.785-.7455 1.184-1.1197-.276.3655-.557.7282-.824 1.0938Zm6.755 7.2392c-.233.1011-.465.2022-.694.3022-1.274-.7117-2.543-1.4224-3.81-2.1351-.396-.5361-.793-1.0742-1.188-1.6123 1.974-1.4562 2.043.2287 3.904 1.1477.593.7668 1.191 1.5337 1.788 2.2975Zm1.423 1.2665c-.474-.1713-.947-.3425-1.423-.5138.286-.1482.573-.2994.858-.4505.189.3224.377.6434.565.9643Zm-1.731 2.3205c.514 1.0362.51.7413 1.731.5898-.727.6274-1.457 1.2548-2.187 1.8823-.693-1.323-1.387-2.647-2.082-3.968.007-.0834.016-.1647.026-.2481 1.535-.3285 2.031.2258 3.53.4464.193.3081.388.6173.581.9264-.53.1251-1.064.2481-1.599.3712Zm.308 2.582c.949-.5178 1.896-1.0321 2.846-1.5491-.57 1.2791-1.31 1.9401-2.191 2.8784-.216-.4434-.435-.8867-.655-1.3293Zm5.693 5.4928c-.771.6651-1.271.8799-2.733.9985.391.0421.784.0868 1.174.1298-.009.0704-.016.1383-.023.2079-1.335.5646-2.671 1.13-4.009 1.6963-.037-1.7118-.067-3.4226-.102-5.1335.92-1.0871 1.845-2.1741 2.765-3.2629.171-.079.336-.1581.504-.2388.807 1.8681 1.619 3.7371 2.424 5.6027Zm-1.424-7.8706c7.858-2.1891 6.34 1.973 2.833 5.1463-.945-1.7149-1.892-3.4322-2.833-5.1463Zm7.116.8287c-2.895 13.5757-3.454 14.3159-13.692 20.1489-.177-.2699-.359-.5388-.539-.8086.122-.505.241-1.0091.362-1.5141 6.677-1.902 10.475-5.3883 10.079-13.2927 1.117-1.4298 2.231-2.8588 3.346-4.2886.149-.0816.296-.1624.444-.2449Zm.348 0c-.113-.4685-.23-.9382-.348-1.4072.357-.0113.713-.022 1.066-.0321-.239.4804-.478.9601-.718 1.4393Zm-17.425 13.2011c.032-.4995.066-.9999.101-1.4994.027-.4284.055-.8576.085-1.286.328-.1084.659-.2178.988-.3253.048-.0044.094-.0107.14-.016.277 1.6975.002 2.9569-.567 4.3176-.476-.3039-.57-.4337-.747-1.1909Zm-5.692 12.5927c.008-.0829.015-.1659.022-.2488.624-1.4861 1.246-2.9711 1.867-4.4562.128-.314.262-.628.394-.9399 1.092.0735 2.192.1471 3.286.2207.048.2477.082.486.101.7192.144 1.6923-.443 3.0479-1.05 4.8169-1.54-.0384-3.078-.0736-4.62-.1119Zm1.423 5.7776c.012-.742.026-1.485.04-2.226.019-.188.037-.375.054-.561.802.059 1.601.119 2.401.179l.351-.027c-.55.908-1.098 1.816-1.644 2.726-.403-.03-.802-.06-1.202-.091Zm-1.409-9.313c.047-.0248.096-.0496.145-.0751.38-.194.759-.3888 1.139-.5828.041-.0044.082-.0081.125-.0124-.06.1984-.115.3961-.172.5959-.219.7608-.438 1.5224-.658 2.2825-.196-.6762-.397-1.3539-.593-2.0315.004-.0599.007-.1182.014-.1766Zm-2.22 7.166c-.214-.214-.431-.429-.641-.64.627.434.218.01.641.64Zm-3.487-1.712c.799-.504 1.665-.349 2.846-.331-.118.382-.232.767-.349 1.149-.973.388-1.111.245-2.218.132-.092-.316-.183-.633-.279-.95Zm1.743 5.389c.369.865.737 1.73 1.103 2.594-.851.575-1.704 1.149-2.557 1.724-.761-1.038.071-3.958 1.454-4.318Zm-2.809-9.0321c-.116.0086-.234.0158-.357.0259.158-.357.312-.7124.467-1.0679-.033.3454-.073.6937-.11 1.042Zm4.098.3972c-.06-.0397-.124-.0788-.186-.119.211-.4367.415-.8744.626-1.3117.066-.0032.138-.0059.207-.0085.195.4602.395.921.591 1.3818-.413.0193-.825.0386-1.238.0574Zm9.853-18.7097c-.023-.1618-.05-.3251-.077-.4873.375-.4548.614-.7382 1.258-.9519.056.2828.112.5671.165.8514-.275.1829-.553.3663-.827.5512-.174.0124-.346.0247-.519.0366Zm-.077 3.5147c-.257.3386-.713.5296-1.038.8029-.13-2.3984-.259-4.7967-.385-7.196.474 2.1326.948 4.2633 1.423 6.3931Zm-2.611 9.6454c.942-.5217 1.074-.0396 1.188 1.232-.952-.0019-1.896-.0056-2.846-.0074.016-.1491.031-.2963.046-.4435.537-.2613 1.074-.5207 1.612-.7811Zm-1.396-3.9782c.213-.1815.426-.3651.643-.5467.172.3101.346.6202.518.9292-.081.1704-.159.3397-.242.51-.393-.0449-.786-.0907-1.181-.1366.089-.252.175-.5039.262-.7559Zm-.262 3.817c-.493.4637-.989.9295-1.484 1.3932-.322-.0534-.645-.1058-.966-.1602-.135.0136-.266.0262-.396.0387.232-.4406.46-.8792.693-1.3178.717.0157 1.436.0314 2.153.0461Zm-5.371-.8175c-.592-.413-.162-.3569-.276-.6678.091.2217.185.4448.276.6678Zm4.488-6.4246c-1.602-.8285-3.205-1.6578-4.81-2.4872.224-3.2904.629-7.0719.302-10.4657 3.709 1.3439 7.032 7.3566 4.508 12.9529Zm-3.386 0c1.183.6199 1.115 1.1934 2.756 1.693.287 1.067-.149 1.4873-.831 2.6246-.58-.0231-1.161-.0472-1.743-.0712-.361-1.8943.029-2.9835-.182-4.2464Zm.325 9.303c-.596-.4116-.169-.3569-.279-.6677.091.2245.182.4475.279.6677Zm9.636-13.8523c.004-.0882.009-.1764.014-.2635.428-.3157.855-.6282 1.283-.944.226 1.4732.141 3.9264-.196 5.7568-.757-.5945-.897-3.0945-1.101-4.5493Zm0 4.5479c.29-.4793.576-.9585.86-1.4378-.17.4692-.339.9398-.5 1.4119-.121.01-.239.0201-.36.0259Zm8.298-4.3024c.083-.0052.162-.0095.24-.0138.068 5.5124-3.342 6.5158-7.826 8.5902-.238.0156-.474.0312-.712.045.93-1.9246 1.86-3.8501 2.793-5.7747 1.835-.9489 3.672-1.896 5.505-2.8467Zm-8.434-10.771c.047.1419.092.2847.136.4275-.118.0857-.239.1705-.356.2552-.357-.48-.712-.9591-1.067-1.4392.431.2525.86.505 1.287.7565Zm-1.287 2.3939c.019-.0837.025-.1695.039-.251.104-.0074.209-.0147.314-.021.359.4812.714.9602 1.07 1.4393-.823-.3944-.959-.4895-1.423-1.1673Zm1.423 3.6782c-.64.6019-1.282 1.2047-1.921 1.8067-1.376-1.9882-2.747-3.9789-4.121-5.9671-1.777-1.5415-3.563-3.0847-5.343-4.6271.396-.3062.788-.6133 1.178-.9195 2.585 1.1167 7.11 3.2435 8.021 5.8973.297.8628-.724 1.5764-.029 2.2987.825.8549 1.651.2452 2.215 1.511Zm-12.011 9.0027c.143.0571.29.1143.434.1706.064 1.3826.127 2.7652.192 4.147-.222-.0513-.441-.1026-.666-.154-.625-.4603-1.063-2.6038-.49-3.5344.175-.2094.354-.4189.53-.6292Zm-3.152 7.2141c.152-.0058.309-.0122.459-.0181.157.3751.318.7502.473 1.1259-.241.0947-.487.1899-.732.2846-.23.0096-.457.0192-.691.0288.166-.4736.33-.9471.491-1.4212Zm-1.301 23.0097c-.203-.699-.41-1.4-.613-2.101.877-.254 1.752-.508 2.63-.763.07-.003.145-.009.216-.015-.009.065-.017.132-.022.197-.737.895-1.473 1.787-2.211 2.682Zm-2.036-5.757c.259-.843.449-.972.919-1.439.131.05.265.101.396.15.036.125.072.249.108.373-.292.286-.584.572-.875.86-.184.017-.366.037-.548.056Zm.669 1.439c-.222-.245-.446-.49-.669-.734.473-.235.951-.47 1.423-.705-.122.472-.246.944-.37 1.415-.127.008-.256.016-.384.024Zm-1.499 6.532c-.199-.163-.396-.325-.593-.488.145-.009.295-.018.439-.027.734-.567 1.464-1.134 2.195-1.699.069.577.142 1.155.212 1.731-.557.381-1.121.766-1.682 1.147-.19-.222-.379-.443-.571-.664Zm.108 16.479c-3.425.146-5.47-.725-8.274-.971-1.066-2.104-2.132-4.213-3.1977-6.318-.205-.211-.4099-.422-.6139-.633 5.3766-.637 8.7576-3.226 12.7406-5.015 1.411 1.335 4.604 8.153 1.791 11.172-.668 1.032-1.425 1.134-2.446 1.765Zm-14.7114-7.097c.4273-.026.8577-.055 1.2892-.083 1.9379 1.296 3.2582 3.621 4.1832 5.757-1.8972-.545-3.7971-1.094-5.6928-1.642.4222-1.438.6003-2.9.2204-4.032Zm-4.0886-5.433c2.1369-.617 4.271-1.23 6.408-1.846 3.361.329 6.722.658 10.085.984.06.171.122.339.183.507-3.004 1.348-6.419 2.484-9.8633 4.225-3.7306.296-4.6284-1.093-7.2137-2.007.1358-.623.2698-1.241.401-1.863Zm-.401 6.781c.0433-.415.0849-.831.1282-1.248.8169-.06 1.6338-.122 2.4539-.183.2009 1.086.4166 1.692.1135 2.879-.8985-.482-1.7963-.966-2.6956-1.448Zm-2.8462 2.255c.3173-.178.6365-.351.9529-.528 1.1695-.772 2.0507.26 3.3164.664-.1687.164-.3364.33-.5041.496-1.2557-.21-2.5104-.422-3.7652-.632Zm2.7632-2.247c-.309-.138-.618-.278-.9257-.421-.1386-.337-.2771-.68-.4144-1.018.4737.03.9481.06 1.4231.089-.0275.451-.0562.9-.083 1.35Zm-4.1862 0c.4752.408.9483.813 1.423 1.217-.0032.754-.0678.669-.2379 1.662-.3949-.96-.7886-1.918-1.1851-2.879Zm-3.6911-5.396c1.3356-.404 3.1172-.315 5.1141-.36-.6206.48-1.2367.959-1.8583 1.439-1.2783-.126-2.5566-.25-3.834-.376.1931-.234.3861-.469.5782-.703Zm-3.4243-72.1239c2.6414-2.5198 9.2723-1.7668 10.9343-.167.1498-.012.3014-.0262.4503-.0393-2.2118 2.055-5.6345 2.2929-7.7369 4.3271-1.6476-1.0957-3.0109-1.7974-3.6477-4.1208Zm14.5356 4.1208c.3733.4225.7449.845 1.1182 1.2668-.9969.0585-2.0452.1178-3.0885.2052-2.3553.1997-4.6812.5509-6.3067 1.3919-.0691.0057-.1399.0097-.2099.0145-.1196-.1844-.2384-.368-.3564-.5509 1.993-1.011 4.1671-1.824 6.873-2.1656.5621-.0705 1.1478-.1211 1.7604-.1475.0717-.0056.1408-.0112.2099-.0144Zm5.5436-7.1961c1.8394 1.8441 4.5884 2.9327 5.5364 5.7569-3.864-1.7909-9.7978-1.7649-12.8079-4.6129 2.6558.5644 4.9105.3549 7.2715-1.144Zm1.2674 10.0745c1.762.2413 3.522.4825 5.278.7219.141-.0098.278-.0225.414-.0342-1.409 1.2103-2.82 2.4196-4.233 3.6299-.664-1.3334-.825-3.1405-1.459-4.3176Zm6.782 6.1555c-.364-.0547-.727-.1109-1.09-.1655.474-.0778.948-.1555 1.423-.2332-.111.1338-.223.2677-.333.3987Zm-1.09-3.4393c.433-.4249.87-.8497 1.303-1.277.042.4793.078.9586.12 1.4392-.313-.069-.628-.1368-.944-.207-.158.0169-.321.0291-.479.0448Zm2.582 47.6315c-.208.008-.418.016-.624.025-.182-.168-.358-.336-.535-.503.137-.182.272-.363.412-.544.335-.131.672-.261 1.011-.393-.09.471-.176.942-.264 1.415Zm-1.134 2.624c.173-.201.35-.401.524-.602.015-.187.03-.374.045-.558.277.439.553.877.829 1.315-.476.041-.95.083-1.423.124.008-.092.016-.186.025-.279Zm-.564 4.597c-.294-.353-.588-.705-.884-1.057.947-.127 1.898-.255 2.846-.383l-1.356 1.398c-.201.014-.404.026-.606.042Zm.539 4.317c-.947-.113-1.895-.228-2.846-.341.667-.366 1.338-.731 2.006-1.098.28.478.562.958.84 1.439Zm-1.996-4.061c.191.182.381.364.573.546-.687.176-1.371.354-2.061.529-.736.035-1.472.071-2.208.108 1.023-.48 2.051-.961 3.077-1.439.208.086.414.171.619.256Zm-7.9656-62.1423c1.6626.0449 3.4196.4656 4.2696 1.4392-1.148-.1134-3.2078.0712-3.7286-.8105-.1763-.2099-.3599-.4198-.541-.6287Zm1.4455 5.7568c.8121.7088 1.0971 1.5435.9491 2.8784-1.2537-.4315-.9263-1.8002-.9491-2.8784Zm1.4011 9.0723c.015-.0818.027-.1635.044-.2452 2.835-.6143 3.449.367 2.156 1.2473-1.115-.1518-1.626-.5721-2.2-1.0021Zm3.645 36.9822c.206.051.414.103.624.155-.009.067-.016.132-.023.199-.468.361-.933.724-1.4 1.085.195-.476.389-.95.582-1.423.076-.007.146-.011.217-.016Zm-.784-35.1033c.352-.2916.708-.5842 1.06-.8768.116.4808.232.9595.348 1.4392-.475-.1034-.949-.2078-1.423-.3122.004-.0838.01-.1675.015-.2502Zm4.254 38.4853c-1.146.297-2.292.596-3.438.894-.277.014-.555.027-.831.042.006-.049.015-.097.022-.145 1.291-.251 2.116-.678 2.877-1.294.401.074.804.15 1.204.225.055.092.112.185.166.278Zm-2.455-3.382c-.13-.266-.262-.532-.391-.797.325-.213.653-.429.98-.642.148.081.295.159.443.237-.187.387-.375.773-.562 1.16-.156.014-.314.028-.47.042Zm-8.9297 9.952c.5639-.437 1.1304-.876 1.6934-1.317 1.7493.15 3.4953.3 5.2453.45.059.129.117.259.177.388-1.18.68-2.361 1.361-3.542 2.041-1.3129-.215-2.4495-.798-3.1297-1.593-.1474.012-.2957.021-.444.031Zm-2.6352.123c.8781.48 1.7582.959 2.6352 1.439-1.4231-.249-2.8462-.501-4.2692-.749.546-.23 1.089-.46 1.634-.69Zm-.211 2.938c-.0063.118-.0126.232-.0181.348-.272.15-.5408.3-.8105.451-.2002.023-.3958.052-.5944.075.0063-.116.0157-.231.022-.346.6205-.823.5149-.548 1.401-.528Zm-6.71-58.5733c-.1336-.1441-.269-.2873-.4053-.4295 1.4119-.7707 3.6426-1.134 5.8362-1.3117 1.8065-.1461 3.5858-.1682 4.8578-.1922.2302 1.4385.4613 2.8781.6906 4.3176-1.8561-.2037-3.6354-.4449-5.5484-.5333-1.5319-.0692-3.1497-.0423-4.9624.1816-.1525-.6785-.3096-1.3559-.4685-2.0325ZM89.4798 117.1c.1166.203.2315.405.3481.607-.1116.431-.2233.863-.3349 1.293-1.3106.101-2.6212.2-3.9343.3.4217-1.285 1.0501-1.902 1.7265-2.878.731.226 1.462.452 2.1946.678Zm-4.8516-4.996c-1.7871-.098-4.2413-1.406-4.7618-2.878 1.8988.482 3.7935.965 5.6923 1.447-.3095.477-.619.954-.9305 1.431Zm1.9992-.076c-.3572.027-.7115.051-1.0687.076.0114-.112.027-.226.037-.341.3956-.365.7869-.734 1.1826-1.098-.0513.456-.1011.908-.1509 1.363Zm-3.9149-52.6301c.578-.1811 1.1532-.3633 1.7312-.5444.3717.4639.7443.9293 1.115 1.3941-.3913.0151-.7779.0296-1.1691.0451-.5575-.2983-1.1187-.5965-1.6771-.8948Zm-.0222 61.7931c-.0897.314-.1786.628-.2683.943-.1391.012-.2766.027-.414.045-.2387-.481-.479-.962-.7186-1.44.4758.049.9474.097 1.4231.146-.0074.102-.0164.203-.0222.306Zm.7918-6.208c1.1081.222 2.2135.447 3.3189.67.0609.149.1208.299.1808.449-.8602 1.066-1.7185 2.131-2.5787 3.198-1.0355-.152-2.0746-.305-3.1137-.457.7321-1.287 1.4624-2.574 2.1927-3.86Zm24.8459-45.1036c.214-.3141.428-.6276.642-.9416.079-.0033.154-.0066.233-.0099.597.1497 1.19.2993 1.786.449.061.0841.124.1693.185.254-.666.2447-1.332.491-2 .7362-.281-.1627-.564-.3255-.846-.4877Zm3.848-4.6517c-.333-.2058-.663-.4101-1.002-.6174 1.022.3742.434-.0446 1.002.6174Zm-.321 6.5786c-.229-.1923-.455-.3847-.681-.5777.474-.2876.948-.5752 1.423-.8615-.248.4787-.496.9593-.742 1.4392Zm-.681 10.0745c.737.1822 1.476.3644 2.212.5471.595.2313.582.2948.634.8921-.951-.3644-2.541-.6144-2.846-1.4392Zm.216-3.9206c.101-.1323.205-.2641.306-.397.302.4802.602.9594.901 1.4392-.474-.0921-.949-.1836-1.423-.2762.072-.2548.144-.5101.216-.766ZM82.5648 125.313c.049.126.098.252.1477.378-.639.244-1.2794.488-1.917.732-.3087.024-.6189.049-.9291.073.0059-.065.0111-.13.02-.196.2175-.341.4334-.682.6538-1.022.9077-.419.9285-.146 2.0246.035Zm-4.1215-72.2163c1.2435.9175 1.5621 2.0572 1.3724 5.7568-.8197-1.0465-1.3136-3.2576-1.3724-5.7568Zm.8197-2.8785c-.037.3498-.0726.6952-.1082 1.042-.2376.0187-.4753.0346-.7115.0518.269-.3641.545-.7268.8197-1.0938Zm-.8197 1.4392c-.0365.3469-.0675.6937-.108 1.0406-.4361-.082-.879-.1626-1.3151-.2432.3605-.2562.7224-.5153 1.0828-.7715.1135-.01.2296-.0172.3403-.0259Zm0 83.4736c.2325-2.443.4692-4.885.7034-7.327 1.6624-.437 3.3265-.872 4.9889-1.308-1.7484 2.793-3.4951 5.584-5.2444 8.372-.149.089-.2989.178-.4479.263Zm.3518-19.693c.2566-.153.5103-.304.765-.455.6984.828.0722 2.017-.5825 2.878-.5521-.515-.612-.833-.4666-1.999.0941-.141.191-.284.2841-.424Zm-4.621-.704c.5477-.875 1.0945-1.752 1.6395-2.63.8775.513 1.755 1.026 2.6297 1.54-.9008 1.406-1.8081 2.81-2.7164 4.217-.8179-.724-1.3181-1.792-1.5528-3.127Zm0 11.271c.8714-.796 1.749-1.591 2.6215-2.387.4144.037.8299.074 1.2424.111.1347.223.2675.448.4053.672-.1074.698-.2098 1.397-.3141 2.095-1.3194-.164-2.6358-.327-3.9551-.491Zm-4.2693-1.954c1.0417-.624 2.0879-1.248 3.1295-1.872.7967.124 1.5889.248 2.3837.374.0579.108.1203.217.1791.327-.8367.726-1.6717 1.451-2.5066 2.177-1.2547-.13-2.087-.462-2.7401-1.031-.1506.008-.2994.017-.4456.025Zm-.4153-2.781c.383-.178.7639-.354 1.1427-.531.1631.036.3272.07.4913.106.0682.079.1363.158.2044.237-1.1024.366-2.212.732-3.3155 1.097-.3169-.111-.6337-.223-.9537-.333.8123-.193 1.6236-.384 2.4308-.576Zm-3.8539-1.352c.2786-.674.5588-1.348.8358-2.024 1.56-.202 1.9258.566 3.0927 1.05.1106.17.2261.342.3407.513-.5806.398-1.162.793-1.7425 1.19-.4716.031-.9424.062-1.4148.092-.3698-.273-.7388-.546-1.1119-.821Zm-2.8462 5.907c.6898-1.215 1.3805-2.432 2.0702-3.646 1.3756-.002 1.5412.112 2.1084.837.2489.42.0343.195-.5153.289-.0441.419-.0833.836-.1274 1.256.7211.112 1.4393.221 2.1565.335-.4223 1.05-.4899.912-1.1326 1.58-2.1182.115-3.0774-.29-4.5598-.651Zm-2.3972-5.086c1.2058.364 2.4106.726 3.6184 1.087.0663.143.1326.287.2019.43-.7757.934-1.5494 1.868-2.3231 2.801-1.1234-.368-2.2478-.736-3.3692-1.103.624-1.07 1.249-2.142 1.872-3.215Zm-13.9401-3.889c.0159-.144.0299-.286.0466-.428.6725.517 1.3468 1.035 2.0185 1.552.0589.136.1169.273.1749.41-4.2013 3.232 2.2216 13.776 9.5314 6.946 1.0479.42 2.0932.839 3.1429 1.258-1.2097 2.151-3.2853 2.998-5.4717 4.21-5.2272.435-12.5415-8.077-9.4426-13.948Zm4.8753 1.474c.0267.325.0514.649.0774.976-.3887-.292-.775-.582-1.1612-.874-.0885-.188-.1746-.377-.2619-.565.4488.155.897.309 1.3457.463Zm7.1928 6.112c-.8666.669-1.7349 1.34-2.6032 2.006-5.1167.537-7.1912-2.997-7.3583-7.342.3334-.402.6633-.803.9959-1.206.1469-.01.2938-.023.4398-.033 2.5786 2.026 4.8563 5.115 8.3543 6.138.0554.146.1134.291.1715.437Zm-4.9591-20.967c-.4661-.34-.4955-.502-.7332-1.071.3267-1.229.6509-2.4612.9759-3.6911.3796-.3313.7592-.6645 1.1379-.9948.2444.3577.4905.7136.7324 1.0694-.7038 1.5635-1.4084 3.1245-2.113 4.6875Zm-.7332 1.245c.7485-1.765 1.497-3.53 2.2472-5.2935.1548-.0914.3078-.1798.4599-.2692 1.0327 1.8187 2.5297 2.6427 2.9852 5.1117-1.1262 1.174-2.2542 2.349-3.3804 3.524-1.0484-.766-1.7794-1.766-2.3119-3.073Zm4.2692 4.4c.9528-.923 1.9029-1.845 2.8557-2.767.4694.959.9415 1.918 1.4136 2.879-1.4223-.039-2.8445-.075-4.2693-.112Zm7.1154-29.0804c-1.3494 2.8745-3.1421 4.8261-4.2174 7.604-.4678-2.5257 2.3599-6.156 3.2718-8.3866.1437-.0832.289-.1645.4326-.2486.1716.3434.3415.6869.513 1.0312Zm0-7.9153c2.114-.6542 3.535-1.8519 5.0516-3.1904.2128.6408.428 1.2826.6407 1.9233-.5997.7971-1.197 1.5973-1.796 2.3944-1.2998-.3748-2.5972-.7516-3.8963-1.1273Zm7.1154.1451c-.2566.327-.5144.6552-.771.9822-.2165-.0357-.4343-.0732-.6521-.1095l.0161-.156c.4316-.3917.8632-.7821 1.2921-1.1738.0367.1528.0775.305.1149.4571Zm-1.1215-6.1993c.0748-.0056.1496-.0097.2245-.0146.2984.6287.5986 1.2573.897 1.8843-.1136.333-.229.6636-.3408.9941-1.3-.6798-1.2477-1.4855-.7807-2.8638Zm-.2631 41.7229c.4354.312.8737.624 1.3135.938-.4526-.199-.9009-.396-1.352-.59.01-.118.0228-.235.0385-.348Zm-.0226 1.439c.4697.202.9384.405 1.4072.609-.0085.057-.0162.115-.023.174-1.0032.698-2.0123 1.397-3.0172 2.095-.8685-.385-.975-1.16-1.229-2.01.0068-.059.0153-.117.0221-.175.947-.232 1.8947-.462 2.8399-.693Zm-4.2142-2.879c.4517.182.9005.362 1.3522.543-.2417.141-.4806.282-.7232.422-.2343.027-.4666.051-.6999.077.0215-.345.0457-.693.0709-1.042Zm-.0709-28.7838c1.7091.4844 1.1683.1623 1.2438 1.4392-.787-.4565-.8411-.6759-1.2438-1.4392Zm0 25.7088c.0384-.415.0791-.827.1186-1.242.6627.459.8894.733 1.3045 1.439-.4767-.067-.9499-.133-1.4231-.197Zm2.8462-17.9734c-.5339.687-.5117.4961-1.4231.8998.2078-.4789.4157-.9597.6248-1.4392.2669.1802.5338.3592.7983.5394Zm0-5.7869c-.298.3097-.595.6194-.893.9299-.8959-.5064-.4713-.3046-.0699-1.2352.1774-.0673.3547-.136.5341-.204.145.17.2879.3393.4288.5093Zm-.1139-2.4494c-.4355-.3123-.8738-.6246-1.3092-.9383 1.0089.3842.7756.1496 1.3092.9383Zm-2.7323 26.4067c.4747.378.9477.755 1.4231 1.131-.7287-.019-1.1153-.174-1.4231-1.131Zm4.2692-.054c-.1918.018-.386.036-.5794.054-.1656-.306-.332-.611-.4977-.918-.1156-.149-.2319-.299-.3459-.449.2565-.025.5131-.049.7704-.072.2173.462.4338.923.6526 1.385Zm-.7855-26.6491c-.2121-.2159-.4269-.4289-.6375-.6419.6261.436.2106.01.6375.6419Zm.0893 23.7011c-.2411-.5029-.485-1.004-.7268-1.5065.102-.4128.2054-.8234.3081-1.2361.0592-.0036.1191-.008.1798-.0123.3103.9587.6241 1.9182.9351 2.8779-.2297-.041-.4615-.082-.6962-.123Zm-3.7291 16.745c.0527.065.1041.128.1561.193-.17.632-.3399 1.265-.5099 1.895-1.0474-.417-2.1191-1.497-2.3363-2.878.8984.263 1.7939.525 2.6901.79Zm-4.1131 2.088c.4756.419.9474.839 1.423 1.259-.9103-.398-.966-.381-1.423-1.259Zm2.4562-12.757c.0555.415.1167.83.1722 1.244-.4027-.481-.8026-.96-1.2054-1.44.343.065.686.131 1.0332.196Zm-1.4065 6.729c-.3509-.868-.7017-1.738-1.0497-2.607 1.2421.478 2.2163 1.9 2.8461 2.878-.5976-.091-1.197-.18-1.7964-.271Zm1.1179-25.6233c.1167-.0046.2376-.0078.3543-.0111-.3472.4795-.6916.9591-1.0402 1.4392-.1722-.3549.0355-.6961.6147-1.113.0214-.1057.047-.21.0712-.3151Zm-.7446 12.3703c-.0941.191-.1902.38-.2853.571-.2729-.211-.5438-.421-.8178-.6326-.1065-.228-.2139-.4569-.3199-.6842.3725-.0406.743-.0813 1.1154-.1219.1036.289.2056.5781.3076.8677Zm-9.9615 12.085c2.853 1.852 7.6964 3.568 8.5385 7.196-3.3064-1.568-6.5294-4.391-8.5385-7.196Zm7.3953-1.39c.3808.464.7631.927 1.1432 1.39-.9482-.48-1.898-.959-2.8462-1.439.5682.016 1.1371.033 1.703.049Zm10.4209 4.269c-.7202-.722-1.4413-1.447-2.1623-2.17 1.2594-1.196 2.5224-2.39 3.7818-3.587.1628 1.315.3255 2.631.4874 3.947-.702.603-1.4041 1.207-2.1069 1.81Zm2.1069 2.405c.1276-.313.2513-.626.3779-.939.1666-.01.3321-.019.5017-.027.1825.479.362.959.5435 1.439-.4737-.158-.9494-.315-1.4231-.473Zm1.9183-5.284c-.1651-.48-.3287-.958-.4952-1.439.3472.064.693.127 1.0317.191-.1765.415-.3572.833-.5365 1.248ZM72.751 63.6414c.0044-.0417.0083-.0834.0143-.1261.4705-.1148.9383-.229 1.4088-.3442-.3282.4797-.657.9595-.9841 1.4392-.1461-.3228-.2929-.6461-.439-.9689ZM58.4035 93.3945c-.4369-.9608-.8723-1.9196-1.3064-2.8785 1.6721.366 1.4046 1.5537 1.3064 2.8785Zm-3.487 1.4392c-1.215-.8439-1.9933-2.5173-2.0886-4.3177 2.4962.5901 2.3613 1.5706 2.8462 3.843-.2529.1579-.5047.3167-.7576.4747Zm-1.4707-7.5098c-1.8141-1.7106.8303-8.564 1.9932-10.1391.6114-.775 1.3863-.761 2.4079-1.0608.2253.0575.447.1169.6733.1745-1.7096 3.0211-2.866 7.1318-3.2743 11.3391-.6003-.1058-1.1989-.2097-1.8001-.3137Zm-2.6555 23.3411c.2902.486.5804.972.8706 1.46-.2577.603-.5186 1.206-.7788 1.81-.1503.158-.2983.315-.447.473.6348.09.7771-.458 1.7338-1.232 1.8412 2.988 4.6635 5.838 7.7744 7.463-.5658.992-1.1348 1.985-1.6997 2.979-1.7152-1.102-3.4247-2.202-5.139-3.304-.5894-1.087.2235-2.335-.7227-3-.8543-.603-1.9598.269-2.8304.007-.8048-.737-1.6112-1.474-2.4159-2.211.708-1.581 1.3916-3.132 2.7979-3.94.287-.169.5707-.338.8568-.505Zm-4.9211-15.8693c.1801-1.4156.4876-2.8784.8354-4.2627.0652-.0054.1289-.0107.1941-.017.2469 1.4272.4938 2.8534.7422 4.2797.1297.7456.257 1.4913.3867 2.236 1.1249 3.1043 2.2507 6.2113 3.3772 9.3153-2.701-1.475-4.3757-4.882-4.1358-9.4658-.649 1.4797-.1087 3.8058.1048 5.1068-1.6637-1.403-1.8773-4.1946-1.5046-7.1923Zm-2.4669 1.4772c-.2465-.5064-.4071-1.0685-.4825-1.7337-.0803-.6837-.0689-1.4748.026-2.4205.0802-.1733.1621-.3445.244-.5157.3674-.3619.7339-.7239 1.0996-1.087-.2067 1.3408-.4135 2.6825-.6211 4.0232-.0876.5786-.1776 1.1551-.266 1.7337Zm99.0797 14.3921c-.948-.364-1.896-.729-2.846-1.095.921-.114 1.841-.23 2.762-.344.027.479.055.96.084 1.439Zm-75.3109 23.424c.2476-.133.4995-.266.7471-.397-.2832.477-.5749.96-.8595 1.437.037-.346.0754-.694.1124-1.04ZM45.7125 84.7592c-.403-.0397-.8076-.0785-1.2139-.1182-1.5059-.4905-2.927-2.2462-3.0553-4.1994 2.311.2073 3.0923 1.2986 4.2347 2.6317.0115.5611.0246 1.123.0345 1.6859Zm-.1679-.1199c.1655-3.1052-2.2119-5.0439-5.2979-4.9607.5293-4.3658 4.331-6.5953 7.7212-8.0616.2183-.0161.4332-.0322.6515-.0483-.5683 5.477-.1369 10.1944-2.1894 14.9324-1.5153 3.4917-6.8869 3.4264-6.5931 8.8076.0069.1459.0181.298.0355.4527.7659 7.1606 8.5729 8.6176 9.6532 14.9146-11.5714 5.869 2.5334 30.545 11.6867 16.051 1.6375.235 3.1.977 5.1386.262.9469-.523 1.1349-.947 1.5031-2.037 1.0891.562 2.1807 1.124 3.2698 1.686.0572.137.1143.276.1733.415-2.9995 2.319-5.1126 5.501-8.3303 7.68.1005-.295.2036-.591.3067-.882-.2825-.049-.5632-.101-.8456-.151-.1508.083-.305.167-.4566.249-.1404.65-.2773 1.305-.4194 1.956 1.8368 1.87 7.4102-4.902 9.0425-6.232-.9244 3.22-3.203 4.875-4.4688 7.821.1282.135.2599.269.3899.401 2.4033-1.718 5.3508-6.578 5.7987-10.277 1.1982.198 2.3981.395 3.599.594-4.5122 6.087-16.1018 19.47-22.1934 23.042.9227-2.905 2.4042-5.123 3.1476-7.509-.1464.01-.2911.019-.4332.031-.13-.135-.2608-.268-.3916-.4-1.4807 2.913-3.9265 4.955-4.3623 8.883.3093.48.6394.738.9721.999 7.2465-1.206 19.3421-19.371 25.1244-24.33-1.5639 15.667-9.9817 18.113-17.2818 27.606 6.633-3.301 10.6582-11.723 16.3365-16.403-.6281 6.55-2.1893 21.187-6.121 23.785.2166-.018.4332-.032.6515-.048 4.4039-2.733 4.6629-13.971 6.1306-19.718.2079-2.015.4176-4.027.6255-6.038 2.0975-2.941 4.1959-5.88 6.2934-8.815.1534-.082.3041-.167.4566-.247.7035 2.203 3.8901 4.594 7.3426 3.952.8266-.346 1.6514-.691 2.4736-1.036 2.0758.773 4.1474 1.546 6.2177 2.321.816 8.92.503 13.922-5.1581 20.717 5.7841-2.949 7.9101-14.317 5.9841-20.348 13.451 1.554 12.913-2.976 10.359-12.751.79.011 1.578.025 2.367.04-.434-.654-1.615-.168-2.516-.67-.409-.263-.328-.214-.584-.601 3.201-3.6 10.9-.024 9.288 5.951 2.21-4.957-2.681-9.359-7.395-7.589 2.013-2.379 4.451-4.335 5.726-7.486.154-.083.304-.166.458-.248 3.688 3.866 7.381 7.734 11.071 11.599.215-.015.434-.032.652-.047.168-.227.333-.453.499-.68-3.514-4.163-7.034-8.331-10.549-12.494.376-.172.752-.342 1.132-.512.609-.578 1.279-.769 1.95-.679-.196-.097-.384-.191-.561-.28 5.658.568 12.875 5.268 18.775 3.753.545-.943.569-1.455.242-2.372 6.284.158 17.589-1.94 21.186-4.987-9.665 2.027-20.559 2.714-29.439 1.528-2.624-.305-5.245-.612-7.868-.918-.145.011-.291.021-.438.032.705-1.264 1.41-2.53 2.116-3.795 6.488-.119 23.492-.283 26.931-4.3404-.253-.3372-.506-.6772-.757-1.0145-.989-.1413-1.981-.2818-2.968-.424-.256.3766-.291.7363-.332 1.0968.784.0841 1.563.1682 2.344.2541-5.097 1.2811-19.294 3.984-23.931 2.4056-.488-.5886-.127-2.6391-.106-4.1171.007-.2925-.001-.5636-.031-.7953 6.662-1.987 11.609-6.4557 13.637-13.2075 1.16-3.8603.391-8.9374 2.897-11.3448 1.601.1395 1.924.8123 3.099 1.2703-.623-.8624-1.509-1.3401-2.62-1.7338-.698.4796-1.392.9591-2.086 1.4377-1.908.7363-3.905-1.1899-7.138.3122-2.626-2.241-4.11-5.7856-7.657-7.1409-.122-.2058-.246-.4107-.367-.6155 1.438-1.3921 2.871-2.7815 4.308-4.1717-1.413 1.1755-2.848 2.5658-4.285 3.9552-.958-.4286-1.922-.858-2.884-1.2847-.054-.1405-.112-.2774-.17-.416 3.284-2.3216 6.202-3.1832 9.943-2.4451.176.3427.36.6862.539 1.0297-.175.2997-.329.3803-.479.4635-.418-.1119-.841-.2228-1.259-.3364.543.3185 1.108.4196 1.671.5207.157-.1557.318-.3096.475-.4635.024-.2165.047-.4312.071-.6477-.817-.7264-1.066-1.2489-2.668-1.3017.255-.3766.51-.7515.766-1.1263-1.837 1.2569-5.557 1.5924-7.384 2.6848 1.405-1.1031 2.811-2.2062 4.217-3.3084.167-.2254.334-.4527.502-.6781-2.601 1.5459-5.2 3.0945-7.8 4.6422-1.665-.1163-3.436-.8919-4.334-1.8223-.144.0107-.287.0214-.435.0322 3.09-2.0827 6.175-4.1654 9.26-6.2473-.05-.2111-.099-.4213-.148-.6325-3.515 2.0434-7.027 4.0858-10.538 6.1301-1.122-.2756-2.241-.5493-3.361-.8249.103-1.0055.208-2.012.311-3.0185 8.045-6.3018 16.091-12.6036 24.134-18.9045.143-.0116.288-.0215.434-.0313-.117-.2774-.232-.5547-.345-.832-.896-.4268-4.568 2.5461-5.955 3.4363-5.342 3.4202-10.067 7.675-15.324 10.7633 2.17-2.7492 6.144-5.4868 6.798-9.493-.353-.0447-.71-.0903-1.064-.135-.548.4679-1.098.9375-1.652 1.4063.602-.2585 1.203-.5162 1.802-.7756-1.164 3.523-6.435 9.8275-9.403 11.8253-.116-.2783-.23-.5529-.345-.8312 1.933-3.2493 3.838-7.6106 2.943-11.7769-.542-.3167-1.084-.6334-1.626-.951-.578.0438-1.155.0868-1.735.1288 1.112.4393 1.867.5475 2.684 1.0861.524 4.0393-1.471 6.7697-2.543 10.0351-.155.0823-.305.1646-.457.2487-.718-1.3187-.672-1.9574-2.141-2.1981-.044-.2818-.086-.5645-.128-.8472.333-.4536.668-.9045 1.003-1.3572.231-.161.462-.3212.695-.4804.235.4393.245.2845.321 1.0467.254-.3748.29-.7345.326-1.095-.27-.1217-.547-.2442-.82-.3659-.726.7658-1.45 1.5334-2.174 2.3001-1.821-1.214-3.818-2.4862-6.37-2.955 1.443-2.9997 5.845-7.8146 3.57-11.6097-2.769-4.6154-12.233.7059-15.6976 4.3667-.4644.4939-.8248.9573-1.0423 1.3635.2209-.179.5787-.4599 1.0423-.8034 3.4187-2.5461 12.5276-8.6332 14.5006-3.7673 2.07 2.717-1.895 7.9425-2.978 10.0664-3.689-.3731-7.5485-.7255-11.5174-.6468-4.0071.0814-8.1302.5994-12.3027 1.9744-2.017.6648-10.5994 5.7937-10.9269 5.7293-1.3039-1.2579-2.6104-2.5193-3.916-3.7789-2.7274-1.3679-5.4583-2.7367-8.1865-4.1046-.0165.1431-.0295.2863-.0433.4312-.1603.1548-.3215.3086-.4792.4634 3.4959 2.9523 6.9961 5.9064 10.4902 8.8596-.5337.3256-1.0682.6495-1.6036.9751-4.3146-3.2636-7.2889-5.2452-13.7123-6.9101-.3604.0268-.7226.0527-1.083.0796 3.7514 2.5774 7.5272 4.9393 11.3011 7.3011.2521.3382.5034.6763.7564 1.0154-2.6945 1.1353-3.8338 3.4846-6.1115 4.9456-3.5565-1.6963-6.847-3.2279-11.1564-4.5305-.1006.2935-.2045.5869-.305.8803 2.6918 1.7276 5.3828 3.456 8.0747 5.1845.1447-.0108.2894-.0215.4332-.0314-.4635.3185-.927.6388-1.3888.9582-.6455 2.1605-1.9061 4.6628-2.9535 7.71-4.0235 3.2681-9.24 3.0721-10.0492 9.7318-1.2832.3516-2.1955.4625-3.3651 1.3178-.0303.2881-.0589.5761-.0892.8633.7338 1.0306 7.2716 3.7879 8.8354 4.0581.3214-.3096.6402-.6191.9582-.9269Zm47.7445-46.0437c.2006.0367.3956.0723.5946.109-.2662-.0321-.5332-.0659-.8002-.0985-.1367.007-.2727.0134-.4094.0204.6289-1.1741 2.4839-1.4631 4.2692-1.332-.041.2808-.0811.5623-.1253.8425-1.1613.0595-2.3258.1183-3.4871.1766-.0123.0944-.0279.1876-.0418.282Zm2.4926 1.5482c.56-.1843 1.1207-.3677 1.6789-.5511.7243-1.2027 1.1378-2.4769.7676-3.6461-1.7239-.3404-2.7211.0811-4.3387.7574-.2926.478-.5861.9585-.8754 1.4373-.1128.1843-.2281.3686-.34.5538.1119.1252.2207.2345.34.3333.5452.4514 1.2064.6075 2.4211.5079.3302.566-.0515.3147-.6539.4743.3326.0432.6661.0891 1.0004.1332ZM137.17 53.0967c-.602.1129-1.204.2258-1.804.337.371-.0247.743-.0503 1.111-.0776.424.1809.847.3635 1.267.5435-.641 1.1728-1.282 2.3437-1.923 3.5147.988-1.1639 1.974-1.9916 2.392-3.7591-.35-.1871-.696-.3724-1.043-.5585Zm-10.342 56.1293c-.45-.792-.939-1.317-1.423-1.439.433.406.931.882 1.423 1.439Zm-5.692 17.27c-.474.277-.95.551-1.423.823.364-.034.728-.069 1.093-.102.112-.242.222-.48.33-.721Zm5.692-17.27c1.445 1.632 2.533 4.753 2.219 7.196 1.64-3.542-.232-5.751-2.219-7.196Z"/>
    </svg>
  `;
}

function iconExternalLink() {
  return `
    <svg class="external-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"></path>
      <path d="M15 4h5v5"></path>
      <path d="M10 14 20 4"></path>
    </svg>
  `;
}

function iconExpand() {
  return `
    <svg class="expand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 4H4v5"></path>
      <path d="M4 4l6 6"></path>
      <path d="M15 20h5v-5"></path>
      <path d="M20 20l-6-6"></path>
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
  if (/youtube\.com|youtu\.be/.test(src)) {
    return "youtube";
  }

  if (/\.(mp4|webm|ogg)(?:[?#]|$)/.test(src)) {
    return "video";
  }

  return "image";
}

function parseTimeToSeconds(value) {
  if (!value) {
    return 0;
  }

  const normalized = String(value).trim().toLowerCase();
  if (/^\d+$/.test(normalized)) {
    return Number(normalized);
  }

  const match = normalized.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match) {
    return 0;
  }

  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const seconds = Number(match[3] || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

function getYoutubeEmbedUrl(rawUrl) {
  try {
    const url = new URL(rawUrl, window.location.href);
    const host = url.hostname.replace(/^www\./, "");
    let videoId = "";

    if (host === "youtu.be") {
      videoId = url.pathname.replace(/^\/+/, "").split("/")[0];
    } else if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v") || "";
      } else if (url.pathname.startsWith("/embed/") || url.pathname.startsWith("/shorts/")) {
        videoId = url.pathname.split("/")[2] || "";
      }
    }

    if (!videoId) {
      return rawUrl;
    }

    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    const start = parseTimeToSeconds(url.searchParams.get("t") || url.searchParams.get("start"));

    if (start > 0) {
      embedUrl.searchParams.set("start", String(start));
    }

    embedUrl.searchParams.set("rel", "0");
    return embedUrl.href;
  } catch {
    return rawUrl;
  }
}

function renderMediaElement(item, fallbackAlt) {
  const src = escapeHtml(item.src);
  const alt = escapeHtml(item.alt || fallbackAlt);
  const mediaKind = getMediaKind(item);

  if (mediaKind === "youtube") {
    return `
      <iframe
        src="${escapeHtml(getYoutubeEmbedUrl(item.src))}"
        title="${alt}"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
  }

  if (mediaKind === "video") {
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
        const projectTitle = escapeHtml(project.title);
        const projectYear = escapeHtml(project.year);
        const projectDescription = escapeHtml(project.description);
        const projectHref = escapeHtml(project.href);
        const openProjectLabel = escapeHtml(`${getCopy().ui.openProject}: ${project.title}`);
        const visitProjectLabel = escapeHtml(getCopy().ui.visitProject);
        const cardLinkLabel = project.cardLinkLabel ? escapeHtml(project.cardLinkLabel) : "";
        const cardLinkIcon = project.cardLinkIcon === "github" ? iconGithub() : "";
        const cardLinkClass = `card-link${cardLinkLabel ? " card-link-labeled" : ""}`;
        const cardLinkAriaLabel = cardLinkLabel ? escapeHtml(`${cardLinkLabel}: ${project.title}`) : visitProjectLabel;
        const cardLinkContent = cardLinkLabel
          ? `${cardLinkIcon}<span>${cardLinkLabel}</span>`
          : "↗";
        return `
        <article class="card">
          <a class="card-surface-link" href="#project-${escapeHtml(projectIndex)}" aria-label="${openProjectLabel}"></a>
          <div class="card-header">
            <div class="card-title">${projectTitle}</div>
            <span class="meta">${projectYear}</span>
          </div>
          <p class="card-description">${projectDescription}</p>
          <div class="tag-list">${renderTags(project.tags)}</div>
          <div class="card-actions">
            <span class="card-expand-indicator" aria-hidden="true">
              ${iconExpand()}
            </span>
            <a class="${cardLinkClass}" href="${projectHref}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="${cardLinkAriaLabel}">
              ${cardLinkContent}
            </a>
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
        <button class="carousel-arrow carousel-arrow-prev" type="button" data-carousel-direction="prev" aria-label="Previous media item">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M14.5 5.5 8 12l6.5 6.5" />
          </svg>
        </button>
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
        <button class="carousel-arrow carousel-arrow-next" type="button" data-carousel-direction="next" aria-label="Next media item">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
          </svg>
        </button>
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

function renderProjectImpactItem(item) {
  if (typeof item === "string") {
    return `<li>${escapeHtml(item)}</li>`;
  }

  if (!item || typeof item !== "object") {
    return "";
  }

  const text = escapeHtml(item.text || "");
  const linkLabel = escapeHtml(item.linkLabel || item.href || "");
  const href = escapeHtml(item.href || "");
  const suffix = escapeHtml(item.suffix || "");
  const target = item.external === false ? "" : ' target="_blank" rel="noopener noreferrer"';

  if (!href) {
    return `<li>${text}${linkLabel}${suffix}</li>`;
  }

  return `<li>${text}<a href="${href}"${target}>${linkLabel}</a>${suffix}</li>`;
}

function renderProjectModal(copy, projectIndex) {
  const project = copy.projects[projectIndex];
  if (!project) {
    return "";
  }

  const modalLinkLabel = escapeHtml(project.modalLinkLabel || copy.ui.visitProject);
  const modalLinkIcon = project.cardLinkIcon === "github" ? iconGithub() : iconExternalLink();

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
          ${(project.impact || []).map((item) => renderProjectImpactItem(item)).join("")}
        </ul>
        <div class="tag-list">${renderTags(project.tags)}</div>
        <a class="button button-secondary modal-link" href="${escapeHtml(project.href)}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          <span>${modalLinkLabel}</span>
          ${modalLinkIcon}
        </a>
      </aside>
    </div>
  `;
}

function renderPosts(posts, separator) {
  return `
    <div class="writing-list">
      ${posts.map((post) => {
        const linkAttrs = post.href
          ? `href="${escapeHtml(post.href)}" ${post.external ? 'target="_blank" rel="noopener noreferrer"' : ""}`
          : `href="#"`;

        return `
        <article class="writing-row">
          <div class="writing-main">
            <a class="writing-title" ${linkAttrs}>${escapeHtml(post.title)}</a>
            <div class="tag-list">${renderTags(post.tags)}</div>
          </div>
          <span class="meta">${escapeHtml(post.date)} ${separator} ${escapeHtml(post.time)}</span>
        </article>
      `;
      }).join("")}
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
    <section class="section section-about">
      <div class="about-copy">
        <p class="section-label">${escapeHtml(copy.about.label)}</p>
        <h1 class="hero-title">${escapeHtml(state.name)}</h1>
        <p class="lead">${escapeHtml(copy.about.intro)}</p>
        <p class="body-copy">${escapeHtml(copy.about.summary)}</p>
        <div class="cta-row">
          <a class="button button-primary" href="#work">${escapeHtml(copy.about.primaryCta)}</a>
          <button class="button button-secondary" type="button" data-telegram-trigger="true">${escapeHtml(copy.about.secondaryCta)}</button>
        </div>
      </div>
      <div class="about-portrait-wrap" aria-hidden="true">
        <img
          class="about-portrait"
          src="${escapeHtml(assetUrl("assets/about-portrait-cutout.png?v=about-photo-20260529"))}"
          alt=""
          decoding="async"
        >
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
  const downloadButton = isDownloadCvPdfVisible()
    ? `
        <button class="nav-download-button" type="button" data-download-cv-pdf="true" ${state.pdfExportPending ? "disabled" : ""}>
          ${escapeHtml(state.pdfExportPending ? copy.ui.generatingPdf : copy.ui.downloadCvPdf)}
        </button>
      `
    : "";

  return `
    <nav class="site-nav">
      <button class="brand-button" type="button" data-page="${escapeHtml(defaultPage)}" aria-label="${escapeHtml(copy.ui.brandAria)} ${escapeHtml(defaultPageLabel)}">
        <span>${escapeHtml(state.name)}</span>
        <span class="brand-caret" aria-hidden="true"></span>
        <span class="brand-role">AI Engineer</span>
      </button>
      <div class="nav-actions">
        ${navLinks}
        ${downloadButton}
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
        <a class="social-link" href="${escapeHtml(TELEGRAM_URL)}" target="_blank" rel="noopener noreferrer" aria-label="Telegram" data-footer-telegram>
          ${iconTelegram()}
        </a>
        <a class="social-link" href="${escapeHtml(LINKEDIN_URL)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          ${iconLinkedin()}
        </a>
        <a class="social-link" href="${escapeHtml(GITHUB_URL)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          ${iconGithub()}
        </a>
        <a class="social-link" href="${escapeHtml(HABR_URL)}" target="_blank" rel="noopener noreferrer" aria-label="Habr">
          ${iconHabr()}
        </a>
        <a class="social-link" href="${escapeHtml(YOUTUBE_URL)}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          ${iconYoutube()}
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
  runPendingEffects();
}

function isCompactViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function pulseTelegramLink(telegramLink) {
  telegramLink.classList.remove("social-link-pulse");
  void telegramLink.offsetWidth;
  telegramLink.classList.add("social-link-pulse");
  telegramLink.addEventListener("animationend", () => {
    telegramLink.classList.remove("social-link-pulse");
  }, { once: true });
}

function getClampedScrollTop(targetTop) {
  const scroller = document.scrollingElement || document.documentElement;
  const maxScrollTop = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  return Math.min(maxScrollTop, Math.max(0, targetTop));
}

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function runAfterScrollSettles(targetTop, callback) {
  const startedAt = window.performance.now();
  let previousY = window.scrollY;

  function tick() {
    const currentY = window.scrollY;
    const elapsed = window.performance.now() - startedAt;
    const reachedTarget = Math.abs(currentY - targetTop) < 2;
    const stoppedMoving = elapsed > 180 && Math.abs(currentY - previousY) < 0.5;

    if (reachedTarget || stoppedMoving || elapsed > 900) {
      callback();
      return;
    }

    previousY = currentY;
    window.requestAnimationFrame(tick);
  }

  window.requestAnimationFrame(tick);
}

function revealTelegramLink() {
  const telegramLink = document.querySelector("[data-footer-telegram]");
  if (!telegramLink) {
    return false;
  }

  const rect = telegramLink.getBoundingClientRect();
  const targetTop = getClampedScrollTop(window.scrollY + rect.top - ((window.innerHeight - rect.height) / 2));

  if (isElementVisible(telegramLink) || Math.abs(window.scrollY - targetTop) < 2) {
    pulseTelegramLink(telegramLink);
    return true;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: targetTop, behavior: prefersReducedMotion ? "auto" : "smooth" });
  runAfterScrollSettles(targetTop, () => pulseTelegramLink(telegramLink));
  return true;
}

function runPendingEffects() {
  if (!state.telegramPulsePending) {
    return;
  }

  state.telegramPulsePending = false;
  revealTelegramLink();
}

function setPage(page, options = {}) {
  const { updateHash = true } = options;
  const copy = getCopy();
  const visiblePages = new Set(getVisiblePages(copy).map(([key]) => key));
  if (!visiblePages.has(page)) {
    return;
  }

  const shouldRevealTelegram = state.telegramPulsePending;
  state.page = page;
  renderApp();
  if (updateHash && window.location.hash.slice(1) !== page) {
    window.location.hash = page;
  }
  if (!shouldRevealTelegram) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function syncPageFromHash() {
  const page = getPageFromHash();
  if (!page || page === state.page) {
    return;
  }

  setPage(page, { updateHash: false });
}

function bindRuntimeEvents() {
  document.querySelectorAll("button[data-page]").forEach((element) => {
    element.addEventListener("click", () => {
      setPage(element.dataset.page);
    });
  });

  document.querySelectorAll("[data-download-cv-pdf]").forEach((element) => {
    element.addEventListener("click", () => {
      downloadCvPdf();
    });
  });

  document.querySelectorAll("[data-page-target]").forEach((element) => {
    element.addEventListener("click", () => {
      const targetPage = element.dataset.pageTarget;
      const wantsTelegramPulse = element.dataset.telegramPulse === "true";
      const visiblePages = new Set(getVisiblePages(getCopy()).map(([key]) => key));

      if (wantsTelegramPulse && (isCompactViewport() || !visiblePages.has(targetPage))) {
        revealTelegramLink();
        return;
      }

      state.telegramPulsePending = wantsTelegramPulse;
      setPage(targetPage);
    });
  });

  document.querySelectorAll("[data-telegram-trigger]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      revealTelegramLink();
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
      setLanguage(state.language === "ru" ? "en" : "ru");
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
    setLanguage(event.target.value);
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

  window.addEventListener("hashchange", syncPageFromHash);

  window.parent.postMessage({ type: "__edit_mode_available" }, "*");
}

bindStaticEvents();
renderApp();
