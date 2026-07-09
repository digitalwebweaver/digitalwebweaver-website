import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Expert AI Engineers | LLM, RAG & ML Systems",
    description: "Hire AI engineers to build LLM apps, RAG pipelines, AI agents, chatbots, and production ML systems with OpenAI, Anthropic, LangChain, and vector databases.",
  },
  hero: {
    eyebrow: "AI Engineering",
    heading: "AI Engineers Who Ship Production-Grade Intelligence",
    lead: "We build LLM-powered apps, retrieval pipelines, and AI agents that are accurate, observable, and cost-controlled — not just demos.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "AI Engineer" }],
    marqueeItems: ["OpenAI","Anthropic","LangChain","RAG","Vector DBs","Fine-Tuning","LlamaIndex","Pinecone","Embeddings","Agents","PyTorch","Hugging Face"],
    stats: [{ value: "25+", label: "AI Projects" }, { value: "4yr+", label: "ML Depth" }, { value: "60%", label: "Avg. Cost Cut" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "AI Engineering Services",
    items: [
      { icon: "💬", title: "LLM Applications", desc: "Chatbots, copilots, and assistants on GPT, Claude, and open models.", tags: ["OpenAI","Claude"] },
      { icon: "📚", title: "RAG Pipelines", desc: "Retrieval-augmented generation over your private data.", tags: ["RAG","Embeddings"] },
      { icon: "🤖", title: "AI Agents", desc: "Tool-using, multi-step agents with function calling and guardrails.", tags: ["Agents","Tools"] },
      { icon: "🧠", title: "Fine-Tuning", desc: "Domain-adapted models via fine-tuning and instruction tuning.", tags: ["Fine-Tune","LoRA"] },
      { icon: "🔎", title: "Vector Search", desc: "Semantic search with Pinecone, Qdrant, and pgvector.", tags: ["Pinecone","pgvector"] },
      { icon: "⚙️", title: "ML Ops", desc: "Evaluation, monitoring, prompt versioning, and cost tracking.", tags: ["Eval","Monitoring"] },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "AI Engineering Capabilities",
    dark: true,
    items: [
      { icon: "🔗", title: "LLM Orchestration", desc: "LangChain, LlamaIndex, and custom orchestration frameworks." },
      { icon: "📊", title: "Evaluation", desc: "Golden datasets, LLM-as-judge, and regression testing for quality." },
      { icon: "🛡️", title: "Guardrails", desc: "Prompt injection defence, PII filtering, and output validation." },
      { icon: "💸", title: "Cost Control", desc: "Caching, routing, and model selection to cut token spend." },
      { icon: "🗄️", title: "Vector Infra", desc: "Chunking, embedding pipelines, and hybrid retrieval." },
      { icon: "🐍", title: "Python & APIs", desc: "FastAPI services, async workers, and streaming responses." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our AI Engineering Process",
    steps: [
      { title: "Discovery & Eval Set", desc: "Define the use case, success metrics, and a golden evaluation set." },
      { title: "Prototype", desc: "Build a working prototype, measure accuracy, and iterate on prompts." },
      { title: "Productionise", desc: "Add guardrails, caching, observability, and cost controls." },
      { title: "Monitor & Improve", desc: "Track quality in production and continuously refine." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "AI Stack We Use",
    cols: [
      { head: "Models", items: ["GPT-4o / o1", "Claude", "Llama 3", "Mistral"] },
      { head: "Frameworks", items: ["LangChain", "LlamaIndex", "Vercel AI SDK", "PyTorch"] },
      { head: "Vector DBs", items: ["Pinecone", "Qdrant", "pgvector", "Weaviate"] },
      { head: "Infra", items: ["FastAPI", "Modal", "AWS Bedrock", "Docker"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for AI?",
    dark: true,
    items: [
      { icon: "🎯", title: "Accuracy First", desc: "We measure quality with real eval sets — not vibes or one-off demos." },
      { icon: "💸", title: "Cost-Aware", desc: "We routinely cut LLM bills 50–70% with caching and smart routing." },
      { icon: "🛡️", title: "Safe & Secure", desc: "Prompt injection defence, PII handling, and output guardrails." },
      { icon: "🚀", title: "Production-Ready", desc: "Observability, versioning, and CI baked in from day one." },
    ],
  },
  faq: {
    heading: "AI Engineer FAQ",
    items: [
      { q: "Can you build on our private data without leaking it?", a: "Yes — we build RAG pipelines and, where needed, deploy open models in your own cloud so data never leaves your environment." },
      { q: "OpenAI, Anthropic, or open-source models?", a: "It depends on the task, budget, and privacy needs. We benchmark options against your eval set and often route between models to balance cost and quality." },
      { q: "How do you measure whether the AI is actually good?", a: "We build a golden evaluation set up front and use automated eval (including LLM-as-judge) so quality is measurable and regressions are caught before release." },
      { q: "What's a typical delivery timeline?", a: "A working RAG chatbot or copilot prototype takes 2–4 weeks. A hardened, production-grade AI system is 2–4 months." },
    ],
  },
  related: [
    { label: "AI & Automation", href: "/ai-automation/", desc: "Workflow and business process automation." },
    { label: "ChatFlow AI", href: "/chatflow-ai", desc: "AI WhatsApp automation product." },
    { label: "ClinicVoice AI", href: "/clinicvoice-ai", desc: "AI voice calling for clinics." },
    { label: "Hire Python Developer", href: "/python-developer/", desc: "Backend engineers for ML and data systems." },
  ],
  cta: { eyebrow: "Ready to hire", heading: "Ready to hire an AI engineer?", body: "Tell us your use case, data, and goals. We'll match you with 2–3 senior AI engineers within 48 hours — all pre-vetted, immediately available, and ready to ship real AI, not just demos.", primaryCta: { label: "Start hiring now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hr match", "No lock-in"] },
  testimonials: [
    { text: "We had a promising GPT prototype that fell apart in production — hallucinations, runaway costs, no monitoring. Their AI engineer rebuilt it with a proper RAG pipeline, an eval set, and caching. Accuracy went up and our token bill dropped 65%.", name: "Priya N.", role: "Head of Product · LegalTech · India", initials: "PN" },
    { text: "Their engineer built us a customer-support agent that actually resolves tickets instead of deflecting them. Tool calling, guardrails, and a fallback to a human when confidence is low. Deflection rate hit 48% in the first month.", name: "Tom W.", role: "COO · SaaS Support Platform · United Kingdom", initials: "TW" },
    { text: "We needed semantic search over 200k internal documents. The AI engineer designed the chunking and embedding pipeline, set up pgvector, and tuned hybrid retrieval. Search relevance is night and day compared to our old keyword system.", name: "Sipho D.", role: "CTO · Knowledge Platform · South Africa", initials: "SD" },
  ],
};
export default data;
