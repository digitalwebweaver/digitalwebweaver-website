import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire Android App Developers | Kotlin & Jetpack Compose",
    description: "Hire Android developers skilled in Kotlin, Jetpack Compose, and Google Play launches. Serving India, UK, South Africa, and Ivory Coast. Free quote in 24 hours.",
  },
  prose: {
    eyebrow: "Android Development",
    heading: "Hire Android Developers Who Ship Native Kotlin",
    blocks: [
      { p: ["When you hire Android developers from our Vadodara studio, you get native Kotlin engineers who write Jetpack Compose UI, not template-driven contractors padding a Gradle file. This is for product teams that need a Play Store app to feel fast on a mid-range phone in Abidjan and a flagship in London alike — 60fps animations, offline-first data, and a codebase that survives the next SDK bump. We build native-first, so Compose, Coroutines, and Room are the default rather than a bolt-on, and our ", { text: "broader mobile app development practice", href: "/mobile-app-development/" }, " backs every engagement with design, QA, and release strategy from a single India base delivering to the UK, South Africa, and Ivory Coast."] },
      { h3: "Native depth, not cross-platform shortcuts", p: ["We reach for native Kotlin when performance, hardware access, and long-term maintainability matter — Health Connect for ", { text: "healthcare apps", href: "/healthcare/" }, ", Maps SDK and geofencing for location tracking, Play Billing and Google Pay for ", { text: "e-commerce checkout flows", href: "/ecommerce-development/" }, ". Architecture is Clean Architecture with MVVM, Hilt for injection, and Flow for reactive streams, all covered by JUnit, Espresso, and Compose UI tests. When a shared codebase genuinely fits the budget, we say so and can staff ", { text: "React Native engineers", href: "/react-native-developer/" }, " instead — but we won't sell you cross-platform to paper over a native problem."] },
      { h3: "From Figma to Play Store, and iOS too", p: ["Every build runs through Firebase Test Lab across 20+ physical device configs, ships secured with Keystore, biometrics, and certificate pinning, and reaches production with store listings tuned to avoid Play policy rejections. If you also need the App Store, our ", { text: "native iOS team", href: "/ios-developer/" }, " works in parallel so both platforms stay in feature lockstep. Browse our ", { text: "recent work", href: "/portfolio/" }, " to see the standard, or ", { text: "tell us about your app", href: "/contact/" }, " and we'll scope the first sprint with a free quote inside 24 hours."] },
    ],
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
