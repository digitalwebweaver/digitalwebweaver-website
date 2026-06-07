const fs = require('fs');
const path = require('path');

const hireDir = 'd:/dwww/react/data/pages/hire';

const marqueeData = {
  'react-developer': ['React 18', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Zustand', 'React Query', 'Vite', 'Storybook', 'Jest', 'RTL', 'Cypress', 'GraphQL'],
  'nodejs-developer': ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GraphQL', 'JWT', 'WebSockets', 'Fastify', 'Express'],
  'python-developer': ['Python 3.12', 'Django', 'FastAPI', 'Celery', 'PostgreSQL', 'Redis', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Docker', 'AWS Lambda'],
  'php-developer': ['PHP 8.3', 'Laravel', 'WordPress', 'MySQL', 'Redis', 'Composer', 'PHPUnit', 'WooCommerce', 'Magento', 'CodeIgniter'],
  'frontend-developer': ['React', 'Vue 3', 'TypeScript', 'CSS Modules', 'Tailwind', 'Figma', 'Storybook', 'Vite', 'Playwright', 'WCAG 2.1'],
  'fullstack-developer': ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL', 'REST APIs', 'Prisma'],
  'ios-developer': ['Swift 5', 'SwiftUI', 'UIKit', 'Combine', 'CoreData', 'StoreKit 2', 'APNS', 'TestFlight', 'Xcode', 'HealthKit'],
  'android-developer': ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Coroutines', 'Room', 'Hilt', 'FCM', 'Play Billing', 'Gradle', 'Material 3'],
  'react-native-developer': ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'React Query', 'Firebase', 'SQLite', 'Reanimated', 'Detox', 'Jest'],
  'flutter-developer': ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Firebase', 'SQLite', 'GetIt', 'GoRouter', 'Freezed', 'Isar'],
  'vue-developer': ['Vue 3', 'Nuxt.js', 'Pinia', 'TypeScript', 'Vite', 'Vitest', 'Vuetify', 'Quasar', 'Vue Router', 'VueUse'],
  'angular-developer': ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Karma', 'Jasmine', 'Nx monorepo', 'Angular CDK', 'Signals'],
  'laravel-developer': ['Laravel 11', 'PHP 8.3', 'MySQL', 'Redis', 'Livewire', 'Inertia.js', 'Eloquent', 'Sanctum', 'Horizon', 'Vapor'],
  'devops-engineer': ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Helm', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Prometheus', 'Grafana', 'ELK Stack'],
};

let updated = 0;
for (const [slug, items] of Object.entries(marqueeData)) {
  const filePath = path.join(hireDir, `${slug}.ts`);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing:', filePath);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if marqueeItems already exists
  if (content.includes('marqueeItems:')) {
    console.log('Already has marqueeItems:', slug);
    continue;
  }

  // Find the breadcrumbs line and add marqueeItems after it
  // Pattern: the hero object has breadcrumbs, stats - add marqueeItems between them
  const breadcrumbPattern = /breadcrumbs: \[.*?\],(\s*)(stats:|formVariant:|hero\})/;
  const match = content.match(breadcrumbPattern);

  if (match) {
    const marqueeStr = JSON.stringify(items);
    content = content.replace(breadcrumbPattern, `breadcrumbs: [${match[0].match(/breadcrumbs: \[(.*?)\]/)[1]}],\n    marqueeItems: ${marqueeStr},\n    $2`);
  } else {
    // Try simpler pattern - look for stats: and add before it
    const statsIdx = content.indexOf('\n    stats:');
    if (statsIdx !== -1) {
      content = content.slice(0, statsIdx) + `\n    marqueeItems: ${JSON.stringify(items)},` + content.slice(statsIdx);
    } else {
      // Add after breadcrumbs
      const bcIdx = content.lastIndexOf('breadcrumbs:');
      if (bcIdx !== -1) {
        const endBc = content.indexOf('],', bcIdx) + 2;
        content = content.slice(0, endBc) + `\n    marqueeItems: ${JSON.stringify(items)},` + content.slice(endBc);
      } else {
        console.warn('Could not find insertion point for:', slug);
        continue;
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
  console.log('Updated:', slug);
}

console.log(`\nDone. Updated ${updated} files.`);
