import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "DevOps Engineer — Hire Expert DevOps & Cloud Engineers From India",
    description: "Hire DevOps engineers for CI/CD pipelines, Kubernetes orchestration, AWS/GCP/Azure infrastructure, and site reliability engineering.",
  },
  hero: {
    eyebrow: "DevOps Engineering",
    heading: "DevOps Engineers Who Make Deployment Boring (In a Good Way)",
    lead: "We automate, monitor, and scale cloud infrastructure — CI/CD pipelines, Kubernetes clusters, and IaC that deploy with confidence.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "DevOps Engineer" }],
    marqueeItems: ["AWS","GCP","Terraform","Kubernetes","Docker","Helm","GitHub Actions","GitLab CI","ArgoCD","Prometheus","Grafana","ELK Stack"],
    stats: [{ value: "30+", label: "Infra Projects" }, { value: "99.9%", label: "Uptime SLA" }, { value: "AWS / GCP", label: "Multi-Cloud" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Do",
    heading: "DevOps Engineering Services",
    items: [
      { icon: "🔄", title: "CI/CD Pipelines", desc: "GitHub Actions, GitLab CI, and Jenkins automated pipelines." , tags: ["GitHub Actions","ArgoCD"]},
      { icon: "🐳", title: "Docker & Kubernetes", desc: "Containerisation, Helm charts, and K8s cluster management." },
      { icon: "☁️", title: "Cloud Infrastructure", desc: "AWS, GCP, Azure — multi-region, auto-scaling, HA setups." },
      { icon: "🏗️", title: "Infrastructure as Code", desc: "Terraform, Pulumi, and CDK for reproducible infra." , tags: ["Terraform","Pulumi"]},
      { icon: "📊", title: "Observability", desc: "Prometheus, Grafana, Loki, and OpenTelemetry dashboards." },
      { icon: "🔒", title: "Security & Compliance", desc: "SAST/DAST pipelines, secret management, network policies." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "DevOps Capabilities",
    dark: true,
    items: [
      { icon: "☁️", title: "AWS Expertise", desc: "EC2, ECS, EKS, Lambda, RDS, S3, CloudFront, Route 53." },
      { icon: "🐳", title: "Kubernetes", desc: "K8s cluster setup, RBAC, namespaces, Helm, Kustomize." },
      { icon: "🏗️", title: "Terraform", desc: "IaC for AWS, GCP, Azure — modules, state, workspaces." },
      { icon: "📊", title: "Monitoring Stack", desc: "Prometheus + Grafana + Alertmanager, PagerDuty." },
      { icon: "🔒", title: "Secrets Management", desc: "AWS Secrets Manager, HashiCorp Vault, SOPS." },
      { icon: "🚀", title: "Zero-Downtime Deploy", desc: "Blue-green, canary, and rolling update strategies." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our DevOps Engagement Process",
    steps: [
      { title: "Audit & Discovery", desc: "Review current infra, identify pain points and risks." },
      { title: "Architecture Design", desc: "IaC structure, pipeline design, and observability plan." },
      { title: "Implementation", desc: "Build pipelines, containerise apps, provision cloud infra." },
      { title: "Handover & Docs", desc: "Runbooks, dashboards, and team knowledge transfer." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "DevOps Stack We Use",
    cols: [
      { head: "Cloud", items: ["AWS", "GCP", "Azure", "Cloudflare"] },
      { head: "Containers", items: ["Docker", "Kubernetes", "Helm", "ECS"] },
      { head: "IaC", items: ["Terraform", "Pulumi", "CDK", "Ansible"] },
      { head: "CI/CD", items: ["GitHub Actions", "GitLab CI", "ArgoCD", "Jenkins"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for DevOps?",
    dark: true,
    items: [
      { icon: "🔒", title: "Security by Default", desc: "Every pipeline includes SAST, secret scanning, and image scanning." },
      { icon: "🏗️", title: "IaC Everything", desc: "No console click-ops — all infra is code-reviewed and version-controlled." },
      { icon: "📊", title: "Full Observability", desc: "Metrics, logs, traces, and alerts configured from day one." },
      { icon: "💰", title: "Cost Optimised", desc: "Right-sizing, spot instances, and reserved capacity analysis." },
    ],
  },
  faq: {
    heading: "DevOps Engineer FAQ",
    items: [
      { q: "Kubernetes or ECS for container orchestration?", a: "ECS Fargate for simpler AWS-native setups. EKS/GKE/AKS when you need Kubernetes ecosystem, multi-cloud portability, or complex workloads." },
      { q: "Can you migrate our existing infra to Terraform?", a: "Yes — we use `terraform import` and `terraformer` to import existing resources into managed IaC state." },
      { q: "Do you offer on-call SRE support?", a: "Yes — we offer ongoing SRE retainers with on-call rotations, incident response, and monthly infra reviews." },
      { q: "How do you handle database migrations in pipelines?", a: "Automated migration runs pre-deployment with health checks. Rollback scripts prepared before every release." },
    ],
  },
  related: [
    { label: "Cloud & DevOps", href: "/cloud-devops/", desc: "Managed cloud infrastructure and CI/CD pipelines." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Production-grade web apps that need solid infrastructure." },
    { label: "SaaS Development", href: "/saas-development/", desc: "SaaS products requiring scalable DevOps foundations." },
  ],
  cta: { eyebrow: "Start hiring", heading: "Ready to hire a DevOps engineer?", body: "Get 2–3 matched DevOps engineer profiles within 48 hours. No recruitment fee, no lock-in contract.", primaryCta: { label: "Get matched now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hour matching", "14-day free replacement"] },
  testimonials: [
    { text: "The DevOps engineer we hired migrated our entire infrastructure to Terraform in six weeks. Before that, no one on the team could reproduce our AWS setup. Now every environment is spun up in minutes and our cloud bill dropped by 30%. Transformative hire.", name: "Vikram K.", role: "CTO · InfraStack · India", initials: "VK" },
    { text: "We needed Kubernetes expertise that wasn't just tutorials. The engineer they matched us with had run multi-tenant EKS clusters for a FinTech before. He set up RBAC, network policies, and HPA from week one. Our deployment frequency tripled in three months.", name: "Sophie B.", role: "Engineering Manager · SecureBase · UK", initials: "SB" },
    { text: "Observability was our blind spot. The DevOps engineer built us a full Prometheus/Grafana stack with SLO dashboards and PagerDuty integration in two weeks. We caught a latency regression before it became a customer incident for the first time ever.", name: "Tom N.", role: "VP Engineering · DeployHQ · Australia", initials: "TN" },
  ]

};
export default data;
