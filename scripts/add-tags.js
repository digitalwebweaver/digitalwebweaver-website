const fs = require('fs');
const path = 'd:/dwww/react/data/pages/industries/industries.ts';
let c = fs.readFileSync(path, 'utf8');

function addTags(content, title, tags) {
  const tagsStr = JSON.stringify(tags);
  // Simple string replacement: find title and desc, add tags before closing }
  const marker = `title: "${title}", desc: "`;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.warn('NOT FOUND:', title);
    return content;
  }
  // Find the end of this item: closing " }
  const afterMarker = idx + marker.length;
  const descEnd = content.indexOf('" }', afterMarker);
  if (descEnd === -1) return content;
  const insertAt = descEnd + 2; // after the closing "
  return content.slice(0, insertAt) + `, tags: ${tagsStr}` + content.slice(insertAt);
}

// Healthcare
c = addTags(c, 'EHR / EMR Systems', ['HIPAA', 'HL7 FHIR']);
c = addTags(c, 'Patient Portals', ['React', 'WebSockets']);
c = addTags(c, 'Telemedicine Apps', ['WebRTC', 'Stripe']);
c = addTags(c, 'Clinical Analytics', ['Data viz', 'PostgreSQL']);
c = addTags(c, 'Medical Device Integration', ['IoT', 'REST APIs']);
c = addTags(c, 'Pharmacy Management', ['Node.js', 'Queues']);

// Fintech
c = addTags(c, 'Payment Processing', ['Stripe', 'PCI-DSS']);
c = addTags(c, 'Lending Platforms', ['Node.js', 'PostgreSQL']);
c = addTags(c, 'KYC / AML Systems', ['Onfido', 'AWS']);
c = addTags(c, 'Trading Dashboards', ['WebSockets', 'React']);
c = addTags(c, 'Open Banking APIs', ['OAuth 2.0', 'REST']);
c = addTags(c, 'Wealth Management', ['Python', 'ML']);

// EdTech
c = addTags(c, 'LMS Platforms', ['SCORM', 'LTI']);
c = addTags(c, 'Live Class Tools', ['WebRTC', 'Agora']);
c = addTags(c, 'Assessment Engines', ['React', 'Node.js']);
c = addTags(c, 'Learning Analytics', ['PostgreSQL', 'Metabase']);
c = addTags(c, 'Mobile Learning', ['React Native', 'Offline']);
c = addTags(c, 'Certification Systems', ['PDF', 'Blockchain']);

// Logistics
c = addTags(c, 'Fleet Management', ['GPS', 'WebSockets']);
c = addTags(c, 'Shipment Tracking', ['React Native', 'SQLite']);
c = addTags(c, 'Warehouse Management', ['Node.js', 'Barcode']);
c = addTags(c, 'Route Optimisation', ['OSRM', 'Python']);
c = addTags(c, 'ERP Integration', ['SAP', 'EDI']);
c = addTags(c, 'Supply Chain Analytics', ['PostgreSQL', 'Metabase']);

// Manufacturing
c = addTags(c, 'MES Systems', ['React', 'Node.js']);
c = addTags(c, 'MRP / Planning', ['MQTT', 'TimescaleDB']);
c = addTags(c, 'Quality Control', ['Python', 'ML']);
c = addTags(c, 'IoT Integration', ['OPC-UA', 'MQTT']);
c = addTags(c, 'Production Analytics', ['PostgreSQL', 'React']);

// Real Estate
c = addTags(c, 'Property Listing Platforms', ['Mapbox', 'Elasticsearch']);
c = addTags(c, 'Agent CRM', ['React', 'PostgreSQL']);
c = addTags(c, 'Virtual Tours', ['Matterport', 'WebGL']);
c = addTags(c, 'Lease Management', ['DocuSign', 'Stripe']);
c = addTags(c, 'Property Valuation', ['Python', 'ML']);
c = addTags(c, 'Mobile Apps', ['React Native', 'Mapbox']);

// Retail & E-Commerce
c = addTags(c, 'Custom E-Commerce', ['Next.js', 'Shopify']);
c = addTags(c, 'Headless Commerce', ['React', 'API-First']);
c = addTags(c, 'POS Integration', ['Stripe', 'Square']);
c = addTags(c, 'Loyalty Programs', ['Gamification', 'Points']);
c = addTags(c, 'Recommendation Engine', ['ML', 'Personalisation']);
c = addTags(c, 'Retail Analytics', ['PostgreSQL', 'Metabase']);

// SaaS Startups
c = addTags(c, 'MVP Development', ['8–12 weeks', 'Full-stack']);
c = addTags(c, 'SaaS Architecture', ['Multi-tenant', 'RBAC']);
c = addTags(c, 'Billing & Subscriptions', ['Stripe', 'Payments']);
c = addTags(c, 'Analytics & Growth', ['PostHog', 'Mixpanel']);
c = addTags(c, 'Onboarding Flows', ['Activation', 'UX']);
c = addTags(c, 'Integration Marketplace', ['Webhooks', 'OAuth']);

fs.writeFileSync(path, c, 'utf8');
const tagCount = (c.match(/tags:/g) || []).length;
console.log('tags added:', tagCount);
