import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Python Developer — Hire Expert Python Developers",
    description: "Hire Python developers for web apps, data engineering, ML pipelines, automation scripts, and APIs. Django, FastAPI, and scientific Python.",
  },
  hero: {
    eyebrow: "Python Development",
    heading: "Python Developers for Web, Data & AI",
    lead: "We build robust backends, data pipelines, ML models, and automation tooling with Python and its world-class ecosystem.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Python Developer" }],
    marqueeItems: ["Python 3.12","Django","FastAPI","Celery","PostgreSQL","Redis","Pandas","NumPy","Scikit-learn","PyTorch","Docker","AWS Lambda"],
    stats: [{ value: "35+", label: "Python Projects" }, { value: "6yr+", label: "Python Depth" }, { value: "100%", label: "Code Reviewed" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Python Development Services",
    items: [
      { icon: "🌐", title: "Django Web Apps", desc: "Full-stack apps with Django ORM, admin, and REST framework." , tags: ["Django ORM","DRF"]},
      { icon: "⚡", title: "FastAPI Services", desc: "Async APIs with automatic OpenAPI docs and Pydantic validation." , tags: ["Pydantic","Async"]},
      { icon: "📊", title: "Data Engineering", desc: "ETL pipelines, pandas, Spark, and data warehouse integrations." , tags: ["Pandas","Spark"]},
      { icon: "🤖", title: "ML & AI", desc: "scikit-learn, PyTorch, LangChain, and custom model serving." , tags: ["PyTorch","LangChain"]},
      { icon: "🔧", title: "Automation & Scripts", desc: "CLI tools, schedulers, web scrapers, and workflow bots." , tags: ["Celery","Airflow"]},
      { icon: "🔌", title: "API Integrations", desc: "Third-party API wrappers, webhooks, and data sync jobs." , tags: ["REST","Webhooks"]},
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Python Capabilities",
    dark: true,
    items: [
      { icon: "🌐", title: "Django & DRF", desc: "Battle-tested web framework with rich ecosystem." },
      { icon: "⚡", title: "FastAPI & Pydantic", desc: "High-performance async APIs with type validation." },
      { icon: "📊", title: "Data Stack", desc: "pandas, numpy, polars, dbt, Airflow." },
      { icon: "🤖", title: "AI/ML Frameworks", desc: "PyTorch, scikit-learn, Hugging Face, LangChain." },
      { icon: "🧪", title: "Testing", desc: "pytest, hypothesis, factory-boy, coverage." },
      { icon: "☁️", title: "Deployment", desc: "Docker, Gunicorn, uWSGI, AWS Lambda, Cloud Run." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Python Development Process",
    steps: [
      { title: "Requirements & Design", desc: "Understand data flows, performance needs, and integration points." },
      { title: "Core Implementation", desc: "Clean architecture, type hints, and docstrings throughout." },
      { title: "Test & Benchmark", desc: "pytest suite, profiling, and memory leak checks." },
      { title: "Deploy & Automate", desc: "Docker images, CI/CD, scheduled job monitoring." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Python Ecosystem We Use",
    cols: [
      { head: "Web", items: ["Django 5", "FastAPI", "Flask", "Starlette"] },
      { head: "Data", items: ["pandas", "polars", "dbt", "Apache Airflow"] },
      { head: "AI/ML", items: ["PyTorch", "scikit-learn", "LangChain", "Hugging Face"] },
      { head: "Infra", items: ["Docker", "Celery", "Redis", "AWS Lambda"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Python?",
    dark: true,
    items: [
      { icon: "🔒", title: "Type-Safe Python", desc: "Full type hints, mypy checks — no runtime type surprises." },
      { icon: "📊", title: "Data Engineering Depth", desc: "End-to-end pipelines from ingestion to BI dashboard." },
      { icon: "🤖", title: "AI-Ready", desc: "LLM integrations, RAG pipelines, and model serving." },
      { icon: "🧪", title: "High Test Coverage", desc: "pytest suites targeting 80%+ coverage on every project." },
    ],
  },
  faq: {
    heading: "Python Developer FAQ",
    items: [
      { q: "Django or FastAPI for a new project?", a: "FastAPI for API-first or ML-adjacent projects. Django when you need a full-stack framework with admin, auth, and ORM out of the box." },
      { q: "Can you integrate Python with our existing Node.js or PHP backend?", a: "Yes — Python microservices communicate over REST, gRPC, or message queues with any language backend." },
      { q: "How do you handle large datasets?", a: "polars for in-memory speed, Spark for distributed processing, dbt for transformation, and Airflow for orchestration." },
      { q: "Can you deploy ML models to production?", a: "Yes — FastAPI model servers, Triton Inference Server, SageMaker, or Vertex AI depending on your cloud and scale needs." },
    ],
  },
  related: [
    { label: "AI & Automation", href: "/ai-automation/", desc: "Intelligent automation powered by Python and ML." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Python-powered web apps and APIs." },
    { label: "SaaS Development", href: "/saas-development/", desc: "End-to-end SaaS product development." },
    { label: "Hire React Developer", href: "/react-developer/", desc: "Frontend engineers to pair with Python backends." },
  ],
  cta: { eyebrow: "Start hiring", heading: "Ready to hire a Python developer?", body: "Get 2–3 matched Python engineer profiles within 48 hours. No recruitment fee, no lock-in contract.", primaryCta: { label: "Get matched now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hour matching", "14-day free replacement"] },
  testimonials: [
    { text: "The Python engineer we hired through Digital Web Weaver rewrote our data pipeline in FastAPI and cut processing time by 60%. He was communicating blockers before they became problems — something our previous contractors never did.", name: "Rohan S.", role: "CTO · PulseAnalytics · Singapore", initials: "RS" },
    { text: "We needed a Django developer who could also wire up our scikit-learn models as API endpoints. The match they sent had done exactly that in a previous role. Within two weeks she was shipping independently. Genuinely impressed.", name: "Karen L.", role: "VP Engineering · NovaMed · UK", initials: "KL" },
    { text: "Our automation scripts went from fragile hacks to proper typed, tested modules with Celery tasks and retry logic. The code quality bar is noticeably higher than what we were getting from freelancers on other platforms.", name: "Marc T.", role: "Founder · TradeStream · France", initials: "MT" },
  ]

};
export default data;
