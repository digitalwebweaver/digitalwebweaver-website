const fs = require('fs');
const path = require('path');

const hireDir = 'd:/dwww/react/data/pages/hire';

function addTagsToItem(content, title, tags) {
  const tagsStr = JSON.stringify(tags);
  const marker = `title: "${title}", desc: "`;
  let idx = content.indexOf(marker);
  let count = 0;
  while (idx !== -1) {
    const afterMarker = idx + marker.length;
    const descEnd = content.indexOf('" }', afterMarker);
    if (descEnd === -1) break;
    // Check if tags already exist on this item
    const itemSlice = content.slice(descEnd + 2, descEnd + 30);
    if (itemSlice.includes('tags:')) {
      // Already has tags, skip
      idx = content.indexOf(marker, idx + marker.length);
      continue;
    }
    const insertAt = descEnd + 2;
    content = content.slice(0, insertAt) + `, tags: ${tagsStr}` + content.slice(insertAt);
    count++;
    // Move past the insertion to avoid infinite loop
    idx = content.indexOf(marker, insertAt + tagsStr.length);
  }
  return [content, count];
}

// Map of file -> array of [title, tags] pairs
const tagMaps = {
  'nodejs-developer': [
    ['REST & GraphQL APIs', ['Express', 'Apollo']],
    ['Real-Time Apps', ['WebSockets', 'Socket.io']],
    ['Auth Systems', ['JWT', 'OAuth 2.0']],
    ['Serverless Functions', ['Lambda', 'Edge']],
  ],
  'python-developer': [
    ['Django Web Apps', ['Django ORM', 'DRF']],
    ['Data Engineering', ['Pandas', 'Spark']],
    ['ML & AI', ['PyTorch', 'LangChain']],
    ['Automation & Scripts', ['Celery', 'Airflow']],
    ['API Integrations', ['REST', 'Webhooks']],
  ],
  'php-developer': [
    ['WordPress Plugins', ['ACF', 'Gutenberg']],
    ['WooCommerce', ['Extensions', 'Payments']],
    ['REST APIs', ['JWT', 'Sanctum']],
  ],
  'frontend-developer': [
    ['React Applications', ['React 18', 'Next.js']],
    ['Vue.js Applications', ['Vue 3', 'Pinia']],
    ['TypeScript Development', ['TypeScript', 'Zod']],
    ['Testing', ['Jest', 'Playwright']],
    ['Performance Optimisation', ['Lighthouse', 'Web Vitals']],
  ],
  'fullstack-developer': [
    ['SaaS Products', ['Stripe', 'Auth0']],
    ['E-Commerce', ['Shopify', 'WooCommerce']],
    ['Admin Dashboards', ['React', 'AG Grid']],
    ['REST APIs', ['Node.js', 'FastAPI']],
  ],
  'ios-developer': [
    ['SwiftUI Apps', ['SwiftUI', 'Combine']],
    ['App Store Submission', ['TestFlight', 'Xcode']],
    ['Core Data', ['SQLite', 'CloudKit']],
    ['Objective-C Migration', ['Swift', 'UIKit']],
  ],
  'android-developer': [
    ['Jetpack Compose Apps', ['Kotlin', 'Material 3']],
    ['Play Store Submission', ['Gradle', 'Android SDK']],
    ['Firebase Integration', ['FCM', 'Crashlytics']],
    ['Legacy Migration', ['Java', 'Kotlin']],
  ],
  'react-native-developer': [
    ['iOS & Android Apps', ['React Native', 'Expo']],
    ['Offline Support', ['SQLite', 'MMKV']],
    ['Navigation', ['React Navigation', 'Deep links']],
    ['Device Features', ['Camera', 'GPS']],
  ],
  'flutter-developer': [
    ['iOS & Android Apps', ['Flutter', 'Dart']],
    ['Offline & Sync', ['Isar', 'Hive']],
    ['Navigation', ['GoRouter', 'GetIt']],
    ['Testing', ['Mockito', 'Integration tests']],
  ],
  'vue-developer': [
    ['Nuxt.js Applications', ['Nuxt 3', 'SSR']],
    ['Pinia State Management', ['Pinia', 'Stores']],
    ['UI Frameworks', ['Vuetify', 'Quasar']],
    ['Testing', ['Vitest', 'Vue Test Utils']],
  ],
  'angular-developer': [
    ['Angular Applications', ['Angular 17', 'RxJS']],
    ['NgRx State Management', ['NgRx', 'Effects']],
    ['Angular Material', ['CDK', 'Accessibility']],
    ['Testing', ['Jest', 'Jasmine']],
  ],
  'laravel-developer': [
    ['Web Applications', ['Blade', 'Livewire']],
    ['REST & GraphQL APIs', ['Sanctum', 'Versioning']],
    ['E-Commerce Backends', ['Cart', 'Payments']],
    ['Filament Admin Panels', ['Filament', 'Resources']],
    ['Queue & Job Processing', ['Horizon', 'Redis']],
    ['Legacy PHP Migration', ['CodeIgniter', 'Refactor']],
  ],
  'devops-engineer': [
    ['AWS Infrastructure', ['EC2', 'ECS']],
    ['Kubernetes', ['EKS', 'Helm']],
    ['Monitoring & Alerting', ['Prometheus', 'PagerDuty']],
  ],
};

let totalAdded = 0;
for (const [slug, tagsList] of Object.entries(tagMaps)) {
  const filePath = path.join(hireDir, `${slug}.ts`);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  let added = 0;
  for (const [title, tags] of tagsList) {
    const [newContent, count] = addTagsToItem(content, title, tags);
    content = newContent;
    added += count;
  }
  if (added > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${slug}: +${added} tags`);
    totalAdded += added;
  }
}
console.log(`\nTotal: ${totalAdded} tags added`);
