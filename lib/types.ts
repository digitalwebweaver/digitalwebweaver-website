export interface ServiceItem {
  icon?: string;
  title: string;
  desc: string;
  tags?: string[];
}

export interface CapItem {
  icon?: string;
  title: string;
  desc: string;
}

export interface WhyItem {
  icon?: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface StackCol {
  head: string;
  items: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Crumb {
  label: string;
  href?: string;
}

export interface ServicePageData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow?: string;
    heading: string;
    lead: string;
    breadcrumbs?: Crumb[];
    stats?: Stat[];
    marqueeItems?: string[];
    formVariant?: "service" | "hire";
    formTag?: string;
    formHeading?: string;
    formSub?: string;
    formSubmitLabel?: string;
    formNote?: string;
    localBadge?: {
      flag: string;
      chips: string[];
    };
  };
  services?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    items: ServiceItem[];
    dark?: boolean;
    variant?: "card" | "svc";
  };
  capabilities?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    items: CapItem[];
    dark?: boolean;
  };
  process?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    steps: ProcessStep[];
    deliverables?: string[];
    dark?: boolean;
  };
  stack?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    cols: StackCol[];
    dark?: boolean;
  };
  why?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    items: WhyItem[];
    dark?: boolean;
  };
  faq?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    items: FaqItem[];
  };
  cta?: {
    eyebrow?: string;
    heading: string;
    body?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    meta?: string[];
  };
  cases?: {
    tag: string;
    title: string;
    desc: string;
    metrics: { value: string; label: string }[];
    stack: string[];
    bgClass?: string;
    bgStyle?: string; // CSS gradient value e.g. "linear-gradient(140deg,#e0f,#c8e)"
  }[];
  testimonials?: {
    text: string;
    name: string;
    role: string;
    initials: string;
  }[];
  related?: {
    label: string;
    href: string;
    desc: string;
  }[];
}
