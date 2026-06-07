const fs = require('fs');
const path = require('path');

const hireDir = 'd:/dwww/react/data/pages/hire';

function addTags(content, title, tags) {
  const tagsStr = JSON.stringify(tags);
  const marker = `title: "${title}", desc: "`;
  const idx = content.indexOf(marker);
  if (idx === -1) return content;
  const afterMarker = idx + marker.length;
  const descEnd = content.indexOf('" }', afterMarker);
  if (descEnd === -1) return content;
  const insertAt = descEnd + 2;
  return content.slice(0, insertAt) + `, tags: ${tagsStr}` + content.slice(insertAt);
}

const hireTags = {
  'react-developer': [
    ['Single-Page Applications', ['React 18', 'React Router']],
    ['React Dashboards', ['AG Grid', 'Recharts']],
    ['Component Libraries', ['Storybook', 'Design tokens']],
    ['Legacy Migration', ['jQuery', 'AngularJS']],
    ['React Native', ['Expo', 'Cross-platform']],
    ['Performance Tuning', ['Web Vitals', 'Lighthouse']],
  ],
  'nodejs-developer': [
    ['REST API Development', ['Express', 'Fastify']],
    ['GraphQL APIs', ['Apollo', 'Pothos']],
    ['Real-Time Systems', ['WebSockets', 'Socket.io']],
    ['Microservices', ['Docker', 'Kubernetes']],
    ['Database Integration', ['PostgreSQL', 'Redis']],
    ['Background Jobs', ['BullMQ', 'Cron']],
  ],
  'python-developer': [
    ['Django Applications', ['Django REST', 'ORM']],
    ['FastAPI Services', ['Pydantic', 'Async']],
    ['Data Science', ['Pandas', 'NumPy']],
    ['Machine Learning', ['PyTorch', 'Scikit-learn']],
    ['Web Scraping', ['Scrapy', 'BeautifulSoup']],
    ['Automation', ['Celery', 'Airflow']],
  ],
  'php-developer': [
    ['Laravel Development', ['Laravel 11', 'Eloquent']],
    ['WordPress', ['ACF', 'WooCommerce']],
    ['API Development', ['REST', 'JWT']],
    ['Legacy PHP', ['CodeIgniter', 'CI4']],
    ['E-Commerce', ['Magento 2', 'WooCommerce']],
    ['Testing', ['PHPUnit', 'Pest']],
  ],
  'frontend-developer': [
    ['React & Vue', ['TypeScript', 'Vite']],
    ['CSS & Design', ['Figma', 'CSS Modules']],
    ['Performance', ['Lighthouse', 'Web Vitals']],
    ['Testing', ['Jest', 'Playwright']],
    ['Accessibility', ['WCAG 2.1', 'ARIA']],
    ['Animation', ['Framer Motion', 'GSAP']],
  ],
  'fullstack-developer': [
    ['Web Applications', ['React', 'Next.js']],
    ['API Development', ['Node.js', 'REST']],
    ['Database Design', ['PostgreSQL', 'Redis']],
    ['DevOps', ['Docker', 'CI/CD']],
    ['Mobile Apps', ['React Native', 'Expo']],
    ['Cloud Deployment', ['AWS', 'Vercel']],
  ],
  'ios-developer': [
    ['Native iOS Apps', ['SwiftUI', 'Swift 5']],
    ['App Store Launch', ['TestFlight', 'Xcode']],
    ['In-App Purchases', ['StoreKit 2', 'Subscriptions']],
    ['Push Notifications', ['APNS', 'UNUserNotification']],
    ['Maps & Location', ['MapKit', 'CoreLocation']],
    ['Objective-C Migration', ['Swift', 'UIKit']],
  ],
  'android-developer': [
    ['Native Android Apps', ['Kotlin', 'Jetpack Compose']],
    ['Play Store Launch', ['Android SDK', 'Material 3']],
    ['In-App Billing', ['Play Billing', 'Subscriptions']],
    ['Firebase Integration', ['FCM', 'Analytics']],
    ['Maps Integration', ['Google Maps', 'Location']],
    ['React Native', ['Cross-platform', 'Expo']],
  ],
  'react-native-developer': [
    ['Cross-Platform Apps', ['React Native', 'Expo']],
    ['iOS Delivery', ['TestFlight', 'App Store']],
    ['Android Delivery', ['Play Store', 'APK']],
    ['Offline Support', ['SQLite', 'AsyncStorage']],
    ['Animations', ['Reanimated', 'Gesture Handler']],
    ['Testing', ['Detox', 'Jest']],
  ],
  'flutter-developer': [
    ['Flutter Apps', ['Dart', 'Material 3']],
    ['State Management', ['Riverpod', 'BLoC']],
    ['Firebase', ['Auth', 'Firestore']],
    ['Native Features', ['Camera', 'GPS']],
    ['Animations', ['Lottie', 'Hero']],
    ['Testing', ['Integration tests', 'Mockito']],
  ],
  'vue-developer': [
    ['Vue 3 Applications', ['Pinia', 'Vite']],
    ['Nuxt.js Apps', ['SSR', 'SSG']],
    ['UI Frameworks', ['Vuetify', 'Quasar']],
    ['TypeScript', ['Composition API', 'VueUse']],
    ['Testing', ['Vitest', 'Vue Test Utils']],
    ['State Management', ['Pinia', 'Vuex']],
  ],
  'angular-developer': [
    ['Angular Apps', ['Angular 17', 'TypeScript']],
    ['State Management', ['NgRx', 'RxJS']],
    ['UI Components', ['Angular Material', 'CDK']],
    ['Testing', ['Jest', 'Karma']],
    ['Micro-Frontends', ['Module Federation', 'Nx']],
    ['Performance', ['Signals', 'OnPush']],
  ],
  'laravel-developer': [
    ['Laravel Applications', ['Laravel 11', 'PHP 8.3']],
    ['APIs', ['Sanctum', 'Passport']],
    ['Real-Time', ['Livewire', 'Broadcasting']],
    ['Database', ['Eloquent', 'Migrations']],
    ['Queue & Jobs', ['Horizon', 'Scheduler']],
    ['Testing', ['PHPUnit', 'Pest']],
  ],
  'devops-engineer': [
    ['AWS Infrastructure', ['EC2', 'ECS Fargate']],
    ['Kubernetes', ['EKS', 'Helm']],
    ['CI/CD Pipelines', ['GitHub Actions', 'ArgoCD']],
    ['Infrastructure as Code', ['Terraform', 'Pulumi']],
    ['Monitoring', ['Prometheus', 'Grafana']],
    ['Security', ['WAF', 'Secrets Manager']],
  ],
};

let totalUpdated = 0;
for (const [slug, tagsList] of Object.entries(hireTags)) {
  const filePath = path.join(hireDir, `${slug}.ts`);
  if (!fs.existsSync(filePath)) { console.warn('Missing:', filePath); continue; }
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = 0;
  for (const [title, tags] of tagsList) {
    const before = content;
    content = addTags(content, title, tags);
    if (content !== before) updated++;
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${slug}: ${updated}/${tagsList.length} tags added`);
  totalUpdated += updated;
}
console.log(`\nTotal: ${totalUpdated} service items tagged`);
