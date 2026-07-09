import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire React Native Developers | India, UK & Global",
    description: "Hire React Native developers for cross-platform iOS and Android apps with shared codebase, Expo, and native modules. Get matched in 48 hours, no lock-in.",
  },
  prose: {
    eyebrow: "React Native Development",
    heading: "Hire React Native Developers Who Ship Native-Feeling Apps",
    blocks: [
      { p: ["Hire React Native developers when you need one team to ship polished iOS and Android apps from a single codebase — not two native builds slowly drifting apart. This is for product teams that want cross-platform economics without the wrapper-app feel. Our engineers work in TypeScript with Expo's managed workflow, sharing 90%+ of code while keeping platform-aware gestures, navigation, and animation. We're based in Vadodara, India and deliver to clients across the UK, South Africa, and Ivory Coast — senior engineers only, matched to your stack rather than dropped in cold."] },
      { h3: "Native performance, not a web wrapper", p: ["React Native's New Architecture changed what cross-platform can do, and we build on it. The JSI-based Fabric renderer and TurboModules give synchronous native calls, so lists scroll at 60fps and heavy UI stays responsive. When JavaScript hits a wall, our developers drop into custom native modules in Swift or Kotlin. Offline-first apps use MMKV and WatermelonDB for local storage, with biometrics and Keychain for secure credentials. If your product also runs a React web front end, we set up a monorepo so business logic, hooks, and API layers are shared with your ", { text: "React developers", href: "/react-developer/" }, " instead of rewritten twice."] },
      { h3: "Ship faster with Expo and EAS", p: ["Speed comes from tooling. We use EAS Build and EAS Submit to automate signing, provisioning, and store uploads, and Expo Updates to push fixes over the air without waiting on App Store review. Every app ships with a real test harness — Jest, React Native Testing Library, and Detox for end-to-end flows — so releases stay predictable as the codebase grows. If you're still weighing frameworks, we're candid about when ", { text: "Flutter", href: "/flutter-developer/" }, " fits better, and we scope each engagement as part of our broader ", { text: "mobile app development", href: "/mobile-app-development/" }, " work. Tell us what you're building and ", { text: "get matched with a React Native engineer in 48 hours", href: "/contact/" }, "."] },
    ],
  },
  hero: {
    eyebrow: "React Native Development",
    heading: "React Native Developers — One Codebase. iOS & Android. Native Feel.",
    lead: "We build cross-platform mobile apps with React Native and Expo — sharing 90%+ code while delivering native performance and UX.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "React Native Developer" }],
    marqueeItems: ["React Native","Expo","TypeScript","Redux Toolkit","React Query","Firebase","SQLite","Reanimated","Detox","Jest"],
    stats: [{ value: "20+", label: "RN Apps" }, { value: "90%", label: "Code Shared" }, { value: "Expo", label: "Managed Workflow" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "React Native Development Services",
    items: [
      { icon: "📱", title: "Cross-Platform Apps", desc: "Single codebase for iOS and Android with native modules." , tags: ["React Native","Expo"]},
      { icon: "🛒", title: "Mobile Commerce", desc: "Shopping, payments, and push notifications for both stores." },
      { icon: "🔔", title: "Real-Time Apps", desc: "Chat, live feeds, and WebSocket-powered mobile experiences." },
      { icon: "🗺️", title: "Maps & Location", desc: "Google Maps, geofencing, background location tracking." },
      { icon: "🔄", title: "OTA Updates", desc: "Expo Updates for instant over-the-air code pushes." },
      { icon: "🔧", title: "Native Modules", desc: "Custom native code in Swift/Kotlin when React Native isn't enough." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "React Native Capabilities",
    dark: true,
    items: [
      { icon: "⚡", title: "New Architecture (JSI)", desc: "Fabric renderer and TurboModules for sync native calls." },
      { icon: "📦", title: "Expo SDK", desc: "Managed workflow, EAS Build, and EAS Submit." },
      { icon: "🗃️", title: "Offline Storage", desc: "MMKV, AsyncStorage, WatermelonDB for offline-first apps." },
      { icon: "🔒", title: "Biometrics & Keychain", desc: "Face ID, fingerprint, and secure credential storage." },
      { icon: "🧪", title: "Testing", desc: "Jest, Detox end-to-end, and React Native Testing Library." },
      { icon: "☁️", title: "Push Notifications", desc: "Expo Notifications, APNS, FCM, deep linking." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our React Native Process",
    steps: [
      { title: "Architecture & Setup", desc: "Expo vs bare workflow decision, navigation, and state setup." },
      { title: "UI Development", desc: "Platform-aware components, gestures, and animations." },
      { title: "Native Integration", desc: "Native modules, permissions, and device API access." },
      { title: "Store Submission", desc: "EAS Build, TestFlight, and Google Play internal testing." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "React Native Stack We Use",
    cols: [
      { head: "Core", items: ["React Native 0.76", "Expo SDK 52", "TypeScript", "New Architecture"] },
      { head: "Navigation", items: ["Expo Router", "React Navigation 7", "Deep Linking"] },
      { head: "State", items: ["Zustand", "React Query", "MMKV", "Jotai"] },
      { head: "Build", items: ["EAS Build", "EAS Submit", "Fastlane", "GitHub Actions"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for React Native?",
    dark: true,
    items: [
      { icon: "💸", title: "Cost-Effective", desc: "One codebase serves both stores — half the native dev cost." },
      { icon: "⚡", title: "New Architecture Ready", desc: "We use JSI and Fabric for true native performance." },
      { icon: "🔄", title: "OTA Delivery", desc: "Expo Updates means bug fixes without App Store delays." },
      { icon: "🔧", title: "Native Fallback", desc: "We write custom native modules when React Native has limits." },
    ],
  },
  faq: {
    heading: "React Native FAQ",
    items: [
      { q: "Expo managed or bare workflow?", a: "Managed for most apps — simpler setup, OTA updates, and EAS Build. Bare when you need custom native code or CI integration depth." },
      { q: "How close is performance to native?", a: "With the New Architecture (JSI/Fabric), React Native achieves native parity for most UI patterns. Computation-heavy work goes to native modules." },
      { q: "Can we share code with our React web app?", a: "Yes — with monorepo setup, business logic, hooks, and API layers can be shared between React web and React Native." },
      { q: "Do you handle App Store and Play Store submission?", a: "Yes — EAS Submit automates both. We handle certificates, provisioning profiles, and metadata." },
    ],
  },
  related: [
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "End-to-end iOS and Android app development." },
    { label: "Web Application Development", href: "/web-application-development/", desc: "Web apps that complement your mobile product." },
    { label: "SaaS Development", href: "/saas-development/", desc: "SaaS products with React Native mobile frontends." },
    { label: "Hire Flutter Developer", href: "/flutter-developer/", desc: "Alternative cross-platform mobile engineers." },
  ],
  cta: { eyebrow: "Start hiring", heading: "Ready to hire a React Native developer?", body: "Get 2–3 matched React Native engineer profiles within 48 hours. No recruitment fee, no lock-in contract.", primaryCta: { label: "Get matched now ↗", href: "/contact/" }, secondaryCta: { label: "See our work", href: "/portfolio/" }, meta: ["Senior engineers only", "48-hour matching", "14-day free replacement"] },
  testimonials: [
    { text: "Our React Native app has 200k active users and the engineer we hired through Digital Web Weaver owned the entire offline sync architecture. His proactive communication style meant our product team always knew what was coming before it landed.", name: "Alok R.", role: "CTO · FleetBase · India", initials: "AR" },
    { text: "We had an existing React Native codebase with serious performance problems. The developer we hired profiled it in day one, identified three expensive re-render chains, and had us under 60ms per frame by the end of week two. Outstanding.", name: "Laura M.", role: "VP Product · OrderFlow · UK", initials: "LM" },
    { text: "The App Store submission experience alone was worth the engagement. They handled screenshots, review responses, and even the appeal when Apple rejected our first binary. Both stores live within three weeks of handoff.", name: "Jatin K.", role: "Founder · LearnVault · India", initials: "JK" },
  ]

};
export default data;
