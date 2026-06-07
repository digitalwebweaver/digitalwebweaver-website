const fs = require('fs');

// Update main-services.ts - add marqueeItems to each hero section
function updateMainServices() {
  const filePath = 'd:/dwww/react/data/pages/services/main-services.ts';
  let c = fs.readFileSync(filePath, 'utf8');

  const marqueeMap = {
    'saasDevelopment': ["Multi-tenancy", "Subscription billing", "React", "Node.js", "PostgreSQL", "AWS", "Stripe", "OAuth 2.0", "REST APIs", "Webhooks", "CI/CD", "Feature flags"],
    'crmErpSystems': ["Sales pipeline", "Inventory management", "HR & payroll", "Finance & accounting", "Customer portal", "Reporting & BI", "Multi-branch", "Role-based access", "API integrations", "Audit logs"],
    'mvpDevelopment': ["Discovery", "User stories", "Figma prototype", "API design", "React", "Node.js", "PostgreSQL", "Stripe", "Auth", "CI/CD", "UAT", "Launch"],
    'mobileAppDevelopment': ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Push notifications", "Offline-first", "BLE / GPS", "App Store submission", "Play Store submission", "Deep links", "In-app purchases"],
    'customWebApps': ["React", "Next.js", "Vue.js", "Node.js", "Django", "Laravel", "PostgreSQL", "Redis", "REST APIs", "GraphQL", "WebSockets", "Role-based auth"],
    'ecommerceDevelopment': ["Shopify Plus", "WooCommerce", "Magento", "Headless commerce", "Stripe", "Razorpay", "PayPal", "Multi-currency", "Inventory sync", "ERP integration", "Subscription billing"],
    'uiUxDesign': ["User research", "Usability testing", "Figma", "Design systems", "Prototyping", "Accessibility (WCAG)", "Mobile-first", "Design tokens", "UX audit", "Heuristic analysis", "A/B testing"],
    'cloudDevOps': ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "ELK Stack", "CloudFront", "RDS"],
    'aiAutomation': ["OpenAI", "Anthropic Claude", "LangChain", "RAG pipelines", "Vector databases", "Pinecone", "Document extraction", "OCR", "Fine-tuning", "Whisper", "Gemini"],
    'openSourceDevelopment': ["WordPress", "WooCommerce", "Magento 2", "Custom plugins", "ACF", "Gutenberg blocks", "REST API", "WP CLI", "Multisite", "WPML", "WP Engine"],
    'webDevelopment': ["React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Python", "Laravel", "Django", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
  };

  // Add marqueeItems to each service's hero - find unique breadcrumb patterns
  const patterns = {
    'saasDevelopment': '{ label: "Home", href: "/" }, { label: "SaaS Development" }',
    'crmErpSystems': '{ label: "Home", href: "/" }, { label: "CRM & ERP Systems" }',
    'mvpDevelopment': '{ label: "Home", href: "/" }, { label: "MVP Development" }',
    'mobileAppDevelopment': '{ label: "Home", href: "/" }, { label: "Mobile App Development" }',
    'customWebApps': '{ label: "Home", href: "/" }, { label: "Custom Web Apps" }',
    'ecommerceDevelopment': '{ label: "Home", href: "/" }, { label: "E-Commerce Development" }',
    'uiUxDesign': '{ label: "Home", href: "/" }, { label: "UI/UX Design" }',
    'cloudDevOps': '{ label: "Home", href: "/" }, { label: "Cloud & DevOps" }',
    'aiAutomation': '{ label: "Home", href: "/" }, { label: "AI & Automation" }',
    'openSourceDevelopment': '{ label: "Home", href: "/" }, { label: "Open-Source Development" }',
    'webDevelopment': '{ label: "Home", href: "/" }, { label: "Web Development" }',
  };

  for (const [key, items] of Object.entries(marqueeMap)) {
    const pattern = patterns[key];
    if (!pattern) continue;
    const oldStr = `breadcrumbs: [${pattern}], stats:`;
    const newStr = `breadcrumbs: [${pattern}],\n    marqueeItems: ${JSON.stringify(items)},\n    stats:`;
    if (c.includes(oldStr)) {
      c = c.replace(oldStr, newStr);
      console.log('Updated:', key);
    } else {
      console.warn('Pattern not found for:', key, '| searched for:', oldStr.slice(0, 60));
    }
  }

  fs.writeFileSync(filePath, c, 'utf8');
}

