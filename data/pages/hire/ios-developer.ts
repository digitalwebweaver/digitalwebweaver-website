import type { ServicePageData } from "@/lib/types";

const data: ServicePageData = {
  meta: {
    title: "Hire iOS App Developers | Swift, SwiftUI Experts",
    description: "Hire iOS developers for native Swift and SwiftUI apps with seamless App Store deployment and Apple ecosystem integrations. Get matched in 48 hours.",
  },
  hero: {
    eyebrow: "iOS Development",
    heading: "iOS Developers Who Build App Store-Ready Apps",
    lead: "We create polished, performant iOS apps with Swift and SwiftUI — designed for the Apple ecosystem and approved on first submission.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "iOS Developer" }],
    marqueeItems: ["Swift 5","SwiftUI","UIKit","Combine","CoreData","StoreKit 2","APNS","TestFlight","Xcode","HealthKit"],
    stats: [{ value: "25+", label: "iOS Apps" }, { value: "Swift 5", label: "Native Only" }, { value: "4.8★", label: "Avg Store Rating" }],
  },
  services: {
    variant: "svc",
    eyebrow: "What We Build",
    heading: "iOS Development Services",
    items: [
      { icon: "📱", title: "Native Swift Apps", desc: "Full iOS apps with SwiftUI, UIKit, and Combine." },
      { icon: "🛒", title: "E-Commerce iOS Apps", desc: "Shopping, payments, and Apple Pay integration." },
      { icon: "🏥", title: "Healthcare Apps", desc: "HealthKit, HIPAA-compliant data, and EHR integrations." },
      { icon: "📍", title: "Location & Maps", desc: "MapKit, CoreLocation, geofencing, and AR views." },
      { icon: "🔔", title: "Push Notifications", desc: "APNS, rich notifications, and notification extensions." , tags: ["APNS","UNUserNotification"]},
      { icon: "🔄", title: "App Modernisation", desc: "Migrate Objective-C and legacy UIKit apps to SwiftUI." },
    ],
  },
  capabilities: {
    eyebrow: "Technical Depth",
    heading: "iOS Capabilities",
    dark: true,
    items: [
      { icon: "📱", title: "SwiftUI & UIKit", desc: "Modern declarative UI and legacy UIKit bridging." },
      { icon: "☁️", title: "CloudKit & Firebase", desc: "Real-time sync, auth, and cloud data storage." },
      { icon: "🔒", title: "Keychain & Security", desc: "Secure storage, Face ID/Touch ID, and data encryption." },
      { icon: "🧪", title: "XCTest & UI Tests", desc: "Unit, snapshot, and UI automation test suites." },
      { icon: "📊", title: "Analytics", desc: "Firebase Analytics, Mixpanel, custom event tracking." },
      { icon: "🛒", title: "In-App Purchases", desc: "StoreKit 2, subscriptions, and receipt validation." },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our iOS Development Process",
    steps: [
      { title: "Design & Prototype", desc: "Figma wireframes and clickable prototypes before coding." },
      { title: "Swift Development", desc: "Feature sprints with daily TestFlight builds for review." },
      { title: "QA & Device Testing", desc: "Test on physical devices across iOS versions and screen sizes." },
      { title: "App Store Submission", desc: "Screenshot prep, metadata, review guidelines compliance." },
    ],
  },
  stack: {
    eyebrow: "Technology Stack",
    heading: "iOS Stack We Use",
    cols: [
      { head: "Core", items: ["Swift 5", "SwiftUI", "UIKit", "Combine / async-await"] },
      { head: "Backend", items: ["Firebase", "CloudKit", "REST APIs", "GraphQL"] },
      { head: "Tools", items: ["Xcode", "TestFlight", "Fastlane", "Charles Proxy"] },
      { head: "Testing", items: ["XCTest", "XCUITest", "Snapshot Testing", "Instruments"] },
    ],
  },
  why: {
    eyebrow: "Why Choose Us",
    heading: "Why Digital Web Weaver for iOS?",
    dark: true,
    items: [
      { icon: "✅", title: "First-Submission Approval", desc: "Deep App Review Guidelines knowledge — we avoid rejections." },
      { icon: "⚡", title: "60fps Performance", desc: "Profiled with Instruments — no janky scrolling ever." },
      { icon: "🎨", title: "HIG Compliant", desc: "Apple Human Interface Guidelines followed meticulously." },
      { icon: "📱", title: "All Device Sizes", desc: "From iPhone SE to iPad Pro — every screen covered." },
    ],
  },
  faq: {
    heading: "iOS Developer FAQ",
    items: [
      { q: "SwiftUI or UIKit?", a: "SwiftUI for new projects — cleaner code and better preview tooling. UIKit when deep customisation or legacy integration is needed." },
      { q: "How long does App Store review take?", a: "Typically 24–48 hours for new apps. Expedited reviews available for critical fixes. We manage the process end-to-end." },
      { q: "Do you build for iPad too?", a: "Yes — adaptive layouts that scale beautifully from iPhone SE to 13-inch iPad Pro." },
      { q: "Can you take over an existing iOS codebase?", a: "Yes — we do code audits, documentation, and incremental modernisation of existing Swift and Objective-C apps." },
    ],
  },
  related: [
    { label: "Mobile App Development", href: "/mobile-app-development/", desc: "End-to-end mobile app development services." },
    { label: "Hire React Native Developer", href: "/react-native-developer/", desc: "Cross-platform engineers for iOS and Android." },
    { label: "Hire Android Developer", href: "/android-developer/", desc: "Android specialists for Google Play apps." },
  ],
  cta: { heading: "Build Your iOS App", body: "Let's scope your App Store project and plan the first sprint." },
};
export default data;
