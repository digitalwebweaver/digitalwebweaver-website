import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Flutter Developers | Cross-Platform Apps India",
    description: "Hire Flutter developers to build fast, cross-platform apps for iOS, Android, web, and desktop from one Dart codebase. Get a free quote in 24 hours.",
  },
  hero: {
    eyebrow: "Flutter Development",
    heading: "Flutter Developers Who Build Apps That Run Everywhere, Look Native",
    lead: "We build pixel-perfect, 60fps Flutter apps for iOS, Android, and web with Dart — one codebase, every platform.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Flutter Developer" }],
    marqueeItems: ["Flutter","Dart","Riverpod","BLoC","Firebase","SQLite","GetIt","GoRouter","Freezed","Isar"],
    stats: [{ value: "15+", label: "Flutter Apps" }, { value: "60fps", label: "Smooth Rendering" }, { value: "6", label: "Platforms" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Flutter Development Services",
    items: [
      { icon: "🦋", title: "Cross-Platform Apps", desc: "iOS, Android, web, and desktop from one Dart codebase." },
      { icon: "🎨", title: "Custom UI & Animations", desc: "Pixel-perfect designs with Flutter's Skia/Impeller engine." },
      { icon: "🛒", title: "E-Commerce Apps", desc: "Shopping, cart, and payment gateway integration." },
      { icon: "📊", title: "Data Visualisation", desc: "Charts, graphs, and real-time dashboards in Flutter." },
      { icon: "🔧", title: "Flutter Web Apps", desc: "Progressive web apps and business dashboards." },
      { icon: "🔄", title: "Flutter Migration", desc: "Move existing React Native or native apps to Flutter." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Flutter Capabilities",
    dark: true,
    items: [
      { icon: "🎨", title: "Material 3 & Custom Themes", desc: "Full design token support with adaptive theming." },
      { icon: "🗃️", title: "State Management", desc: "BLoC, Riverpod, Provider, and GetX patterns." },
      { icon: "🔒", title: "Secure Storage & Biometrics", desc: "flutter_secure_storage, local_auth integration." },
      { icon: "🧪", title: "Testing", desc: "Unit, widget, and integration tests with flutter_test." },
      { icon: "☁️", title: "Firebase Integration", desc: "Auth, Firestore, storage, analytics, and crash reporting." },
      { icon: "⚡", title: "Impeller Engine", desc: "Next-gen renderer for jank-free 120fps animations." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Flutter Development Process",
    steps: [
      { title: "Design System Setup", desc: "Material 3 tokens, custom widget library, and Storyboard." },
      { title: "Core Development", desc: "Feature sprints with daily builds on physical devices." },
      { title: "QA & Performance", desc: "Flutter DevTools profiling, frame timing, and memory audit." },
      { title: "Multi-Store Release", desc: "TestFlight, Firebase App Distribution, and Play testing tracks." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Flutter Stack We Use",
    cols: [
      { head: "Core", items: ["Flutter 3.x", "Dart 3", "Material 3", "Impeller"] },
      { head: "State", items: ["Riverpod", "BLoC", "Provider", "GetX"] },
      { head: "Backend", items: ["Firebase", "Dio", "GraphQL Flutter", "Supabase"] },
      { head: "DevOps", items: ["Fastlane", "Codemagic", "GitHub Actions", "Firebase Distribution"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Flutter?",
    dark: true,
    items: [
      { icon: "🦋", title: "Flutter Specialists", desc: "Dedicated Flutter team — not a side skill, it's our focus." },
      { icon: "🎨", title: "Custom Animations", desc: "Rive, Lottie, and hand-coded animations that wow users." },
      { icon: "⚡", title: "Impeller Ready", desc: "We use the new Impeller renderer for the smoothest animations." },
      { icon: "🔒", title: "Production Hardened", desc: "Live apps on stores with thousands of daily active users." },
    ],
  },
  faq: {
    heading: "Flutter Developer FAQ",
    items: [
      { q: "Flutter or React Native — which should I choose?", a: "Flutter for maximum UI control and consistency across platforms. React Native when you want to share code with a React web app." },
      { q: "Does Flutter web perform well?", a: "Flutter web is best for dashboards and tools. For SEO-heavy public sites, traditional web frameworks are better." },
      { q: "What state management do you recommend?", a: "Riverpod for most projects — it's testable, scalable, and compile-safe. BLoC for large enterprise apps with complex state flows." },
      { q: "Can Flutter apps look truly native?", a: "Yes with platform-adaptive widgets. Flutter can render native-feeling UI on both iOS (Cupertino) and Android (Material 3)." },
    ],
  },
  related: [
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "End-to-end iOS and Android app development." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Web apps that complement your Flutter mobile product." },
    { label: "SaaS Development", href: "/saas-development/", desc: "SaaS products with Flutter frontends." },
    { label: "Hire React Native Developer", href: "/react-native-developer/", desc: "Alternative cross-platform mobile engineers." },
  ],
  cta: { eyebrow: "Start hiring", heading: "Ready to hire a Flutter developer?", body: "Get 2–3 matched Flutter engineer profiles within 48 hours. No recruitment fee, no lock-in contract.", primaryCta: { label: "Get matched now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hour matching", "14-day free replacement"] },
  testimonials: [
    { text: "The Flutter engineer we hired built our telemedicine consultation UI from scratch — video, chat, appointment booking, and health records. The design was more polished than our previous native iOS app. We genuinely did not expect that.", name: "Shreya M.", role: "CTO · MedConnect · India", initials: "SM" },
    { text: "We needed BLoC expertise that went beyond tutorials. The developer they matched us with had built three production BLoC-based apps before. He restructured our state management in two sprints, and onboarding new engineers became measurably faster.", name: "Daniel H.", role: "Lead Engineer · FinFlow · Germany", initials: "DH" },
    { text: "Animations were our competitive differentiator and we needed someone who could build custom painters, not just drop in Lottie files. The developer delivered a chart widget library that genuinely impressed our design team. Exceptional work.", name: "Nadia C.", role: "Product Director · GrowIQ · UAE", initials: "NC" },
  ]

};
export default data;
