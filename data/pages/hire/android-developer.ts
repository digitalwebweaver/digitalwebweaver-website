import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Expert Android App Developers",
    description: "Hire Android developers for native Kotlin apps, Google Play submission, Jetpack Compose UIs, and Android ecosystem integrations.",
  },
  hero: {
    eyebrow: "Android Development",
    heading: "Android Developers Who Build for 3 Billion Devices",
    lead: "We develop native Android apps with Kotlin and Jetpack Compose — performant, beautiful, and Google Play-ready.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Android Developer" }],
    marqueeItems: ["Kotlin","Jetpack Compose","Android SDK","Coroutines","Room","Hilt","FCM","Play Billing","Gradle","Material 3"],
    stats: [{ value: "30+", label: "Android Apps" }, { value: "Kotlin", label: "Native Only" }, { value: "4.7★", label: "Avg Play Rating" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "Android Development Services",
    items: [
      { icon: "🤖", title: "Native Kotlin Apps", desc: "Full Android apps with Jetpack Compose and Material 3." },
      { icon: "🛒", title: "E-Commerce Apps", desc: "Shopping, cart, Google Pay, and Play Billing." },
      { icon: "📍", title: "Location-Based Apps", desc: "Maps SDK, geofencing, and real-time tracking." },
      { icon: "🏥", title: "Healthcare Apps", desc: "Health Connect API, wearables, and HIPAA-aware design." },
      { icon: "🔔", title: "Push & Messaging", desc: "FCM notifications, in-app messaging, and deep links." },
      { icon: "🔄", title: "Java-to-Kotlin Migration", desc: "Modernise legacy Java Android codebases to Kotlin." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "Android Capabilities",
    dark: true,
    items: [
      { icon: "🎨", title: "Jetpack Compose", desc: "Declarative UI with Material 3 and custom theming." },
      { icon: "🗃️", title: "Room & DataStore", desc: "Offline-first database and preferences storage." },
      { icon: "🔄", title: "Coroutines & Flow", desc: "Async programming and reactive data streams." },
      { icon: "🧪", title: "Testing", desc: "JUnit, Espresso, Compose UI tests, Robolectric." },
      { icon: "☁️", title: "Firebase & GCP", desc: "Auth, Firestore, analytics, Crashlytics." },
      { icon: "🔒", title: "Security", desc: "Keystore, biometrics, certificate pinning, ProGuard." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Android Development Process",
    steps: [
      { title: "Design & Prototype", desc: "Material Design specs and interactive Figma prototypes." },
      { title: "Kotlin Development", desc: "Clean Architecture, MVVM, and Jetpack Compose sprints." },
      { title: "QA & Device Testing", desc: "Firebase Test Lab across 20+ physical device configs." },
      { title: "Play Store Launch", desc: "Store listing, screenshots, release tracks, and ratings strategy." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "Android Stack We Use",
    cols: [
      { head: "Core", items: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines"] },
      { head: "Jetpack", items: ["Room", "DataStore", "Navigation", "WorkManager"] },
      { head: "Backend", items: ["Firebase", "Retrofit", "OkHttp", "gRPC"] },
      { head: "Tools", items: ["Android Studio", "Fastlane", "Firebase Test Lab", "LeakCanary"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for Android?",
    dark: true,
    items: [
      { icon: "⚡", title: "60fps Everywhere", desc: "Compose animations and custom drawing profiled with Systrace." },
      { icon: "📴", title: "Offline-First", desc: "Room DB and sync queues — works without internet." },
      { icon: "🔒", title: "Secure by Design", desc: "Keystore, biometrics, and network security config." },
      { icon: "✅", title: "Play Policy Experts", desc: "We navigate Play Store policies to avoid rejection." },
    ],
  },
  faq: {
    heading: "Android Developer FAQ",
    items: [
      { q: "Jetpack Compose or XML layouts?", a: "Compose for all new projects — faster iteration, better tooling. XML for legacy apps or when deep View interop is needed." },
      { q: "How do you handle Android fragmentation?", a: "minSdk 26+, adaptive layouts, Firebase Test Lab across device matrix, and thorough API level branching." },
      { q: "Can you build both Android and iOS?", a: "Yes — we have dedicated native teams for both, or can use React Native/Flutter for shared codebases when appropriate." },
      { q: "How long does Google Play review take?", a: "New apps: 3–7 days. Updates: 1–3 days. We prepare assets and metadata to avoid review delays." },
    ],
  },
  related: [
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "End-to-end mobile app development services." },
    { label: "Hire React Native Developer", href: "/react-native-developer/", desc: "Cross-platform engineers for iOS and Android." },
    { label: "Hire iOS Developer", href: "/ios-developer/", desc: "iOS specialists for App Store apps." },
  ],
  cta: { heading: "Build Your Android App", body: "Let's scope your Play Store project and plan the first sprint." },
};
export default data;