// Update products.ts - add marqueeItems to each mk() call result
function updateProducts() {
  const filePath = 'd:/dwww/react/data/pages/products/products.ts';
  let c = fs.readFileSync(filePath, 'utf8');

  // Update mk() factory to accept marqueeItems
  c = c.replace(
    'const mk = (\n  title: string,\n  desc: string,\n  eyebrow: string,\n  heading: string,\n  lead: string,\n  svcs: { icon: string; title: string; desc: string }[]\n): ServicePageData => ({',
    'const mk = (\n  title: string,\n  desc: string,\n  eyebrow: string,\n  heading: string,\n  lead: string,\n  svcs: { icon: string; title: string; desc: string }[],\n  marqueeItems?: string[]\n): ServicePageData => (({'
  );

  // Actually simpler: just add marqueeItems inline to each export after the fact
  // Let's use a different approach - add to the hero directly after breadcrumbs

  // For food-delivery-app: marker is 'food-delivery-app'
  const productMarquee = {
    foodDeliveryApp: {
      lead: "We build complete three-sided food delivery ecosystems",
      items: ["Customer App", "Restaurant Dashboard", "Driver App", "React Native", "Real-time Tracking", "Stripe", "Razorpay", "Google Maps", "Firebase", "White-label", "iOS & Android"]
    },
    laundryManagementSystem: {
      lead: "We build complete laundry management software",
      items: ["Customer App", "Driver App", "Operations Dashboard", "Admin Panel", "QR Tracking", "React Native", "Slot Scheduling", "Stripe", "Firebase", "White-label", "Multi-branch"]
    },
    inventoryManagementSystem: {
      lead: "We build inventory management systems",
      items: ["Multi-warehouse", "Barcode scanning", "QR codes", "Shopify sync", "WooCommerce", "QuickBooks", "Xero", "Purchase orders", "ABC analysis", "Serial tracking", "FIFO / LIFO"]
    },
    learningManagementSystem: {
      lead: "We build feature-rich LMS platforms",
      items: ["LMS", "Course builder", "SCORM", "Video hosting", "Certifications", "Multi-instructor", "Gamification", "White-label", "Corporate training", "EdTech", "HLS streaming"]
    },
    codeigniterDevelopment: {
      lead: "We build and maintain CodeIgniter applications",
      items: ["CodeIgniter 4", "CI4 REST API", "CI3 migration", "PHP 8.2", "JWT auth", "Query builder", "PHPUnit", "Docker", "Redis cache", "Legacy rescue", "CSRF protection"]
    },
    wpLogisticsCourierPlugin: {
      lead: "CourierPress is our commercial WordPress plugin",
      items: ["WordPress", "WooCommerce", "Shipment tracking", "Driver assignment", "Email/SMS alerts", "Admin panel", "Label printing", "Multi-courier", "REST API", "PHP 8"]
    },
    wpCourierTrackingPlugin: {
      lead: "Our standalone WordPress courier tracking plugin",
      items: ["WordPress", "Tracking widget", "Status pages", "Multi-courier", "Email notifications", "REST API", "WooCommerce", "Shortcode", "PHP 8", "Responsive"]
    },
  };

  // Add marqueeItems to each exported const by finding unique lead text
  for (const [exportName, data] of Object.entries(productMarquee)) {
    const leadIdx = c.indexOf(`"${data.lead}`);
    if (leadIdx === -1) { console.warn('Lead not found:', exportName); continue; }
    // Find breadcrumbs after the lead
    const bcIdx = c.indexOf('breadcrumbs:', leadIdx);
    if (bcIdx === -1) { console.warn('breadcrumbs not found after lead:', exportName); continue; }
    const bcEnd = c.indexOf('],', bcIdx) + 2;
    const insertStr = `\n    marqueeItems: ${JSON.stringify(data.items)},`;
    c = c.slice(0, bcEnd) + insertStr + c.slice(bcEnd);
    console.log('Updated product:', exportName);
  }

  fs.writeFileSync(filePath, c, 'utf8');
}

updateMainServices();
updateProducts();
console.log('\nDone!');
